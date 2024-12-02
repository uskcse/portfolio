#!/bin/bash

# Source the Azure configuration
source ./src/utils/azure-config.ts

# Login to Azure
echo "Logging in to Azure..."
az login

# Create Resource Group
echo "Creating Resource Group..."
az group create --name $resourceGroup --location $location

# Create App Service Plan
echo "Creating App Service Plan..."
az appservice plan create \
  --name "${webAppName}-plan" \
  --resource-group $resourceGroup \
  --sku $sku

# Create Web App
echo "Creating Web App..."
az webapp create \
  --name $webAppName \
  --resource-group $resourceGroup \
  --plan "${webAppName}-plan" \
  --runtime "$runtime"

# Configure Web App Settings
echo "Configuring Web App Settings..."
az webapp config appsettings set \
  --name $webAppName \
  --resource-group $resourceGroup \
  --settings \
    NODE_ENV=production \
    SCM_DO_BUILD_DURING_DEPLOYMENT=true

# Enable logging
echo "Enabling logging..."
az webapp log config \
  --name $webAppName \
  --resource-group $resourceGroup \
  --web-server-logging filesystem

echo "Setup complete! Your Azure Web App is ready for deployment."