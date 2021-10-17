import * as events from '@aws-cdk/aws-events';
import * as cdk from '@aws-cdk/core';

export interface IOnDeployProps {
  /**
   * The number of minutes to add to the current time when generating the expression.
   * Should exceed the expected time for the appropriate resources to converge.
   * Defaults to 10 mins.
   */
  offsetMinutes?: number;
}

export interface IAtProps {
  /**
   * The future date to use for one time event.
   */
  date: Date;
}

export function dateToCron(date:Date) {
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();
  const days = date.getUTCDay();
  const months = date.getUTCMonth() + 1;
  const years = date.getUTCFullYear();

  return `${minutes} ${hours} ${days} ${months} ? ${years}`;
};

export class OnDeploy extends cdk.Construct {

  public readonly schedule: events.Schedule;

  constructor(scope: cdk.Construct, id: string, props: IOnDeployProps) {
    super(scope, id);

    const date = new Date();
    const minutesToAdd = props.offsetMinutes || 10;
    const future = new Date(date.getTime() + minutesToAdd * 60000);

    this.schedule = events.Schedule.expression('cron(' + dateToCron(future) + ')');
  }
}

export class At extends cdk.Construct {

  public readonly schedule: events.Schedule;

  constructor(scope: cdk.Construct, id: string, props: IAtProps) {
    super(scope, id);

    this.schedule = events.Schedule.expression('cron(' + dateToCron(props.date) + ')');
  }
}
