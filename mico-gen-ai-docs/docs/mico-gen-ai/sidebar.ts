import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "mico-gen-ai/generative-ai-api",
    },
    {
      type: "category",
      label: "Generative AI",
      items: [
        {
          type: "doc",
          id: "mico-gen-ai/ad-variation-generation",
          label: "Ad Variation Generation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "mico-gen-ai/image-auto-background-from-removal",
          label: "Image - Auto background from removal",
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
