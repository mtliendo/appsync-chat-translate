#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { CdkBackendStack } from '../lib/cdk-backend-stack'

const app = new cdk.App()
new CdkBackendStack(app, 'SampleTranslatChatStack', {
	stackName: 'SampleTranslatChatStack',
})
