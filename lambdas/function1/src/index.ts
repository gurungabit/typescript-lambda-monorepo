import { APIGatewayProxyHandler, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const path = event.path;

  switch (path) {
    case '/hello':
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello, World!' }),
      };
    case '/goodbye':
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Goodbye!' }),
      };
    default:
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Not Found' }),
      };
  }
};
