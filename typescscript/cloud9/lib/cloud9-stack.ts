import * as cloud9 from '@aws-cdk/aws-cloud9';
import cdk = require('@aws-cdk/core');

export class Cloud9Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new cloud9.CfnEnvironmentEC2(this, 'cloud9', {
      instanceType: 't3.medium',
      connectionType: 'CONNECT_SSM',
      automaticStopTimeMinutes: 60,
      name: "cdk-cl9-test",
    })
  }
}