import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '2.202.0',
  jsiiVersion: '^5.8.0',
  projenrcTs: true,
  defaultReleaseBranch: 'master',
  majorVersion: 2,
  releaseBranches: {
    v1: {
      majorVersion: 1,
    },
  },
  name: '@renovosolutions/cdk-library-one-time-event',
  description: 'AWS CDK Construct Library to create one time event schedules.',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-one-time-event.git',
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
    exclude: ['projen'],
  },
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically approve dependency upgrade PRs if they pass build',
          actions: {
            review: {
              type: 'APPROVE',
              message: 'Automatically approved dependency upgrade PR',
            },
          },
          conditions: [
            'label=auto-approve',
            'label=deps-upgrade',
            '-label~=(do-not-merge)',
            'status-success=build',
            'author=github-actions[bot]',
            'title="chore(deps): upgrade dependencies"',
          ],
        },
      ],
    },
    pullRequestLintOptions: {
      semanticTitle: true,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
          'ci',
        ],
      },
    },
  },
  releaseToNpm: true,
  release: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-one-time-event',
    module: 'renovosolutions_one_time_event',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.OneTimeEvent',
  },
  jestOptions: {
    jestConfig: {
      fakeTimers: {
        enableGlobally: true,
      },
    },
  },
});

new javascript.UpgradeDependencies(project, {
  include: ['projen'],
  taskName: 'upgrade-projen',
  workflow: true,
  workflowOptions: {
    schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 2 * * 1']),
  },
  pullRequestTitle: 'upgrade projen',
});

project.synth();