# Nest.js Serverless AWS Example
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  &nbsp;&nbsp;&nbsp;
  <a href="http://aws.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png?20170912170050" width="120" alt="AWS Logo" /></a>
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
## Description

This repository demonstrates how to build and deploy a [Nest](https://github.com/nestjs/nest) application with the Serverless Framework on AWS. It packages the API as AWS Lambda functions behind API Gateway, giving you a template for scalable, pay-per-use backend services.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Serverless workflow

### Test locally

```bash
# compile the lambda bundle
$ npm run build

# start the local API Gateway/Lambda emulation
$ npx serverless offline
```

The service runs on `http://localhost:3000` by default; use any HTTP client to exercise the endpoints.

### Deploy to AWS

```bash
$ npx serverless deploy
```

Ensure your AWS credentials (for example via `AWS_PROFILE` or environment variables) are available before running the command. You can add flags such as `--stage` or `--region` if you need to target a specific environment.

### Remove the AWS stack

```bash
$ npx serverless remove
```

This tears down the CloudFormation stack and deletes all provisioned resources for the selected stage/region.

