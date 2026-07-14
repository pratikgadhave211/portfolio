import demoVideo from "../../../assets/videos/documind.mp4";
import documind0 from "../../../assets/images/projects/sharkie/architecture.png";

import type { ProjectContent } from "../../types";

export default {
  title: "DocuMind",
  theme: "light",
  tags: ["rag", "llm", "langchain", "python"],
  live: "https://github.com/pratikgadhave211/DocuMind-A-self-healing-rag-engine-",
  source: "https://github.com/pratikgadhave211/DocuMind-A-self-healing-rag-engine-",
  description:
    "A self-healing Retrieval-Augmented Generation (RAG) system built with FastAPI, LangChain, and FAISS.<br/><br/>It delivers precise answers from local documents through a multi-stage validation process involving Query Enhancement, CRAG (Corrective RAG) grading, and Cross-Encoder Reranking.",
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
        src: documind0,
        alt: "DocuMind Visualization",
        caption: "Architecture Overview",
      },
    },
  ],
} as const satisfies ProjectContent;
