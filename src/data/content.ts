export const personalInfo = {
  name: "Anders Helle Malling",
  title: "Full-Stack Developer",
  location: "Aarhus, Denmark",
  email: "andersmalling@gmail.com",
  phone: "+45 60 67 75 55",
  linkedin: "https://www.linkedin.com/in/anders-malling/",
};

export const projects: {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  note?: string;
  category: string;
  imageUrl?: string;
}[] = [
  {
    id: "01",
    title: "AUH Cancer Department",
    description:
      "Internal web application that streamlines access to clinical research data for the Department of Oncology at Aarhus University Hospital. Serves clinical personnel needing fast study lookups, administrative staff handling data entry, and management teams monitoring project performance — built on SQL Server with a Vue frontend and Flask REST API.",
    tags: ["Vue", "TypeScript", "SQL Server", "Tailwind", "Flask"],
    liveUrl: "https://kfeappen-clone.vercel.app/",
    note: "Desktop only — restricted phone access for security reasons.",
    category: "Healthcare",
  },
  {
    id: "02",
    title: "Øljulekalenderen 2023",
    description:
      "BajerBiksen's Christmas beer calendar — a playful animated advent calendar that reveals one of 24 handpicked beers per day. Commissioned by a community beer shop in Aarhus.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "https://julekalenderen.vercel.app/",
    category: "Interactive",
  },
  {
    id: "03",
    title: "PsykologTidVejle",
    description:
      "Landing page for two newly established psychologists in Vejle, designed to attract clients through a warm, safe, and professional atmosphere from the moment visitors arrive.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "https://psykolog-tid-vejle.vercel.app/",
    category: "Landing Page",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Vue", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "CSS", "Web Design", "UX"],
  },
  {
    name: "Backend",
    skills: ["C#", ".NET / ASP.NET Core", "PHP", "Laravel", "Python", "Flask", "Node.js", "REST APIs", "MVC", "OOP", "Dependency Injection", "Design Patterns"],
  },
  {
    name: "Data",
    skills: ["SQL Server", "SQL", "Entity Framework", "Eloquent ORM", "Data Engineering", "Data Management", "Machine Learning", "AI / LLMs", "Statistics"],
  },
  {
    name: "Tools",
    skills: ["GitHub", "Git", "GitHub Actions", "CI/CD", "Claude Code", "AI-Assisted Development", "Composer", "NuGet", "Agile", "Full-Stack Development"],
  },
];
