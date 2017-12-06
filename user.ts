// import * as AWS from "aws-sdk";
import {APIGatewayEvent, Context, ProxyCallback} from 'aws-lambda';

export const get = (event: APIGatewayEvent, context: Context, cb: ProxyCallback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  cb(null, response);
}

export const post = (event: APIGatewayEvent, context: Context, cb: ProxyCallback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  cb(null, response);
}
