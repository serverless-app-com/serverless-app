import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    title: <Translate>Application-Centric</Translate>,
    imgUrl: 'img/application-centric.svg',
    description: (
      <p>
        <Translate>
          Developers write 'serverless-app.yaml' to define how to build and run an application.
          Devolopers focuses on business 
        </Translate>
      </p>
    ),
  },
  {
    title: <Translate>Auto-Scaling</Translate>,
    imgUrl: 'img/auto-scaling.svg',
    description: (
      <p>
        <Translate>
        Microservices deployed in Serverless-App scale automatically based on the number of incoming requests. 
        Scale your applications cost effectively, with high availability and low latency.
        </Translate>
      </p>
    ),
    reverse: true,
  },
  {
    title: <Translate>Multi-cloud</Translate>,
    imgUrl: 'img/multi-cloud.svg',
    description: (
      <p>
        <Translate>
        Connect your applications with database, cache, message, and other services provided by multi cloud provider.
        </Translate>
      </p>
    ),
  },
  {
    title: <Translate>Security</Translate>,
    imgUrl: 'img/security.svg',
    description: (
      <p>
        <Translate>
        Serverless-App can be reachable from the internet, or you can restrict access through Cloud IAM or VPC.

        </Translate>
      </p>
    ),
    reverse: true,
  },
]

export default features
