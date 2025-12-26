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
          id: "mico-gen-ai/ad-variation-generation",
          label: "Ad Variation Generation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/auto-background-removal",
          label: "Auto background removal",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/extract-objects-from-image",
          label: "Extract objects from image",
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
          id: "mico-gen-ai/fill-missing-parts-of-image",
          label: "Fill missing parts of image",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/image-variations-recommendation",
          label: "Image variations recommendation",
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
          id: "template-variation-mcr",
          label: "Template variation: Mico Craft AI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/get-job-status",
          label: "Get job status",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "AI Vision",
      items: [
        {
          type: "doc",
          id: "mico-gen-ai/extend-image-boundaries",
          label: "Extend image boundaries",
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
