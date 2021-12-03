import { SynthUtils } from '@aws-cdk/assert';
import { aws_events as events, App, Stack } from 'aws-cdk-lib';
import * as oneTimeEvents from '../src/index';

jest.setSystemTime(new Date('2020-01-01').getTime());

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack', {});

  new events.Rule(stack, 'triggerImmediate', {
    schedule: new oneTimeEvents.OnDeploy(stack, 'schedule', {
      offsetMinutes: 10,
    }).schedule,
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
