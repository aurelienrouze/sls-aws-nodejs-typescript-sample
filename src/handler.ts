import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda'

export const helloWorld: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('handler @ 🌍 - hello world !')

  return {
    statusCode: 200,
    body: 'Hello world !'
  }
}
