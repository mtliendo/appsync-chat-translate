import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createCognitoAuth } from './auth/cognito'
import { createAmplifyGraphQLAPI } from './api/appsync'
import { createAddUserFunc } from './functions/addUserPostConfirmation/construct'
import { CfnUserPool } from 'aws-cdk-lib/aws-cognito'
import {
	PolicyDocument,
	PolicyStatement,
	Role,
	ServicePrincipal,
} from 'aws-cdk-lib/aws-iam'

export class CdkBackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		const appName = 'appsync-chat-translate'
		super(scope, id, props)

		const auth = createCognitoAuth(this, { appName })

		const api = createAmplifyGraphQLAPI(this, {
			appName,
			userpool: auth.userPool,
			authRole: auth.identityPool.authenticatedRole,
			unauthRole: auth.identityPool.unauthenticatedRole,
			identityPoolId: auth.identityPool.identityPoolId,
		})

		const addUserFunc = createAddUserFunc(this, {
			appName,
			userDBARN: api.resources.tables['User'].tableArn,
			environmentVars: {
				userDBTableName: api.resources.tables['User'].tableName,
			},
		})

		addUserFunc.addPermission('CognitoInvokePermission', {
			principal: new ServicePrincipal('cognito-idp.amazonaws.com'),
		})

		const l1Pool = auth.userPool.node.defaultChild as CfnUserPool
		l1Pool.lambdaConfig = {
			postConfirmation: `arn:aws:lambda:${this.region}:${this.account}:function:${appName}-addUserFunc`,
		}

		new cdk.CfnOutput(this, 'region', {
			value: this.region,
		})

		new cdk.CfnOutput(this, 'userPoolId', {
			value: auth.userPool.userPoolId,
		})

		new cdk.CfnOutput(this, 'userPoolWebClientId', {
			value: auth.userPoolClient.userPoolClientId,
		})

		new cdk.CfnOutput(this, 'identityPoolId', {
			value: auth.identityPool.identityPoolId,
		})

		new cdk.CfnOutput(this, 'appSyncEndpoint', {
			value: api.resources.cfnResources.cfnGraphqlApi.attrGraphQlUrl,
		})

		new cdk.CfnOutput(this, 'appSyncDefaultAuthType', {
			value: api.resources.cfnResources.cfnGraphqlApi.authenticationType,
		})
	}
}
