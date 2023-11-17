import {
	IdentityPool,
	UserPoolAuthenticationProvider,
} from '@aws-cdk/aws-cognito-identitypool-alpha'
import { RemovalPolicy } from 'aws-cdk-lib'
import {
	AccountRecovery,
	StringAttribute,
	UserPool,
	UserPoolClient,
	VerificationEmailStyle,
} from 'aws-cdk-lib/aws-cognito'
import { Construct } from 'constructs'

type CognitoAuthProps = {
	appName: string
}

export function createCognitoAuth(scope: Construct, props: CognitoAuthProps) {
	const userPool = new UserPool(scope, `${props.appName}-userpool`, {
		userPoolName: `${props.appName}-userpool`,
		signInAliases: { email: true },
		selfSignUpEnabled: true,
		userVerification: {
			emailStyle: VerificationEmailStyle.CODE,
		},
		passwordPolicy: {
			minLength: 10,
		},
		accountRecovery: AccountRecovery.EMAIL_ONLY,
		removalPolicy: RemovalPolicy.RETAIN_ON_UPDATE_OR_DELETE,
		customAttributes: {
			preferred_lang: new StringAttribute({
				mutable: true,
				minLen: 2,
				maxLen: 10,
			}),
		},
	})

	const userPoolClient = new UserPoolClient(
		scope,
		`${props.appName}-userpoolClient`,
		{ userPool }
	)

	const identityPool = new IdentityPool(
		scope,
		`${props.appName}-identityPool`,
		{
			identityPoolName: `${props.appName}-identityPool`,
			allowUnauthenticatedIdentities: true,
			authenticationProviders: {
				userPools: [
					new UserPoolAuthenticationProvider({
						userPool: userPool,
						userPoolClient: userPoolClient,
					}),
				],
			},
		}
	)

	return { userPool, userPoolClient, identityPool }
}
