import type { SiteLocale } from "@/components/LanguageSwitch";

const researchProjects = {
  en: [
    {
      number: "01",
      type: "RAG / Internal tools",
      title: "Internal AI Knowledge Assistant",
      description:
        "Built a document-grounded assistant for summarizing uploaded files and answering employee questions. Implemented ingestion, chunking, vector retrieval, conversation history, and response generation.",
      stack: ["Python", "Flask", "Next.js", "MongoDB", "ChromaDB", "LLM / RAG"],
    },
    {
      number: "02",
      type: "Scientific ML",
      title: "Natural Corrosion Prediction",
      description:
        "Developed a research platform for experimental data management and corrosion-trend visualization, integrating trained models into Django services for scientific analysis.",
      stack: ["Python", "Django", "Next.js", "MySQL", "Machine Learning"],
    },
    {
      number: "03",
      type: "Recommendations",
      title: "Smart Travel Application",
      description:
        "Built backend APIs and recommendation logic combining TF-IDF, place categories, user feedback, and distance metrics to generate personalized itineraries; containerized and deployed to a Linux VPS.",
      stack: ["Python", "Flask", "Next.js", "MongoDB", "Docker", "TF-IDF"],
    },
  ],
  vi: [
    {
      number: "01",
      type: "RAG / Công cụ nội bộ",
      title: "Trợ lý tri thức AI nội bộ",
      description:
        "Xây dựng trợ lý dựa trên tài liệu để tóm tắt tệp tải lên và trả lời câu hỏi của nhân viên. Triển khai nạp dữ liệu, chia đoạn, truy xuất vector, lịch sử hội thoại và tạo phản hồi.",
      stack: ["Python", "Flask", "Next.js", "MongoDB", "ChromaDB", "LLM / RAG"],
    },
    {
      number: "02",
      type: "Học máy khoa học",
      title: "Dự đoán ăn mòn tự nhiên",
      description:
        "Phát triển nền tảng nghiên cứu để quản lý dữ liệu thực nghiệm và trực quan hóa xu hướng ăn mòn; tích hợp mô hình đã huấn luyện vào dịch vụ Django phục vụ phân tích khoa học.",
      stack: ["Python", "Django", "Next.js", "MySQL", "Học máy"],
    },
    {
      number: "03",
      type: "Hệ thống gợi ý",
      title: "Ứng dụng du lịch thông minh",
      description:
        "Xây dựng API backend và logic gợi ý kết hợp TF-IDF, danh mục địa điểm, phản hồi người dùng và khoảng cách để tạo lịch trình cá nhân hóa; đóng gói bằng container và triển khai trên VPS Linux.",
      stack: ["Python", "Flask", "Next.js", "MongoDB", "Docker", "TF-IDF"],
    },
  ],
} satisfies Record<SiteLocale, {
  number: string;
  type: string;
  title: string;
  description: string;
  stack: string[];
}[]>;

const sectionCopy = {
  en: {
    kicker: "01 / RESEARCH SYSTEMS",
    title: "Built during my AIRC internship.",
    lede: "Backend services, APIs, database layers, and AI integrations across three full-stack research products.",
    index: "03 SYSTEMS",
    role: "AI & Web Development Intern",
    organization: "Advanced International Center for Artificial Intelligence Research and Application",
    projectLabel: "SYSTEM",
    technologyLabel: "Technologies used in",
  },
  vi: {
    kicker: "01 / HỆ THỐNG NGHIÊN CỨU",
    title: "Phát triển trong kỳ thực tập tại AIRC.",
    lede: "Dịch vụ backend, API, tầng dữ liệu và tích hợp AI trong ba sản phẩm nghiên cứu full-stack.",
    index: "03 HỆ THỐNG",
    role: "Thực tập sinh Phát triển AI & Web",
    organization: "Trung tâm Quốc tế Tiên tiến về Nghiên cứu và Ứng dụng Trí tuệ nhân tạo (AIRC)",
    projectLabel: "HỆ THỐNG",
    technologyLabel: "Công nghệ sử dụng trong",
  },
} satisfies Record<SiteLocale, Record<string, string>>;

export default function Experience({ locale }: { locale: SiteLocale }) {
  const copy = sectionCopy[locale];
  const projects = researchProjects[locale];

  return (
    <section id="work" className="lab-section" aria-labelledby="work-heading">
      <div className="lab-container">
        <div className="lab-section-heading">
          <div>
            <p className="lab-section-kicker">{copy.kicker}</p>
            <h2 id="work-heading">{copy.title}</h2>
            <p className="lab-section-lede">{copy.lede}</p>
          </div>
          <span className="lab-section-index" aria-hidden="true">{copy.index}</span>
        </div>
        <div className="experience-banner">
          <div>
            <strong>{copy.role}</strong>
            <span>{copy.organization}</span>
          </div>
          <span className="experience-period">2025 — 2026</span>
        </div>
        <div className="record-grid">
          {projects.map((project) => (
            <article className="record-card" key={project.number}>
              <div className="record-topline">
                <span className="record-number">{project.number} / AIRC</span>
                <span className="record-type">{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label={`${copy.technologyLabel} ${project.title}`}>
                {project.stack.map((item) => (
                  <li className="tag" key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
