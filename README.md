# Mico Generative AI API Documentation

Documentation site for the Mico Generative AI API, built with Docusaurus and OpenAPI documentation generation.

## Updating Service on EC2

### Deployment Steps

Follow these commands to sync the latest changes and rebuild the site:

```bash
# 1. Switch to the application user
sudo su - appuser

# 2. Navigate to the project directory
cd /opt/streamlit/mico-gen-ai-documents/mico-gen-ai-docs

# 3. Pull latest changes from repository
git pull

# 4. Build the production site
npm run build

# 5. Exit back to the original user
exit

# 6. Restart the documentation service to apply changes
sudo systemctl restart docs.service 2>/dev/null || systemctl --user restart docs.service
```
