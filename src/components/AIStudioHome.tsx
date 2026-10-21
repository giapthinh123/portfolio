"use client";

import Link from "next/link";
import LabBackdrop from "@/components/LabBackdrop";
import ThemeToggle from "@/components/ThemeToggle";
import Experience from "@/components/Experience";
import LanguageSwitch, { type SiteLocale } from "@/components/LanguageSwitch";

const projectsByLocale = {
  en: [
    {
      number: "02",
      category: "HEALTHCARE / PROTOTYPE",
      name: "Healthcare AI Assistant",
      description:
        "A multimodal assistant prototype for symptom clarification, emergency screening, specialty guidance, doctor discovery, and appointment workflows.",
      note: "Research prototype · not a diagnostic or treatment tool",
      stack: ["FastAPI", "LangGraph", "PostgreSQL / pgvector", "MongoDB", "Redis", "Next.js"],
      github: "https://github.com/giapthinh123/healthcare",
      caseStudy: true,
    },
    {
      number: "01",
      category: "MULTI-AGENT / PLATFORM",
      name: "AI Workforce Platform",
      description:
        "A building-operations platform with six system agents (A0–A5), Task DAG planning, and a Policy Approval Tool Gateway. Event-driven workflows coordinate agent tasks, while OIDC access control and observability support operation and monitoring.",
      note: "AI / Multi-Agent Platform Engineer · personal project",
      stack: ["LangGraph", "Qdrant", "RabbitMQ", "Redis", "OIDC / Keycloak", "OpenTelemetry", "Prometheus", "Grafana"],
      github: null,
      caseStudy: false,
    },
    {
      number: "03",
      category: "COMPUTER VISION / DESKTOP",
      name: "Smart License Plate Recognition System",
      description:
        "A desktop application combining YOLO plate detection with EasyOCR character recognition, supporting still images and real-time camera inference.",
      stack: ["Python", "YOLO", "EasyOCR", "PyQt5", "OpenCV", "PyTorch"],
      github: "https://github.com/giapthinh123/Smart-License-Plate-Recognition-System",
      caseStudy: false,
    },
    {
      number: "04",
      category: "MEDICAL IMAGING / RESEARCH",
      name: "HAM10000 Skin Lesion Detection & Classification",
      description:
        "A two-stage experiment that detects and crops skin regions with YOLO, then classifies seven lesion classes with a custom CNN trained on HAM10000.",
      note: "Research / learning project · not clinically validated",
      stack: ["Python", "Flask", "YOLO", "Custom CNN", "PyTorch", "HAM10000"],
      github: "https://github.com/giapthinh123/HAM10000-skin",
      caseStudy: false,
    },
  ],
  vi: [
    {
      number: "02",
      category: "Y TẾ / BẢN THỬ NGHIỆM",
      name: "Trợ lý AI y tế",
      description:
        "Bản thử nghiệm trợ lý đa phương thức hỗ trợ làm rõ triệu chứng, sàng lọc tình huống khẩn cấp, định hướng chuyên khoa, tìm bác sĩ và thực hiện quy trình hẹn khám.",
      note: "Bản thử nghiệm nghiên cứu · không dùng để chẩn đoán hoặc điều trị",
      stack: ["FastAPI", "LangGraph", "PostgreSQL / pgvector", "MongoDB", "Redis", "Next.js"],
      github: "https://github.com/giapthinh123/healthcare",
      caseStudy: true,
    },
    {
      number: "01",
      category: "ĐA AGENT / NỀN TẢNG",
      name: "AI Workforce Platform",
      description:
        "Nền tảng vận hành tòa nhà với sáu system agent (A0–A5), lập kế hoạch bằng Task DAG và Policy Approval Tool Gateway. Luồng xử lý theo sự kiện phối hợp tác vụ giữa các agent; tích hợp phân quyền OIDC và bộ công cụ quan sát, giám sát vận hành.",
      note: "AI / Multi-Agent Platform Engineer · dự án cá nhân",
      stack: ["LangGraph", "Qdrant", "RabbitMQ", "Redis", "OIDC / Keycloak", "OpenTelemetry", "Prometheus", "Grafana"],
      github: null,
      caseStudy: false,
    },
    {
      number: "03",
      category: "THỊ GIÁC MÁY TÍNH / DESKTOP",
      name: "Hệ thống nhận diện biển số xe thông minh",
      description:
        "Ứng dụng desktop kết hợp YOLO để phát hiện biển số và EasyOCR để nhận dạng ký tự, hỗ trợ ảnh tĩnh và nhận diện trực tiếp từ camera.",
      stack: ["Python", "YOLO", "EasyOCR", "PyQt5", "OpenCV", "PyTorch"],
      github: "https://github.com/giapthinh123/Smart-License-Plate-Recognition-System",
      caseStudy: false,
    },
    {
      number: "04",
      category: "ẢNH Y KHOA / NGHIÊN CỨU",
      name: "Phát hiện & phân loại tổn thương da HAM10000",
      description:
        "Thử nghiệm hai giai đoạn: dùng YOLO phát hiện và cắt vùng da, sau đó phân loại bảy nhóm tổn thương bằng CNN tự thiết kế, huấn luyện trên HAM10000.",
      note: "Dự án nghiên cứu / học tập · chưa được kiểm chứng lâm sàng",
      stack: ["Python", "Flask", "YOLO", "CNN tự thiết kế", "PyTorch", "HAM10000"],
      github: "https://github.com/giapthinh123/HAM10000-skin",
      caseStudy: false,
    },
  ],
} satisfies Record<SiteLocale, {
  number: string;
  category: string;
  name: string;
  description: string;
  note?: string;
  stack: string[];
  github: string | null;
  caseStudy: boolean;
}[]>;

const skillGroupsByLocale = {
  en: [
    { title: "Languages", items: ["Python", "TypeScript", "SQL"] },
    { title: "AI / Agents", items: ["Agentic AI", "Multi-Agent Systems", "AgentScope", "LangGraph", "LangChain", "MCP", "RAG", "Embedding", "Reranking", "PyTorch", "YOLO", "OpenCV"] },
    { title: "Backend", items: ["FastAPI", "Pydantic v2", "SQLAlchemy 2", "Alembic", "WebSocket", "Django", "Flask", "REST APIs", "JWT authentication"] },
    { title: "Data", items: ["PostgreSQL", "pgvector", "Qdrant", "MongoDB", "Redis", "ChromaDB", "S3 / MinIO"] },
    { title: "Architecture", items: ["Event-driven Architecture", "Modular Monolith", "Worker-based Architecture", "Transactional Outbox", "Optimistic Locking", "Idempotency / Deduplication"] },
    { title: "Messaging / Infrastructure", items: ["RabbitMQ", "Docker", "Docker Compose", "Linux / VPS", "OIDC / Keycloak", "OpenTelemetry", "Prometheus", "Grafana"] },
    { title: "Frontend", items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS"] },
    { title: "Tools", items: ["Git", "GitHub", "Postman"] },
  ],
  vi: [
    { title: "Ngôn ngữ lập trình", items: ["Python", "TypeScript", "SQL"] },
    { title: "AI / Agent", items: ["Agentic AI", "Multi-Agent Systems", "AgentScope", "LangGraph", "LangChain", "MCP", "RAG", "Embedding", "Reranking", "PyTorch", "YOLO", "OpenCV"] },
    { title: "Backend", items: ["FastAPI", "Pydantic v2", "SQLAlchemy 2", "Alembic", "WebSocket", "Django", "Flask", "API REST", "Xác thực JWT"] },
    { title: "Dữ liệu", items: ["PostgreSQL", "pgvector", "Qdrant", "MongoDB", "Redis", "ChromaDB", "S3 / MinIO"] },
    { title: "Kiến trúc", items: ["Event-driven Architecture", "Modular Monolith", "Worker-based Architecture", "Transactional Outbox", "Optimistic Locking", "Idempotency / Deduplication"] },
    { title: "Messaging / Hạ tầng", items: ["RabbitMQ", "Docker", "Docker Compose", "Linux / VPS", "OIDC / Keycloak", "OpenTelemetry", "Prometheus", "Grafana"] },
    { title: "Frontend", items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS"] },
    { title: "Công cụ", items: ["Git", "GitHub", "Postman"] },
  ],
} satisfies Record<SiteLocale, { title: string; items: string[] }[]>;

const homeCopy = {
  en: {
    navLabel: "Primary navigation",
    nav: [
      { href: "#work", label: "Work" },
      { href: "#about", label: "About" },
      { href: "#stack", label: "Stack" },
      { href: "#contact", label: "Contact" },
    ],
    brandLabel: "Thịnh Giáp — back to top",
    github: "GitHub",
    skip: "Skip to content",
    hero: {
      kicker: "AI SYSTEMS LAB",
      location: "HANOI, VIETNAM",
      role: "AI Engineer",
      secondaryRole: "Backend Developer",
      intro: "I build Agentic AI platforms, multi-agent orchestration, and RAG systems, backed by scalable Python services and event-driven workflows that connect agents, knowledge, and tools.",
      workButton: "Explore selected work",
      contactButton: "Get in touch",
      experienceLabel: "CURRENT ROLE",
      experienceValue: "AI Engineer Intern · Vinsmart Future · 2026–Present",
      lookingLabel: "LOOKING FOR",
      lookingValue: "AI Engineer or Backend Developer roles",
      visualLabel: "Conceptual agentic workflow: Agent Studio and AgentSpec connect to multi-agent orchestration and RAG, then a tool gateway, policy, and event bus",
      systemMap: "AGENTIC WORKFLOW / 001",
      mapStatus: "BUILD PATTERN",
      nodes: [
        { step: "01 / DEFINE", title: "Agent Studio & Spec", detail: "goals · rules · tools · knowledge" },
        { step: "02 / COORDINATE", title: "Multi-agent orchestration & RAG", detail: "leader · specialists · shared context" },
        { step: "03 / EXECUTE", title: "Tool gateway, policy & event bus", detail: "approval · workers · events" },
      ],
      mapFooter: "FROM AGENT SPEC TO EXECUTION",
      mapEnd: "END-TO-END",
    },
    about: {
      kicker: "01 / ABOUT",
      title: "An engineer who thinks in systems.",
      firstLead: "I’m ",
      name: "Giap Hoang Thinh",
      firstParagraph: ", a Software Engineering student and AI Engineer Intern at Vinsmart Future. My focus is Agentic AI, multi-agent systems, and production-oriented AI platforms, bringing together agent configuration, orchestration, retrieval, and backend services.",
      secondParagraph: "I work on scalable Python services and event-driven workflows, with attention to policy controls, reliable task execution, and observability. Earlier projects at AIRC gave me a foundation in RAG, recommendation systems, scientific prediction, and computer vision. I’m looking to keep building as an AI Engineer or Backend Developer.",
      index: "PROFILE",
      factsLabel: "Education and training",
      facts: [
        { period: "2023–2026", title: "Software Engineering", detail: "East Asia University of Technology" },
        { period: "2026", title: "Applied AI Talent Training Program", detail: "Vingroup · AI Engineer" },
      ],
    },
    work: {
      label: "PERSONAL",
      category: "PERSONAL PROJECT",
      techLabel: "Technologies used in",
      readCaseStudy: "Read case study",
      openGithub: "Open on GitHub",
      kicker: "03 / SELECTED PROJECTS",
      title: "Platforms, agents, and applied AI.",
      lede: "Four personal projects spanning multi-agent building operations, healthcare assistance, and computer vision.",
      index: "04 PROJECTS",
    },
    skills: {
      kicker: "04 / SKILLS",
      title: "A practical, product-facing stack.",
      lede: "From agent orchestration and retrieval to Python services, event-driven architecture, and observability.",
      index: "08 GROUPS",
    },
    contact: {
      kicker: "05 / CONTACT",
      title: "Let’s build something useful.",
      description: "Open to AI Engineer and Backend Developer opportunities. Get in touch to discuss agent platforms, backend systems, or a collaboration.",
      primary: "Send an email",
      secondary: "GitHub",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Gia Lam, Ha Noi",
    },
    footer: "© {year} Thịnh Giáp · AI Systems Lab",
    source: "Source on GitHub",
  },
  vi: {
    navLabel: "Điều hướng chính",
    nav: [
      { href: "#work", label: "Công việc" },
      { href: "#about", label: "Giới thiệu" },
      { href: "#stack", label: "Công nghệ" },
      { href: "#contact", label: "Liên hệ" },
    ],
    brandLabel: "Thịnh Giáp — về đầu trang",
    github: "GitHub",
    skip: "Đi đến nội dung chính",
    hero: {
      kicker: "PHÒNG THÍ NGHIỆM HỆ THỐNG AI",
      location: "HÀ NỘI, VIỆT NAM",
      role: "Kỹ sư AI",
      secondaryRole: "Lập trình Backend",
      intro: "Tôi xây dựng nền tảng Agentic AI, điều phối đa agent và hệ thống RAG, kết hợp dịch vụ Python có khả năng mở rộng với luồng xử lý theo sự kiện để kết nối agent, tri thức và công cụ.",
      workButton: "Khám phá dự án tiêu biểu",
      contactButton: "Kết nối với tôi",
      experienceLabel: "VỊ TRÍ HIỆN TẠI",
      experienceValue: "Thực tập sinh Kỹ sư AI · Vinsmart Future · 2026–Hiện tại",
      lookingLabel: "ĐANG TÌM KIẾM",
      lookingValue: "Cơ hội Kỹ sư AI hoặc Lập trình Backend",
      visualLabel: "Luồng agent khái niệm: Agent Studio và AgentSpec kết nối điều phối đa agent và RAG, sau đó đến cổng công cụ, chính sách và bus sự kiện",
      systemMap: "LUỒNG AGENT / 001",
      mapStatus: "MẪU KIẾN TRÚC",
      nodes: [
        { step: "01 / ĐỊNH NGHĨA", title: "Agent Studio & Spec", detail: "mục tiêu · quy tắc · công cụ · tri thức" },
        { step: "02 / ĐIỀU PHỐI", title: "Điều phối đa agent & RAG", detail: "leader · agent chuyên môn · ngữ cảnh chung" },
        { step: "03 / THỰC THI", title: "Cổng công cụ, chính sách & sự kiện", detail: "phê duyệt · worker · sự kiện" },
      ],
      mapFooter: "TỪ ĐỊNH NGHĨA AGENT ĐẾN THỰC THI",
      mapEnd: "ĐẦU CUỐI ĐẾN ĐẦU",
    },
    about: {
      kicker: "01 / GIỚI THIỆU",
      title: "Kỹ sư tư duy theo hệ thống.",
      firstLead: "Tôi là ",
      name: "Giáp Hoàng Thịnh",
      firstParagraph: ", sinh viên ngành Kỹ thuật Phần mềm và thực tập sinh Kỹ sư AI tại Vinsmart Future. Tôi tập trung vào Agentic AI, hệ thống đa agent và nền tảng AI hướng đến vận hành thực tế, kết nối cấu hình agent, điều phối, truy xuất tri thức và dịch vụ backend.",
      secondParagraph: "Tôi phát triển dịch vụ Python có khả năng mở rộng và luồng xử lý theo sự kiện, chú trọng kiểm soát chính sách, thực thi tác vụ tin cậy và khả năng quan sát hệ thống. Các dự án trước tại AIRC giúp tôi xây dựng nền tảng về RAG, hệ thống gợi ý, dự đoán khoa học và thị giác máy tính. Tôi mong muốn tiếp tục phát triển ở vị trí Kỹ sư AI hoặc Lập trình Backend.",
      index: "HỒ SƠ",
      factsLabel: "Học vấn và đào tạo",
      facts: [
        { period: "2023–2026", title: "Kỹ thuật Phần mềm", detail: "Trường Đại học Công nghệ Đông Á" },
        { period: "2026", title: "Chương trình Đào tạo Nhân tài AI Ứng dụng", detail: "Vingroup · Kỹ sư AI" },
      ],
    },
    work: {
      label: "CÁ NHÂN",
      category: "DỰ ÁN CÁ NHÂN",
      techLabel: "Công nghệ sử dụng trong",
      readCaseStudy: "Xem hồ sơ dự án",
      openGithub: "Mở trên GitHub",
      kicker: "03 / DỰ ÁN TIÊU BIỂU",
      title: "Nền tảng, agent và AI ứng dụng.",
      lede: "Bốn dự án cá nhân về vận hành tòa nhà bằng đa agent, trợ lý y tế và thị giác máy tính.",
      index: "04 DỰ ÁN",
    },
    skills: {
      kicker: "04 / KỸ NĂNG",
      title: "Bộ công nghệ thiết thực, hướng đến sản phẩm.",
      lede: "Từ điều phối agent, truy xuất tri thức đến dịch vụ Python, kiến trúc hướng sự kiện và quan sát hệ thống.",
      index: "08 NHÓM",
    },
    contact: {
      kicker: "05 / LIÊN HỆ",
      title: "Cùng xây dựng điều hữu ích.",
      description: "Tôi đang tìm cơ hội Kỹ sư AI hoặc Lập trình Backend. Hãy liên hệ để trao đổi về nền tảng agent, hệ thống backend hoặc cơ hội hợp tác.",
      primary: "Gửi email",
      secondary: "GitHub",
      emailLabel: "Email",
      phoneLabel: "Điện thoại",
      locationLabel: "Địa chỉ",
      location: "Gia Lâm, Hà Nội",
    },
    footer: "© {year} Thịnh Giáp · AI Systems Lab",
    source: "Mã nguồn trên GitHub",
  },
} satisfies Record<SiteLocale, Record<string, unknown>>;

function Header({ locale, copy }: { locale: SiteLocale; copy: (typeof homeCopy)[SiteLocale] }) {
  return (
    <header lang={locale} className="lab-header">
      <div className="lab-header-inner">
        <a className="lab-brand" href="#top" aria-label={copy.brandLabel}>
          <span className="lab-monogram" aria-hidden="true">TG</span>
          <span className="lab-brand-copy">
            <strong>Thịnh Giáp</strong>
            <small>AI SYSTEMS LAB</small>
          </span>
        </a>
        <nav className="lab-nav" aria-label={copy.navLabel}>
          {copy.nav.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="lab-header-actions">
          <ThemeToggle locale={locale} />
          <LanguageSwitch locale={locale} path="/" />
          <a className="lab-header-link" href="https://github.com/giapthinh123" target="_blank" rel="noopener noreferrer">
            {copy.github} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ copy }: { copy: (typeof homeCopy)[SiteLocale]["hero"] }) {
  return (
    <section className="lab-hero" id="top" aria-labelledby="hero-title">
      <LabBackdrop />
      <div className="lab-hero-copy">
        <p className="lab-eyebrow"><span className="lab-live-dot" aria-hidden="true" />{copy.kicker} <span>/</span> {copy.location}</p>
        <h1 id="hero-title">Thịnh<br /><span>Giáp</span></h1>
        <p className="lab-role">{copy.role} <span>·</span> {copy.secondaryRole}</p>
        <p className="lab-intro">{copy.intro}</p>
        <div className="lab-actions">
          <a className="lab-button lab-button-primary" href="#projects">{copy.workButton} <span aria-hidden="true">↓</span></a>
          <a className="lab-button lab-button-outline" href="#contact">{copy.contactButton} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="lab-hero-meta">
          <div><span>{copy.experienceLabel}</span><strong>{copy.experienceValue}</strong></div>
          <div><span>{copy.lookingLabel}</span><strong>{copy.lookingValue}</strong></div>
        </div>
      </div>
      <div className="lab-visual" role="img" aria-label={copy.visualLabel}>
        <div className="lab-visual-top"><span>{copy.systemMap}</span><span className="lab-map-status">{copy.mapStatus}</span></div>
        <div className="lab-flow" aria-hidden="true">
          {copy.nodes.map((node, index) => (
            <div className={`lab-node${index === 1 ? " lab-node-active" : ""}`} key={node.step}>
              <span>{node.step}</span>
              <div><strong>{node.title}</strong><small>{node.detail}</small></div>
            </div>
          )).flatMap((node, index, nodes) => index < nodes.length - 1 ? [node,
            <svg className="lab-flow-connector" key={`flow-${index}`} viewBox="0 0 12 24" aria-hidden="true"><path d="M6 0v24" /></svg>,
          ] : [node])}
        </div>
        <div className="lab-system-badges" aria-hidden="true">
          {["A0–A5 Agents", "MCP Gateway", "Qdrant Vector", "RabbitMQ Outbox"].map((badge) => <span key={badge}>{badge}</span>)}
        </div>
        <div className="lab-visual-bottom"><span>{copy.mapFooter}</span><b>{copy.mapEnd}</b></div>
      </div>
    </section>
  );
}

function About({ copy }: { copy: (typeof homeCopy)[SiteLocale]["about"] }) {
  return (
    <section id="about" className="lab-section lab-section-tint" aria-labelledby="about-title">
      <div className="lab-container">
        <div className="lab-section-heading">
          <div><p className="lab-section-kicker">{copy.kicker}</p><h2 id="about-title">{copy.title}</h2></div>
          <span className="lab-section-index">{copy.index}</span>
        </div>
        <div className="lab-about-grid">
          <div className="lab-about-copy">
            <p>{copy.firstLead}<strong>{copy.name}</strong>{copy.firstParagraph}</p>
            <p>{copy.secondParagraph}</p>
          </div>
          <div className="lab-facts" aria-label={copy.factsLabel}>
            {copy.facts.map((fact) => (
              <div key={fact.period}>
                <span>{fact.period}</span>
                <p><strong>{fact.title}</strong><small>{fact.detail}</small></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonalProjects({ locale, copy }: { locale: SiteLocale; copy: (typeof homeCopy)[SiteLocale]["work"] }) {
  const projects = [...projectsByLocale[locale]].sort((a, b) => a.number.localeCompare(b.number));
  return (
    <section id="projects" className="lab-section lab-section-tint" aria-labelledby="projects-title">
      <div className="lab-container">
        <div className="lab-section-heading">
          <div><p className="lab-section-kicker">{copy.kicker}</p><h2 id="projects-title">{copy.title}</h2><p className="lab-section-lede">{copy.lede}</p></div>
          <span className="lab-section-index">{copy.index}</span>
        </div>
        <div className="lab-project-grid lab-personal-projects">
          {projects.map((project) => (
            <article className="lab-project-card" data-tone={project.number === "01" || project.caseStudy ? "agent" : undefined} key={project.number}>
              <div className="lab-card-top"><span>{project.number} / {copy.label}</span><small>{project.category}</small></div>
              <h3>{project.name}</h3>
              {project.note ? <div className="lab-project-note">{project.note}</div> : null}
              <p>{project.description}</p>
              <ul className="lab-tags" aria-label={`${copy.techLabel} ${project.name}`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="lab-project-links">
                {project.caseStudy ? <Link href={`/projects/healthcare/?lang=${locale}#top`}>{copy.readCaseStudy} <span aria-hidden="true">→</span></Link> : null}
                {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${copy.openGithub}: ${project.name}`}>GitHub <span aria-hidden="true">↗</span></a> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills({ locale, copy }: { locale: SiteLocale; copy: (typeof homeCopy)[SiteLocale]["skills"] }) {
  return (
    <section id="stack" className="lab-section" aria-labelledby="stack-title">
      <div className="lab-container">
        <div className="lab-section-heading">
          <div><p className="lab-section-kicker">{copy.kicker}</p><h2 id="stack-title">{copy.title}</h2><p className="lab-section-lede">{copy.lede}</p></div>
          <span className="lab-section-index">{copy.index}</span>
        </div>
        <div className="lab-skills-grid">
          {skillGroupsByLocale[locale].map((group) => (
            <article className="lab-skill-card" data-tone={group.title.startsWith("AI /") ? "agent" : undefined} key={group.title}>
              <h3>{group.title}</h3>
              <ul className="lab-tags">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ copy }: { copy: (typeof homeCopy)[SiteLocale]["contact"] }) {
  return (
    <section id="contact" className="lab-section lab-section-tint" aria-labelledby="contact-title">
      <div className="lab-container">
        <div className="lab-contact-panel">
          <div>
            <p className="lab-section-kicker">{copy.kicker}</p>
            <h2 id="contact-title">{copy.title}</h2>
            <p>{copy.description}</p>
            <dl className="lab-contact-details">
              <div><dt>{copy.emailLabel}</dt><dd><a href="mailto:thinhgiap76@gmail.com">thinhgiap76@gmail.com</a></dd></div>
              <div><dt>{copy.phoneLabel}</dt><dd><a href="tel:+84967410732">0967 410 732</a></dd></div>
              <div><dt>{copy.locationLabel}</dt><dd>{copy.location}</dd></div>
            </dl>
          </div>
          <div className="lab-contact-actions">
            <a className="lab-button lab-button-primary" href="mailto:thinhgiap76@gmail.com">{copy.primary} <span aria-hidden="true">↗</span></a>
            <a className="lab-button lab-button-outline" href="https://github.com/giapthinh123" target="_blank" rel="noopener noreferrer">{copy.secondary} / giapthinh123 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ locale, copy }: { locale: SiteLocale; copy: (typeof homeCopy)[SiteLocale] }) {
  const year = new Date().getFullYear();
  return (
    <footer lang={locale} className="lab-footer">
      <div className="lab-container">
        <span>{copy.footer.replace("{year}", String(year))}</span>
        <a href="https://github.com/giapthinh123/portfolio" target="_blank" rel="noopener noreferrer">{copy.source} ↗</a>
      </div>
    </footer>
  );
}

export default function AIStudioHome({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale] as (typeof homeCopy)[SiteLocale];
  return (
    <>
      <a lang={locale} className="lab-skip-link" href="#main-content">{copy.skip}</a>
      <Header locale={locale} copy={copy} />
      <main id="main-content" lang={locale}>
        <Hero copy={copy.hero} />
        <About copy={copy.about} />
        <Experience locale={locale} />
        <PersonalProjects locale={locale} copy={copy.work} />
        <Skills locale={locale} copy={copy.skills} />
        <Contact copy={copy.contact} />
      </main>
      <Footer locale={locale} copy={copy} />
    </>
  );
}
