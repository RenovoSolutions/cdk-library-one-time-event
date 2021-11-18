# cdk-library-one-time-event

[![build](https://github.com/RenovoSolutions/cdk-library-one-time-event/actions/workflows/build.yml/badge.svg)](https://github.com/RenovoSolutions/cdk-library-one-time-event/workflows/build.yml)

An AWS CDK Construct library to create one time event [schedules](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-events.Schedule.html).

## Features
- Create two types of event [schedules](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-events.Schedule.html) easily:
  - On Deployment: An one time event schedule for directly after deployment. Defaults to 10mins after.
  - At: A one time even schedule for any future `Date()`

## API Doc
See [API](API.md)saassa

## Examples
### Typescript - run after deploy, offset 15mins
```
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as oneTimeEvents from '@renovosolutions/cdk-library-one-time-event';

export class CdkExampleLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset(functionDir + '/function.zip'),
      handler: 'index.handler',
    });

    new events.Rule(this, 'triggerImmediate', {
      schedule: new oneTimeEvents.OnDeploy(this, 'schedule', {
        offsetMinutes: 15
      }).schedule,
      targets: [new targets.LambdaFunction(this.handler)],
    });
```

### Typescript - run in 24 hours
```
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as oneTimeEvents from '@renovosolutions/cdk-library-one-time-event';

export class CdkExampleLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset(functionDir + '/function.zip'),
      handler: 'index.handler',
    });

    var tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    new events.Rule(this, 'triggerImmediate', {
      schedule: new oneTimeEvents.At(this, 'schedule', {
        date: tomorrow
      }).schedule,
      targets: [new targets.LambdaFunction(this.handler)],
    });
```
