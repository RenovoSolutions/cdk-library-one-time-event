const { AwsCdkConstructLibrary, NpmAccess } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '1.128.0',
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
  releaseToNpm: true,
  releaseWorkflow: true,
  npmAccess: NpmAccess.PUBLIC,
  cdkAssert: true,
  mergify: false,
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