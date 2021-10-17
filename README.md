# cdk-library-one-time-event

An AWS CDK Construct library to create one time event [schedules](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-events.Schedule.html).

## Features
- Create two types of event [schedules](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-events.Schedule.html) easily:
  - On Deployment: An one time event schedule for directly after deployment. Defaults to 10mins after.
  - At: A one time even schedule for any future `Date()`

## API Doc
See [API](API.md)
