import demoVideo from "../../../assets/videos/codebase-intelligence-fast.mp4";
import codebase0 from "../../../assets/images/projects/cubewar/architecture.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Codebase Intelligence",
  theme: "dark",
  tags: ["hybrid_search", "llm", "vector_db", "python"],
  videoBorder: false,
  live: "https://github.com/pratikgadhave211/Codebase-Intelligence",
  source: "https://github.com/pratikgadhave211/Codebase-Intelligence",
  description:
    "An advanced AI-powered repository analysis and architecture mapping tool utilizing AST-aware chunking.<br/><br/>It ingests entire codebases to enable semantic Q&A via Hybrid Search, automatic Mermaid.js architecture generation, and AI-driven defect detection using models like Qwen and DeepSeek.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: demoVideo,
        caption: "Project Demo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: codebase0,
        alt: "Codebase Intelligence Visualization",
        caption: "Architecture Overview",
      },
    },
  ],
} as const satisfies ProjectContent;
