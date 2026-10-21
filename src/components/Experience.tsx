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
    kicker: "02 / WORK EXPERIENCE",
    title: "Building AI platforms and backend systems.",
    lede: "From multi-agent orchestration at Vinsmart Future to three full-stack research products at AIRC.",
    index: "02 INTERNSHIPS",
    role: "AI & Web Development Intern",
    organization: "Advanced International Center for Artificial Intelligence Research and Application",
    projectLabel: "SYSTEM",
    technologyLabel: "Technologies used in",
  },
  vi: {
    kicker: "02 / KINH NGHIỆM LÀM VIỆC",
    title: "Xây dựng nền tảng AI và hệ thống backend.",
    lede: "Từ điều phối đa agent tại Vinsmart Future đến ba sản phẩm nghiên cứu full-stack tại AIRC.",
    index: "02 KỲ THỰC TẬP",
    role: "Thực tập sinh Phát triển AI & Web",
    organization: "Trung tâm Quốc tế Tiên tiến về Nghiên cứu và Ứng dụng Trí tuệ nhân tạo (AIRC)",
    projectLabel: "HỆ THỐNG",
    technologyLabel: "Công nghệ sử dụng trong",
  },
} satisfies Record<SiteLocale, Record<string, string>>;

const platformCopy = {
  en: {
    role: "AI Engineer Intern",
    period: "2026 — Present",
    title: "AI Agent Workforce Platform",
    type: "Agentic AI / Multi-agent orchestration",
    description: "A platform for creating, managing, and operating AI agent teams. Users configure agents, connect knowledge and tools, and delegate work through chat; a Leader coordinates specialist agents and consolidates their results.",
    contributions: [
      "Agent Studio / Builder and structured AgentSpec definitions for goals, rules, tools, knowledge, and collaborators; draft, test, publish, version history, and rollback workflows.",
      "Leader-based multi-agent orchestration with shared context, chat sessions, knowledge retrieval, MCP tools, and skills.",
      "FastAPI services with PostgreSQL / pgvector and MinIO, plus outbox / worker workflows for background execution; administration and tracking of progress, token usage, and costs.",
    ],
  },
  vi: {
    role: "Thực tập sinh Kỹ sư AI",
    period: "2026 — Hiện tại",
    title: "AI Agent Workforce Platform",
    type: "Agentic AI / Điều phối đa agent",
    description: "Nền tảng tạo, quản lý và vận hành đội AI agent. Người dùng cấu hình agent, kết nối tri thức và công cụ rồi giao việc qua chat; Leader điều phối các agent chuyên môn và tổng hợp kết quả.",
    contributions: [
      "Agent Studio / Builder và định nghĩa AgentSpec cho mục tiêu, quy tắc, công cụ, tri thức và agent phối hợp; vòng đời bản nháp, kiểm thử, phát hành, lịch sử phiên bản và rollback.",
      "Điều phối đa agent qua Leader với ngữ cảnh chung, phiên chat, truy xuất tri thức, công cụ MCP và skill.",
      "Dịch vụ FastAPI với PostgreSQL / pgvector và MinIO, luồng outbox / worker xử lý nền; quản trị và theo dõi tiến trình, token sử dụng, chi phí.",
    ],
  },
};

const platformStack = ["AgentScope", "AgentSpec", "FastAPI", "MCP", "PostgreSQL / pgvector", "MinIO", "Transactional Outbox", "Workers", "React", "TypeScript"];

export default function Experience({ locale }: { locale: SiteLocale }) {
  const copy = sectionCopy[locale];
  const platform = platformCopy[locale];
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
        <section className="experience-group" aria-labelledby="tinten-heading">
          <div className="experience-banner">
            <div>
              <h3 id="tinten-heading">Vinsmart Future</h3>
              <span>{platform.role}</span>
            </div>
            <span className="experience-period experience-current">{platform.period}</span>
          </div>
          <article className="record-card experience-featured" data-tone="agent">
            <div className="record-topline">
              <span className="record-number">01 / VINSMART FUTURE</span>
              <span className="record-type">{platform.type}</span>
            </div>
            <h4>{platform.title}</h4>
            <p>{platform.description}</p>
            <ul className="experience-contributions">
              {platform.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
            </ul>
            <ul className="tag-list" aria-label={`${copy.technologyLabel} ${platform.title}`}>
              {platformStack.map((item) => <li className="tag" key={item}>{item}</li>)}
            </ul>
          </article>
        </section>
        <section className="experience-group" aria-labelledby="airc-heading">
          <div className="experience-banner">
            <div>
              <h3 id="airc-heading">AIRC</h3>
              <span>{copy.role} · {copy.organization}</span>
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
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${copy.technologyLabel} ${project.title}`}>
                  {project.stack.map((item) => (
                    <li className="tag" key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
