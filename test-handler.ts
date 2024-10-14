import { handler } from './lambdas/function1/src/index';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

async function testHandler() {
  const testCases = [{ path: '/hello' }, { path: '/goodbye' }, { path: '/nonexistent' }];

  for (const testCase of testCases) {
    const event: APIGatewayProxyEvent = {
      path: testCase.path,
      httpMethod: 'GET',
      headers: {},
      multiValueHeaders: {},
      queryStringParameters: null,
      multiValueQueryStringParameters: null,
      pathParameters: null,
      stageVariables: null,
      requestContext: {
        accountId: '',
        apiId: '',
        authorizer: {},
        protocol: '',
        httpMethod: '',
        identity: {
          accessKey: null,
          accountId: null,
          apiKey: null,
          apiKeyId: null,
          caller: null,
          clientCert: null,
          cognitoAuthenticationProvider: null,
          cognitoAuthenticationType: null,
          cognitoIdentityId: null,
          cognitoIdentityPoolId: null,
          principalOrgId: null,
          sourceIp: '',
          user: null,
          userAgent: null,
          userArn: null,
        },
        path: '',
        stage: '',
        requestId: '',
        requestTimeEpoch: 0,
        resourceId: '',
        resourcePath: '',
      },
      resource: '',
      body: null,
      isBase64Encoded: false,
    };

    const context: Context = {
      callbackWaitsForEmptyEventLoop: false,
      functionName: '',
      functionVersion: '',
      invokedFunctionArn: '',
      memoryLimitInMB: '',
      awsRequestId: '',
      logGroupName: '',
      logStreamName: '',
      getRemainingTimeInMillis: () => 0,
      done: () => {},
      fail: () => {},
      succeed: () => {},
    };

    console.log(`Testing path: ${testCase.path}`);
    const result = await handler(event, context, () => {});
    console.log('Result:', result);
    console.log('---');
  }
}

testHandler();
