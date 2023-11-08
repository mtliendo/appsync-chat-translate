import { Construct } from 'constructs'
import {
	AmplifyGraphqlApi,
	AmplifyGraphqlDefinition,
} from '@aws-amplify/graphql-api-construct'
import { UserPool } from 'aws-cdk-lib/aws-cognito'
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam'
import * as path from 'path'
import { Code, FunctionRuntime } from 'aws-cdk-lib/aws-appsync'
import { IBucket } from 'aws-cdk-lib/aws-s3'

type AmplifyGraphQLAPIProps = {
	appName: string
	userpool: UserPool
	authRole: IRole
	unauthRole: IRole
	identityPoolId: string
}

export const createAmplifyGraphQLAPI = (
	scope: Construct,
	props: AmplifyGraphQLAPIProps
) => {
	const api = new AmplifyGraphqlApi(scope, `${props.appName}`, {
		apiName: `${props.appName}`,
		definition: AmplifyGraphqlDefinition.fromFiles(
			path.join(__dirname, 'schema.graphql')
		),
		authorizationModes: {
			defaultAuthorizationMode: 'AMAZON_COGNITO_USER_POOLS',
			userPoolConfig: {
				userPool: props.userpool,
			},
			iamConfig: {
				identityPoolId: props.identityPoolId,
				unauthenticatedUserRole: props.unauthRole,
				authenticatedUserRole: props.authRole,
			},
		},
	})

	const translateDatasource = api.addHttpDataSource(
		'translateDatasource',
		'https://translate.us-east-1.amazonaws.com',
		{
			authorizationConfig: {
				signingRegion: 'us-east-1',
				signingServiceName: 'translate',
			},
		}
	)

	translateDatasource.grantPrincipal.addToPrincipalPolicy(
		new PolicyStatement({
			resources: ['*'],
			actions: ['translate:TranslateText'],
		})
	)

	const messageTableDS = api.addDynamoDbDataSource(
		'messageTableDS',
		api.resources.tables['Message']
	)

	const translateFunction = api.addFunction('translateFunction', {
		name: 'translateFunction',
		dataSource: translateDatasource,
		runtime: FunctionRuntime.JS_1_0_0,
		code: Code.fromAsset(path.join(__dirname, 'JS_Functions/translate.js')),
	})

	const saveTranslateMessageFunction = api.addFunction(
		'saveTranslateMessageFunction',
		{
			name: 'saveTranslateMessageFunction',
			dataSource: messageTableDS,
			runtime: FunctionRuntime.JS_1_0_0,
			code: Code.fromAsset(path.join(__dirname, 'JS_Functions/saveMessage.js')),
		}
	)

	api.addResolver('Mutation.translateMessage', {
		typeName: 'Mutation',
		fieldName: 'translateMessage',
		runtime: FunctionRuntime.JS_1_0_0,
		pipelineConfig: [translateFunction, saveTranslateMessageFunction],
		code: Code.fromAsset(path.join(__dirname, 'JS_Functions/pipeline.js')),
	})

	const noneDS = api.addNoneDataSource('NoneDS')

	api.addResolver('Subscription.onTranslateMessage', {
		typeName: 'Subscription',
		fieldName: 'onTranslateMessage',
		runtime: FunctionRuntime.JS_1_0_0,
		dataSource: noneDS,
		code: Code.fromAsset(
			path.join(__dirname, 'JS_Functions/messageSubscription.js')
		),
	})

	return api
}
