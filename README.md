# Serverless-App Docs & Website

This repo contains the source code of [Serverless-App website](http://serverless-app.com/) and all of the docs for Serverless-App.
It's built by [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Welcome to join us and you are more than appreciated to contribute!



# Website Preview

Please make sure you have [yarn installed](https://www.geeksforgeeks.org/how-to-install-yarn-in-macos-ubuntu-windows/) in your OS environment.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Versions for new release

All docs of new features should be updated in the latest docs, we will create a new version of docs along with the code release.

### Build New Version

```
yarn docusaurus docs:version v1.x
```

### Update Docs for version

```
make update-version version=v1.x
```

## Send your pull request

After all changes checked well, please [creating a pull request](https://help.github.com/en/articles/creating-a-pull-request) with [DCO](https://github.com/apps/dco).