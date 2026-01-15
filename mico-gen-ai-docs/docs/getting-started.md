# Getting Started

Welcome to the Mico Gen AI API! This guide will help you get up and running with our comprehensive AI Vision API for image processing and generation.

## Quick Start

### 1. Get Your API Key

First, you'll need to obtain an API key to authenticate your requests:
Apply a free API key from h.alan@mico-inc.com

### 2. Authentication

All `/aivision/*` endpoints require authentication using Bearer token format:

```bash
Authorization: Bearer YOUR_API_KEY
```

**Note**: `/health` and `/documentation` endpoints are publicly accessible and do not require authentication.

### 3. Choose Environment (Base URL)

Use the correct base URL for the environment you’re calling:

- **Dev**: `https://api-mico-gen-ai.dev-craft.mico.one`
- **Staging**: `https://mico.gen.ai.stg-craft.mico.one`
- **Production**: `https://mico.gen.ai.craft.mico.one`

### 4. Make Your First API Call

Let's start with a simple background removal request:

```bash
BASE_URL="https://api-mico-gen-ai.dev-craft.mico.one"
curl -X POST "$BASE_URL/aivision/autoBackgroundRemoval" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@your-image.jpg"
```

### 5. Response Format

All API responses follow a consistent JSON format:

```json
{
  "success": true,
  "data": {
    "result_url": "https://storage.mico.ai/processed/image.png",
    "processing_time": 2.3
  },
  "message": "Background removed successfully"
}
```

## Supported Services

Mico Gen AI supports three powerful AI platforms:

- **Gemini3.0**: Primary AI service for most operations
- **OpenAI**: Alternative service for most operations
- **Mico**: Alternative service for most operations

## File Upload Limits

- **Maximum file size**: 35MB
- **Supported formats**: JPEG, PNG, WebP
- **Maximum batchSize per request**: 6

## Next Steps

- Explore our [API Documentation](/docs/developers/mico-gen-ai/introduction) for detailed endpoint information
- Browse our comprehensive API reference for specific use cases
- Join our community for support and discussions

## Need Help?

- Contact support at h.alan@mico-inc.com or l.deron@mico-inc.com
- Join our community for support and discussions

## FAQ

### How do I get an API key?
Apply for a free API key by contacting h.alan@mico-inc.com or l.deron@mico-inc.com

### What file formats are supported?
We support JPEG, PNG, and WebP formats with a maximum file size of 35MB.

### What are the rate limits?
Rate limits vary by subscription plan. Contact support for details about your specific plan.