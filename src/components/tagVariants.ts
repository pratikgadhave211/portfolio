export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "python"
  | "langchain"
  | "langgraph"
  | "fastapi"
  | "weaviate"
  | "docker"
  | "nextjs"
  | "openai"
  | "tailwind"
  | "rag"
  | "llm"
  | "agents"
  | "vector_db"
  | "hybrid_search";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  langchain: "LangChain",
  langgraph: "LangGraph",
  fastapi: "FastAPI",
  weaviate: "Weaviate",
  docker: "Docker",
  nextjs: "Next.js",
  openai: "OpenAI",
  tailwind: "Tailwind CSS",
  rag: "RAG",
  llm: "LLMs",
  agents: "AI Agents",
  vector_db: "Vector DB",
  hybrid_search: "Hybrid Search",
} as const satisfies Record<TagVariant, string>;
