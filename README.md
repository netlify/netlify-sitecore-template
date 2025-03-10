# XM Cloud Next.js Starter Kit - Next JS
This repository contains the Next.js Starter Kit for Sitecore XM Cloud Development. It is intended to get developers up and running quickly with a new Next.js project that is integrated with Sitecore XM Cloud.

## GitHub Template
This Github repository is a template that can be used to create your own repository. To get started, click the `Use this template` button at the top of the repository. 

### Prerequisites
- Access to an Sitecore XM Cloud Environment
- [Node.js LTS](https://nodejs.org/en/)

### Getting Started Guide
For developers new to XM Cloud you can follow the Getting Started Guide on the [Sitecore Documentation Site](https://doc.sitecore.com/xmc) to get up and running with XM Cloud. This will walk you through the process of creating a new XM Cloud Project, provisioning an Environment, deploying the NextJs Starter Kit, and finally creating your first Component.

### Running the Next.js Starter Kit
- Log into the Sitecore XM Cloud Deploy Portal, locate your Environment and select the `Developer Settings` tab.
- Ensure that the `Preview` toggle is enabled.
- In the `Local Development` section, click to copy the sample `.env` file contents to your clipboard.
- Create a new `.env.local` file in the `./headapps/nextjs-starter` folder of this repository and paste the contents from your clipboard.
- Run the following commands in the root of the repository to start the NextJs application:
    ```bash
    cd headapps/nextjs-starter
    npm install
    npm run start:connected
    ```
- You should now be able to access your site on `http://localhost:3000` and see your changes in real-time as you make them.

## Disconnected offline development
It is possible to mock a small subset of the XM Cloud Application elements to enable offline development. This can allow for a disconnected development experience, however it is recommend to work in the default connected mode.

You can find more information about how setup the offline development experience [here](./local-containers/README.md)


Login or Signup to [Netlify](https://app.netlify.com)
You will need a Netlify account to complete this project. 
- [ ] Netlify account created? 

## Git

Login or Signup to [Github](https://github.com/signup?source=login)
You will need a GitHub account to complete this project. 
- [ ] Github account created? 

## Sitecore

Login or Signup to [Sitecore XM Cloud](https://portal.sitecorecloud.io/.)
You will need a sitecore account or variables to complete this project. 


## Note!!!
In order to save time, your work will be entirely done in your git repo and the Netlify UI. 

## One-click Deploy with Netlify (recommended)

Please click on the Depoly to Netlify button below. This will clone your repo to your github repository, as well as deploy your application to your Netlify instance. 

#Before you click on the deploy to Netlify button, you will need the following handy:

- `Name of Repository` **Any name you like** 
- `FETCH_WITH` The way in which layout and dictionary data is fetched from Sitecore
- `GRAPH_QL_ENDPOINT` For Sitecore XM, this is typically optional.
- `GRAPH_QL_SERVICE_RETRIES` How many times should GraphQL Layout, Dictionary and ErrorPages services retry a fetch when endpoint rate limit is reached
- JSS_EDITING_SECRET` To secure the Sitecore editor endpoint exposed by your Next.js app
- `NETLIFY_BUILD_DEBUG` To help debug Netlify build errors. 
- `SITECORE_API_KEY` Typically, the API key is # defined in `scjssconfig.json` (as `sitecore.apiKey`)
- `SITECORE_EDGE_CONTEXT_ID` Your unified Sitecore Edge Context Id.
- `SITECORE_SITE_NAME` Your Sitecore site name.

The one-click deploy allows you to connect Netlify to your GitHub account to clone the `Sitecore Template` repository and deploy it automatically.

[![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-sitecore-template)

By clicking the above button, you will be navigated to the Netlify’s direct deploy page with the project’s repository passed as parameters in the url. Click the **Connect to GitHub** button, name your repository and enter in this your Sitecore Values. 
