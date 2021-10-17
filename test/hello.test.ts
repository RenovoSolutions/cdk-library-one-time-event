// import { expect as expectCDK, countResources } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as oneTimeEvents from '../src/index';

test('Default', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new oneTimeEvents.OnDeploy (stack, 'Certbot', {});
});
