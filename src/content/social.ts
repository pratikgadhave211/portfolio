export const social = [
  { url: "mailto:gadhavepratik621@gmail.com", name: "mail" },
  { url: "https://github.com/pratikgadhave211", name: "github" },
  { url: "https://www.linkedin.com/in/pratik-gadhave-2b0b76387/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
