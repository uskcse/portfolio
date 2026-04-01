# Portfolio Website - Deployment Guide

This guide explains how to deploy the portfolio website to Azure Web App and Google Cloud Run.

## Prerequisites

1. Node.js 18.x or later
2. npm
3. GitHub account
4. Cloud account for your target platform (Azure or Google Cloud)

## Development

```bash
npm install
npm run dev
```

## Build and Test

```bash
npm run build
npm run test
```

## Azure Web App Deployment

### Setup

1. Install Azure CLI.
2. Create a Web App in Azure Portal.
3. Download the publish profile.
4. Add the publish profile to GitHub Secrets as `AZURE_WEBAPP_PUBLISH_PROFILE`.
5. Use `.github/workflows/azure-deploy.yml` for CI/CD deployment on push to `master`.

### Manual Azure Setup

```bash
npm run deploy:azure
```

### Azure Environment Variables

Create a `.env` file with:

```env
AZURE_WEBAPP_NAME=your-webapp-name
AZURE_RESOURCE_GROUP=your-resource-group
```

### Azure Monitoring

```bash
az webapp log tail --name $AZURE_WEBAPP_NAME --resource-group $AZURE_RESOURCE_GROUP
```

## Google Cloud Run Deployment

Cloud Run deployment is configured with [`build.yaml`](./build.yaml).
Default runtime profile is set to minimum resources for low cost:
- `gen1` execution environment
- `0.08` vCPU
- `128Mi` memory
- `min-instances=0`
- `max-instances=1`
- `concurrency=1`

### Setup

1. Install and initialize Google Cloud SDK:

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

2. Enable required APIs:

```bash
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
```

### Deploy Using Cloud Build

Run this from the repository root:

```bash
gcloud builds submit --config build.yaml
```

### Deploy With Custom Service Name and Region

```bash
gcloud builds submit \
  --config build.yaml \
  --substitutions=_SERVICE_NAME=portfolio,_REGION=asia-south1,_PORT=8080,_CPU=0.5,_MEMORY=256Mi,_MAX_INSTANCES=2
```

### Verify Deployment

```bash
gcloud run services describe portfolio --region us-central1 --format='value(status.url)'
```
