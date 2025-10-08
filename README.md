# Mico Generative AI API Documentation

Documentation site for the Mico Generative AI API, built with Docusaurus and OpenAPI documentation generation.

## Updating Service on EC2

To update the documentation service on EC2, follow these steps:

```bash
# 1. Navigate to the project directory
cd /opt/streamlit/mico-gen-ai-documents/mico-gen-ai-docs

# 2. Pull latest changes from git
git pull

# 3. Build the documentation site
npm run build

# 4. Restart the docs service
sudo systemctl restart docs.service 2>/dev/null || systemctl --user restart docs.service
```
