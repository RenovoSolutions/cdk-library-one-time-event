import { aws_events as events, App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as oneTimeEvents from '../src/index';

const date = new Date('2020-01-15');
date.setHours(15);
date.setMinutes(23);

jest.setSystemTime(date.getTime());

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack', {});

  new events.Rule(stack, 'triggerImmediate', {
    schedule: new oneTimeEvents.OnDeploy(stack, 'schedule', {
      offsetMinutes: 10,
    }).schedule,
  });

  expect(Template.fromStack(stack)).toMatchSnapshot();
});
