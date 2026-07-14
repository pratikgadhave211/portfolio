export const social = [
  { url: "mailto:pratik.gadhave@example.com", name: "mail" },
  { url: "https://github.com/pratik-gadhave", name: "github" },
  { url: "https://www.linkedin.com/in/pratik-gadhave/", name: "linkedin" },
  { url: "https://x.com/pratik_gadhave", name: "x" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
