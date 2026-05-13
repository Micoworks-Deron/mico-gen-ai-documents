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
          id: "mico-gen-ai/text-variation-manual-auto-mode",
          label: "Text Variation (Manual/Auto Mode)",
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
      label: "Brand Extraction",
      items: [
        {
          type: "doc",
          id: "mico-gen-ai/brand-extract",
          label: "Extract brand identity from website",
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
      ],
    },
  ],
};

export default sidebar.apisidebar;
