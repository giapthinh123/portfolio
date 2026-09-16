type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  flagship?: boolean;
};

const projects: Project[] = [
  {
    name: "healthcare",
    description:
      "Flagship: hệ thống healthcare end-to-end với agent workflow (LangGraph), backend FastAPI, web Next.js và client Expo — từ orchestration AI đến trải nghiệm người dùng.",
    tech: ["LangGraph", "FastAPI", "Next.js", "Expo"],
    github: "https://github.com/giapthinh123/healthcare",
    flagship: true,
  },
  {
    name: "Smart-License-Plate-Recognition-System",
    description:
      "Nhận dạng biển số xe realtime với YOLO detection, EasyOCR và giao diện desktop PyQt5 — pipeline CV hoàn chỉnh từ camera đến kết quả.",
    tech: ["YOLO", "EasyOCR", "PyQt5", "Python"],
    github:
      "https://github.com/giapthinh123/Smart-License-Plate-Recognition-System",
  },
  {
    name: "HAM10000-skin",
    description:
      "Phân loại tổn thương da trên dataset HAM10000: kết hợp YOLO và CNN, phục vụ qua Flask API — ứng dụng computer vision trong y tế.",
    tech: ["YOLO", "CNN", "Flask", "Python"],
    github: "https://github.com/giapthinh123/HAM10000-skin",
  },
  {
    name: "mvc-fashion-shop",
    description:
      "Web shop thời trang theo MVC với Java Servlet/JSP, tích hợp thanh toán VNPay — full-stack Java phía server và luồng checkout thực tế.",
    tech: ["Java Servlet", "JSP", "MVC", "VNPay"],
    github: "https://github.com/giapthinh123/mvc-fashion-shop",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Projects
          </h2>
          <p className="text-sm text-muted">
            Chỉ liên kết GitHub — không có live demo.
          </p>
        </div>

        <ul className="mt-10 grid list-none gap-6 p-0">
          {projects.map((project) => (
            <li key={project.name}>
              <article
                className={`rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md sm:p-7 ${
                  project.flagship
                    ? "border-flagship/40 ring-1 ring-flagship/25"
                    : "border-border"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {project.name}
                      </h3>
                      {project.flagship ? (
                        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-flagship">
                          Flagship
                        </span>
                      ) : null}
                    </div>
                    <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`Open ${project.name} on GitHub`}
                  >
                    GitHub →
                  </a>
                </div>
                <ul className="mt-5 flex list-none flex-wrap gap-2 p-0" aria-label="Tech stack">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
