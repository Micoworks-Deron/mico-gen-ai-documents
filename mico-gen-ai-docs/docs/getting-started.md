# Getting Started

Welcome to the Mico Gen AI API! This guide will help you get up and running with our comprehensive AI Vision API for image processing and generation.

## Quick Start

### 1. Get Your API Key

First, you'll need to obtain an API key to authenticate your requests:
Apply a free API key from h.alan@mico-inc.com or l.deron@mico-inc.com

### 2. Authentication

All `/aivision/*` endpoints require authentication using Bearer token format:

```bash
Authorization: Bearer YOUR_API_KEY
```

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
- Get get the unique job ID first
```json
{
    "status_code": 200,
    "message": "SUCCESS",
    "result": {
        "job_id": "8014d750-c7cf-4cdf-9e8d-ca55433629db",
        "status": "processing"
    }
}
```

- Use the unique job ID to retrieve the API response for each task
```json
{
    "status_code": 200,
    "message": "SUCCESS",
    "result": {
        "job_id": "8014d750-c7cf-4cdf-9e8d-ca55433629db",
        "status": "processing",
        "job_type": "AUTO_BACKGROUND_REMOVAL",
        "batch_size": 1,
        "total_tasks": 1,
        "completed_tasks": 0,
        "failed_tasks": 0,
        "tasks": [
            {
                "task_id": "196c8c0f-09d7-4a90-ab61-7debc7ad4675",
                "index": 0,
                "status": "processing",
                "job_type": "AUTO_BACKGROUND_REMOVAL",
                "result": null,
                "error_msg": null
            }
        ],
        "created_at": "2026-01-16T04:19:03.254Z",
        "updated_at": "2026-01-16T04:19:03.342Z"
    }
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

## Need Help?
- Contact support at h.alan@mico-inc.com or l.deron@mico-inc.com

## FAQ

### How do I get an API key?
Apply for a free API key by contacting h.alan@mico-inc.com or l.deron@mico-inc.com