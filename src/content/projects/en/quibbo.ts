import demoVideo from "../../../assets/videos/hivemind.mp4";
import hivemind0 from "../../../assets/images/projects/quibbo/architecture.png";

import type { ProjectContent } from "../../types";

export default {
  title: "HiveMIND",
  theme: "light",
  tags: ["agents", "langgraph", "rag", "react"],
  videoBorder: true,
  live: "https://github.com/pratikgadhave211/HiveMIND-A-multi-agent-system-",
  source: "https://github.com/pratikgadhave211/HiveMIND-A-multi-agent-system-",
  description:
    "An advanced multi-agent swarm architecture designed to intelligently route complex queries to specialized domain agents.<br/><br/>It synthesizes highly accurate, fact-checked responses using an evidence verification pipeline, a Knowledge Gateway (RAG + web search), and stateful PostgreSQL memory.",
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
        src: hivemind0,
        alt: "HiveMIND Visualization",
        caption: "System Architecture",
      },
    },
  ],
} as const satisfies ProjectContent;
