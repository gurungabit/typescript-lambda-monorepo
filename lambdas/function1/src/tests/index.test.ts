import { describe, it, expect } from 'vitest';
import { handler } from '../index';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

describe('function1 handler', () => {
  it('should return a 200 status code and a message', async () => {
    const mockEvent = {} as APIGatewayProxyEvent;
    const mockContext = {} as Context;

    const result = await handler(mockEvent, mockContext, () => {});
    
    if (result) {
      expect(result.statusCode).toBe(200);
      expect(JSON.parse(result.body)).toEqual({ message: 'Hello from Function 1!' });
    } else {
      throw new Error('Handler returned void');
    }
  });
});
