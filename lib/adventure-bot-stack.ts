import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class AdventureBotStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Adventure generator Lambda
    const adventureGeneratorLambda = new lambda.Function(this, 'AdventureBotLambda', {
      code: lambda.Code.fromAsset('lambda/adventure-generator'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: cdk.Duration.seconds(30),
      environment: {
        OPENAI_API_KEY: 'replace this',
        OPENAI_PROMPT: 'Write a paragraph promoting this event, but represent it as a high-adrenaline activity.'
      }
    });

    adventureGeneratorLambda.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE
    });
  }
}
