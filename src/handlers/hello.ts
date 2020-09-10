import { APIGatewayProxyHandler, APIGatewayProxyResult, APIGatewayProxyEvent, Context } from "aws-lambda";

export const helloHandler: APIGatewayProxyHandler = async (event:APIGatewayProxyEvent, context:Context) => {
    let response:APIGatewayProxyResult;
    response = {
        body: "Hello World!!!",
        statusCode: 200
    }

    return response;
};
