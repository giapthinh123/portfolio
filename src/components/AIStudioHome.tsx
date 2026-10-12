import Experience from "@/components/Experience";
import LanguageSwitch, { type SiteLocale } from "@/components/LanguageSwitch";

const projectsByLocale = {
  en: [
    {
      number: "04",
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
      number: "05",
      category: "COMPUTER VISION / DESKTOP",
      name: "License Plate Recognition",
      description:
        "A desktop application combining YOLO plate detection with EasyOCR character recognition, supporting still images and real-time camera inference.",
      stack: ["Python", "YOLO", "EasyOCR", "PyQt5", "OpenCV", "PyTorch"],
      github: "https://github.com/giapthinh123/Smart-License-Plate-Recognition-System",
      caseStudy: false,
    },
    {
      number: "06",
      category: "MEDICAL IMAGING / RESEARCH",
      name: "HAM10000 Skin Lesion Pipeline",
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
      number: "04",
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
      number: "05",
      category: "THỊ GIÁC MÁY TÍNH / DESKTOP",
      name: "Nhận diện biển số xe",
      description:
        "Ứng dụng desktop kết hợp YOLO để phát hiện biển số và EasyOCR để nhận dạng ký tự, hỗ trợ ảnh tĩnh và nhận diện trực tiếp từ camera.",
      stack: ["Python", "YOLO", "EasyOCR", "PyQt5", "OpenCV", "PyTorch"],
      github: "https://github.com/giapthinh123/Smart-License-Plate-Recognition-System",
      caseStudy: false,
    },
    {
      number: "06",
      category: "ẢNH Y KHOA / NGHIÊN CỨU",
      name: "Quy trình phân loại tổn thương da HAM10000",
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
  github: string;
  caseStudy: boolean;
}[]>;

const skillGroupsByLocale = {
  en: [
    { title: "Languages", items: ["Python", "TypeScript", "SQL"] },
    { title: "AI, ML & computer vision", items: ["PyTorch", "OpenCV", "YOLO", "RAG", "LangChain", "LangGraph"] },
    { title: "Backend & APIs", items: ["FastAPI", "Django", "Flask", "REST APIs", "JWT authentication"] },
    { title: "Data & infrastructure", items: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "pgvector", "Docker", "Linux / VPS"] },
    { title: "Frontend & delivery", items: ["Next.js", "React", "Git", "GitHub", "Postman"] },
  ],
  vi: [
    { title: "Ngôn ngữ lập trình", items: ["Python", "TypeScript", "SQL"] },
    { title: "AI, học máy & thị giác máy tính", items: ["PyTorch", "OpenCV", "YOLO", "RAG", "LangChain", "LangGraph"] },
    { title: "Backend & API", items: ["FastAPI", "Django", "Flask", "API REST", "Xác thực JWT"] },
    { title: "Dữ liệu & hạ tầng", items: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "pgvector", "Docker", "Linux / VPS"] },
    { title: "Frontend & triển khai", items: ["Next.js", "React", "Git", "GitHub", "Postman"] },
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
      intro: "I build the layers around AI — retrieval pipelines, prediction services, recommendation logic, and product interfaces that turn models into useful systems.",
      workButton: "Explore selected work",
      contactButton: "Contact via GitHub",
      experienceLabel: "EXPERIENCE",
      experienceValue: "AI & Web Development Intern · AIRC · 2025–2026",
      lookingLabel: "LOOKING FOR",
      lookingValue: "AI Engineer or Backend Developer roles",
      visualLabel: "Conceptual system map: data and context flow through models and retrieval into services and product interfaces",
      systemMap: "SYSTEM MAP / 001",
      mapStatus: "BUILD PATTERN",
      nodes: [
        { step: "01 / INPUT", title: "Data & context", detail: "documents · images · preferences" },
        { step: "02 / INTELLIGENCE", title: "Models & retrieval", detail: "RAG · prediction · ranking" },
        { step: "03 / DELIVERY", title: "Services & product", detail: "APIs · storage · interfaces" },
      ],
      mapFooter: "FROM MODEL TO USEFUL SYSTEM",
      mapEnd: "END-TO-END",
    },
    about: {
      kicker: "00 / PROFILE",
      title: "An engineer who thinks in systems.",
      firstLead: "I’m ",
      name: "Giap Hoang Thinh",
      firstParagraph: ", a Software Engineering student with hands-on experience in backend development and AI integration. My work spans RAG applications, recommendation systems, scientific prediction, and computer vision.",
      secondParagraph: "I enjoy making the pieces work together: shaping data flows, exposing model capabilities through APIs, and connecting them to interfaces people can use. I’m looking for an AI Engineer or Backend Developer role where I can keep building that bridge.",
      index: "00—01",
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
      kicker: "02 / SELECTED BUILDS",
      title: "Experiments, made tangible.",
      lede: "Personal projects exploring how AI and computer vision workflows can be packaged into usable tools.",
      index: "03 BUILDS",
    },
    skills: {
      kicker: "03 / TOOLKIT",
      title: "A practical, product-facing stack.",
      lede: "Grouped around the work above — from model integration and data storage to APIs, interfaces, and deployment.",
      index: "TOOLS",
    },
    contact: {
      kicker: "04 / CONTACT",
      title: "Let’s build something useful.",
      description: "Open to AI Engineer and Backend Developer opportunities. Connect with me on GitHub to start a conversation.",
      primary: "Open GitHub profile",
      secondary: "GitHub",
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
      intro: "Tôi xây dựng các lớp nền tảng xoay quanh AI — từ pipeline truy xuất, dịch vụ dự đoán, logic gợi ý đến giao diện sản phẩm, để biến mô hình thành những hệ thống hữu ích.",
      workButton: "Khám phá dự án tiêu biểu",
      contactButton: "Liên hệ qua GitHub",
      experienceLabel: "KINH NGHIỆM",
      experienceValue: "Thực tập Phát triển AI & Web · AIRC · 2025–2026",
      lookingLabel: "ĐANG TÌM KIẾM",
      lookingValue: "Cơ hội Kỹ sư AI hoặc Lập trình Backend",
      visualLabel: "Sơ đồ khái niệm: dữ liệu và ngữ cảnh đi qua mô hình, truy xuất rồi đến dịch vụ và giao diện sản phẩm",
      systemMap: "SƠ ĐỒ HỆ THỐNG / 001",
      mapStatus: "MẪU KIẾN TRÚC",
      nodes: [
        { step: "01 / ĐẦU VÀO", title: "Dữ liệu & ngữ cảnh", detail: "tài liệu · hình ảnh · tùy chọn" },
        { step: "02 / XỬ LÝ", title: "Mô hình & truy xuất", detail: "RAG · dự đoán · xếp hạng" },
        { step: "03 / TRIỂN KHAI", title: "Dịch vụ & sản phẩm", detail: "API · lưu trữ · giao diện" },
      ],
      mapFooter: "TỪ MÔ HÌNH ĐẾN HỆ THỐNG HỮU ÍCH",
      mapEnd: "ĐẦU CUỐI ĐẾN ĐẦU",
    },
    about: {
      kicker: "00 / HỒ SƠ",
      title: "Kỹ sư tư duy theo hệ thống.",
      firstLead: "Tôi là ",
      name: "Giáp Hoàng Thịnh",
      firstParagraph: ", sinh viên ngành Kỹ thuật Phần mềm, có kinh nghiệm thực hành về phát triển backend và tích hợp AI. Các dự án của tôi trải rộng từ ứng dụng RAG, hệ thống gợi ý, dự đoán khoa học đến thị giác máy tính.",
      secondParagraph: "Tôi thích kết nối các thành phần: tổ chức luồng dữ liệu, đưa khả năng của mô hình ra API và gắn chúng với giao diện dễ sử dụng. Tôi đang tìm cơ hội Kỹ sư AI hoặc Lập trình Backend để tiếp tục xây dựng cầu nối đó.",
      index: "00—01",
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
      kicker: "02 / DỰ ÁN TIÊU BIỂU",
      title: "Biến thử nghiệm thành công cụ hữu ích.",
      lede: "Các dự án cá nhân tìm hiểu cách đóng gói quy trình AI và thị giác máy tính thành những công cụ dễ sử dụng.",
      index: "03 DỰ ÁN",
    },
    skills: {
      kicker: "03 / BỘ CÔNG CỤ",
      title: "Bộ công nghệ thiết thực, hướng đến sản phẩm.",
      lede: "Nhóm theo các dự án phía trên — từ tích hợp mô hình, lưu trữ dữ liệu đến API, giao diện và triển khai.",
      index: "CÔNG NGHỆ",
    },
    contact: {
      kicker: "04 / LIÊN HỆ",
      title: "Cùng xây dựng điều hữu ích.",
      description: "Tôi đang tìm cơ hội Kỹ sư AI hoặc Lập trình Backend. Hãy kết nối qua GitHub để bắt đầu trò chuyện.",
      primary: "Mở hồ sơ GitHub",
      secondary: "GitHub",
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
      <div className="lab-hero-copy">
        <p className="lab-eyebrow"><span className="lab-live-dot" aria-hidden="true" />{copy.kicker} <span>/</span> {copy.location}</p>
        <h1 id="hero-title">Thịnh<br /><span>Giáp.</span></h1>
        <p className="lab-role">{copy.role} <span>·</span> {copy.secondaryRole}</p>
        <p className="lab-intro">{copy.intro}</p>
        <div className="lab-actions">
          <a className="lab-button lab-button-primary" href="#projects">{copy.workButton} <span aria-hidden="true">↓</span></a>
          <a className="lab-button lab-button-outline" href="https://github.com/giapthinh123" target="_blank" rel="noopener noreferrer">{copy.contactButton} <span aria-hidden="true">↗</span></a>
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
          )).flatMap((node, index, nodes) => index < nodes.length - 1 ? [node, <i key={`flow-${index}`} />] : [node])}
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
  const projects = projectsByLocale[locale];
  return (
    <section id="projects" className="lab-section lab-section-tint" aria-labelledby="projects-title">
      <div className="lab-container">
        <div className="lab-section-heading">
          <div><p className="lab-section-kicker">{copy.kicker}</p><h2 id="projects-title">{copy.title}</h2><p className="lab-section-lede">{copy.lede}</p></div>
          <span className="lab-section-index">{copy.index}</span>
        </div>
        <div className="lab-project-grid">
          {projects.map((project) => (
            <article className="lab-project-card" key={project.number}>
              <div className="lab-card-top"><span>{project.number} / {copy.label}</span><small>{project.category}</small></div>
              <h3>{project.name}</h3>
              {project.note ? <div className="lab-project-note">{project.note}</div> : null}
              <p>{project.description}</p>
              <ul className="lab-tags" aria-label={`${copy.techLabel} ${project.name}`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="lab-project-links">
                {project.caseStudy ? <a href={`/projects/healthcare?lang=${locale}#top`}>{copy.readCaseStudy} <span aria-hidden="true">→</span></a> : null}
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${copy.openGithub}: ${project.name}`}>GitHub <span aria-hidden="true">↗</span></a>
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
            <article className="lab-skill-card" key={group.title}>
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
          <div><p className="lab-section-kicker">{copy.kicker}</p><h2 id="contact-title">{copy.title}</h2><p>{copy.description}</p></div>
          <div className="lab-contact-actions">
            <a className="lab-button lab-button-primary" href="https://github.com/giapthinh123" target="_blank" rel="noopener noreferrer">{copy.primary} <span aria-hidden="true">↗</span></a>
            <a className="lab-button lab-button-outline" href="https://github.com/giapthinh123" target="_blank" rel="noopener noreferrer">{copy.secondary} <span aria-hidden="true">↗</span></a>
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
