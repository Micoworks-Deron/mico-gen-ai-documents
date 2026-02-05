import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "mico-gen-ai/mico-gen-ai",
    },
    {
      type: "category",
      label: "Mico Gen AI",
      items: [
        {
          type: "doc",
          id: "mico-gen-ai/auto-background-removal",
          label: "Auto background removal",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/generate-human-images",
          label: "Generate human images",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/generate-stock-photo-images",
          label: "Generate stock photo images",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/image-to-video",
          label: "Image to Video",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/template-variation-mcr",
          label: "Template variation optimization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/get-job-status",
          label: "Get job status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "mico-gen-ai/cancel-a-job",
          label: "Cancel a job",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "AI Vision",
      items: [
        {
          type: "doc",
          id: "mico-gen-ai/ad-variation",
          label: "Ad Variation (Manual/Auto Mode)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/remove-objects-using-inpainting",
          label: "Remove objects using inpainting",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
