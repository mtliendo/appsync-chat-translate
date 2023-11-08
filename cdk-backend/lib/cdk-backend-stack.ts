import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createCognitoAuth } from './auth/cognito'
import { createAmplifyGraphQLAPI } from './api/appsync'

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
	}
}
