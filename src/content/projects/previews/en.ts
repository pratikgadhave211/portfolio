import thumbnailCodebase from "../../../assets/images/projects/cubewar/codebase.png";
import thumbnailHivemind from "../../../assets/images/projects/quibbo/hivemind.png";
import thumbnailDocumind from "../../../assets/images/projects/sharkie/documind.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Codebase Intelligence",
    slug: "cubewar",
    thumbnail: thumbnailCodebase,
    description: "AST-aware repo analysis tool",
  },
  {
    title: "HiveMIND",
    slug: "quibbo",
    thumbnail: thumbnailHivemind,
    description: "Multi-agent swarm architecture",
  },
  {
    title: "DocuMind",
    slug: "sharkie",
    thumbnail: thumbnailDocumind,
    description: "Self-healing RAG engine",
  }
] as const satisfies ProjectPreview[];
