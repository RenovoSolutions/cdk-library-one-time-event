const { AwsCdkConstructLibrary, NpmAccess } = require('projen');
const { MergifyConditionalOperator } = require('projen/lib/github');

const project = new AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '1.132.0',
  defaultReleaseBranch: 'master',
  name: '@renovosolutions/cdk-library-one-time-event',
  description: 'AWS CDK Construct Library to create one time event schedules.',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-one-time-event.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-events',
  ],
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
  },
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically merge PRs that meet merge conditions',
          actions: {
            merge: {
              method: 'squash',
              commit_message: 'title+body',
              strict: 'smart',
              strict_method: 'merge',
            },
            delete_head_branch: {},
          },
          conditions: [
            'check-status=MergableConditionsCheck',
          ],
        },
        {
          name: 'MergableConditionsCheck',
          conditions: [{
            or: [
              {
                and: [
                  'label=auto-approve',
                  'label=deps-upgrade',
                  '-label~=(do-not-merge)',
                  'status-success=build',
                  'author=github-actions[bot]',
                  'title="chore(deps): upgrade dependencies"',
                ],
              },
              {
                and: [
                  '#approved-reviews-by>=1',
                  '-label~=(do-not-merge)',
                  'status-success=build',
                ],
              },
            ],
          }],
        },
      ],
    },
  },
  releaseToNpm: true,
  releaseWorkflow: true,
  npmAccess: NpmAccess.PUBLIC,
  cdkAssert: true,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-one-time-event',
    module: 'one-time-event',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.OneTimeEvent',
  },
});
project.synth();