import { aws_events as events } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface OnDeployProps {
  /**
   * The number of minutes to add to the current time when generating the expression.
   * Should exceed the expected time for the appropriate resources to converge.
   *
   *
   * @default 10
   */
  readonly offsetMinutes?: number;
}

export interface AtProps {
  /**
   * The future date to use for one time event.
   */
  readonly date: Date;
}

export function dateToCron(date:Date) {
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();
  const days = date.getDate() + 1;
  const months = date.getUTCMonth() + 1;
  const years = date.getUTCFullYear();

  return `${minutes} ${hours} ${days} ${months} ? ${years}`;
};

export class OnDeploy extends Construct {

  public readonly schedule: events.Schedule;

  constructor(scope: Construct, id: string, props: OnDeployProps) {
    super(scope, id);

    const date = new Date();
    const minutesToAdd = props.offsetMinutes || 10;
    const future = new Date(date.getTime() + minutesToAdd * 60000);

    this.schedule = events.Schedule.expression('cron(' + dateToCron(future) + ')');
  }
}

export class At extends Construct {

  public readonly schedule: events.Schedule;

  constructor(scope: Construct, id: string, props: AtProps) {
    super(scope, id);

    this.schedule = events.Schedule.expression('cron(' + dateToCron(props.date) + ')');
  }
}
