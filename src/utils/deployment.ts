import { azureConfig } from './azure-config';

export const generateDeploymentScript = () => {
  return `
az login
az group create --name ${azureConfig.resourceGroup} --location ${azureConfig.location}
az appservice plan create --name ${azureConfig.webAppName}-plan --resource-group ${azureConfig.resourceGroup} --sku ${azureConfig.sku}
az webapp create --name ${azureConfig.webAppName} --resource-group ${azureConfig.resourceGroup} --plan ${azureConfig.webAppName}-plan --runtime "${azureConfig.runtime}"
`;
};

export const generateDeployCommand = () => {
  return `
npm run build
az webapp deployment source config-local-git --name ${azureConfig.webAppName} --resource-group ${azureConfig.resourceGroup}
git init
git add .
git commit -m "Initial commit"
git remote add azure <AZURE_GIT_URL>
git push azure master
`;
};