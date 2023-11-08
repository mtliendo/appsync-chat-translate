import { Context } from '@aws-appsync/utils'

export function request(ctx: Context) {
	return {
		resourcePath: '/',
		method: 'POST',
		params: {
			headers: {
				'Content-Type': 'application/x-amz-json-1.1',
				'X-Amz-Target': 'AWSShineFrontendService_20170701.TranslateText',
			},
			body: {
				Text: ctx.arguments.input.text,
				SourceLanguageCode: ctx.arguments.input.sourceLanguage,
				TargetLanguageCode: ctx.arguments.input.destinationLanguage,
			},
		},
	}
}

export function response(ctx: Context) {
	const res = JSON.parse(ctx.result.body)
	console.log('the response ya boi got from translate', res)

	return res
}
