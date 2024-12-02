# Portfolio Website - Azure Deployment Guide

This guide explains how to deploy the portfolio website to Azure Web App.

## Prerequisites

1. Azure CLI installed
2. Node.js 18.x or later
3. GitHub account
4. Azure subscription

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Azure credentials:
- Go to Azure Portal
- Create a new Web App
- Download the publish profile
- Add the publish profile to GitHub Secrets as AZURE_WEBAPP_PUBLISH_PROFILE

3. Configure GitHub Actions:
- The workflow is already set up in `.github/workflows/azure-deploy.yml`
- It will automatically deploy when you push to the main branch

## Manual Deployment

To manually set up the Azure infrastructure:

```bash
npm run deploy:azure
```

## Development

```bash
npm run dev
```

## Building

```bash
npm run build
```

## Testing

```bash
npm run test
```

## Environment Variables

Create a `.env` file with:

```
AZURE_WEBAPP_NAME=your-webapp-name
AZURE_RESOURCE_GROUP=your-resource-group
```

## Monitoring

Access logs through Azure Portal or:

```bash
az webapp log tail --name $AZURE_WEBAPP_NAME --resource-group $AZURE_RESOURCE_GROUP
```