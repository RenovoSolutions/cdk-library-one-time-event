import { SynthUtils } from '@aws-cdk/assert';
import * as events from '@aws-cdk/aws-events';
import * as cdk from '@aws-cdk/core';
import * as oneTimeEvents from '../src/index';

jest.setSystemTime(new Date('2020-01-01').getTime());

test('Snapshot', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new events.Rule(stack, 'triggerImmediate', {
    schedule: new oneTimeEvents.OnDeploy(stack, 'schedule', {
      offsetMinutes: 10,
    }).schedule,
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
