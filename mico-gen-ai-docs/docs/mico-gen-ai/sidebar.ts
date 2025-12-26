import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api",
    },
    {
      type: "category",
      label: "Mico Gen AI",
      items: [
        {
          type: "doc",
          id: "ad-variation-generation",
          label: "Ad Variation Generation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "auto-background-removal",
          label: "Auto background removal",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "extract-objects-from-image",
          label: "Extract objects from image",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generate-human-images",
          label: "Generate human images",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generate-stock-photo-images",
          label: "Generate stock photo images",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fill-missing-parts-of-image",
          label: "Fill missing parts of image",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "image-variations-recommendation",
          label: "Image variations recommendation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "image-to-video",
          label: "Image to Video",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "template-variation-optimization",
          label: "Template variation optimization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-job-status",
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
          id: "extend-image-boundaries",
          label: "Extend image boundaries",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "remove-objects-using-inpainting",
          label: "Remove objects using inpainting",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
