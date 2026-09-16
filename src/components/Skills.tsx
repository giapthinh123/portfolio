const skillGroups = [
  {
    title: "AI & Computer Vision",
    items: ["LangGraph", "YOLO", "EasyOCR", "CNN", "Python"],
  },
  {
    title: "Backend & API",
    items: ["FastAPI", "Flask", "Java Servlet", "JSP", "MVC"],
  },
  {
    title: "Frontend & Mobile",
    items: ["Next.js", "React", "TypeScript", "Expo", "Tailwind CSS"],
  },
  {
    title: "Desktop & Payments",
    items: ["PyQt5", "VNPay"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-card/40"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="skills-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Skills
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted">
          Rút từ stack các dự án trên — ưu tiên công nghệ đã dùng trong sản phẩm thật.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
