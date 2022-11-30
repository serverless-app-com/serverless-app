import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

const WhatIs = () => (
    <div className="hero">
        <div className="container">
            <div className="row">
                <div className="col col--6">
                    <h1><Translate>What is Serverless-App?</Translate></h1>
                    <p className="hero__subtitle">
                        <small>
                            <Translate>
                                Serverless-App is a modern serverless platform that makes deploying and operating web applications and API services across multi-cloud environments
                            </Translate><i><Translate> easier, faster and more reliable.</Translate></i>
                            <br />
                            <br />
                            <Translate>
                            Serverless-App is 
                            </Translate><i><b> <Translate>application-centric.</Translate></b></i>
                            <Translate> It allows you to build powerful applications without prior infrastructure, scale your applications cost effectively with high availability and low latency.</Translate>
                        </small>
                    </p>
                </div>
                <div className="col">
                    <img
                        className="image"
                        src={useBaseUrl("img/what-is-serverless-app.png")}
                        align="right"
                        alt="what is Serverless-App"
                    />
                </div>
            </div>
        </div>
    </div >
);

export default WhatIs