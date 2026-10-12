import type { Metadata } from "next";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";
import AssetFrame from "./AssetFrame";
import VideoDemo from "./VideoDemo";
import { healthcareAssets } from "./assets";
import { LangGraphFlowDiagram, SystemArchitectureDiagram } from "./ProjectDiagrams";
import styles from "./healthcare.module.css";

type Language = "en" | "vi";

const pageCopy = {
  en: {
    skip: "Skip to content",
    homeLabel: "Thịnh Giáp — AI Systems Lab home",
    navLabel: "Case study navigation",
    navItems: [
      { label: "Contribution", href: "#contribution" },
      { label: "Workflow", href: "#solution" },
      { label: "Architecture", href: "#architecture" },
      { label: "Safety", href: "#safety" },
    ],
    sourceCode: "Source code",
    hero: {
      eyebrow: "HEALTHCARE / CASE STUDY",
      titleAccent: "Healthcare AI.",
      intro:
        "A personal multimodal healthcare assistant prototype exploring symptom clarification, emergency screening, specialty guidance, doctor discovery, and appointment workflows.",
      roleLabel: "Role",
      roleValue: "AI / Backend Developer",
      projectTypeLabel: "Project type",
      projectTypeValue: "Personal project",
      statusLabel: "Status",
      statusValue: "Research prototype",
      imageAlt: "VMEC Healthcare AI project image",
      snapshot: "PROJECT SNAPSHOT / VMEC",
      prototype: "RESEARCH PROTOTYPE",
    },
    demo: {
      kicker: "01 / PROJECT WALKTHROUGH",
      title: "A look at the prototype flow.",
      slides: "Open project slides",
      playLabel: "Play the VMEC Healthcare AI demo",
      unavailable: "The project demo video is not available.",
    },
    contribution: {
      kicker: "02 / MY CONTRIBUTION",
      title: "Three core areas of work.",
      items: [
        "Designed a LangGraph flow for medical relevance, emergency screening, triage, RAG retrieval, and doctor-catalog tools.",
        "Implemented session history and role-based workflows for the assistant prototype.",
        "Connected medical knowledge retrieval with doctor discovery and appointment-notification workflows.",
      ],
    },
    problem: {
      kicker: "03 / PROBLEM SPACE",
      title: "Making healthcare workflows easier to navigate.",
      paragraphs: [
        "The project explores how an AI assistant could clarify a user’s initial concern and provide specialty guidance, doctor discovery, and appointment workflows in one place.",
        "This is a prototype and research exercise, not a deployed clinical service. Any real-world healthcare use would require clinical, privacy, and operational validation.",
      ],
    },
    workflow: {
      kicker: "04 / WORKFLOW CONCEPTS",
      title: "Three connected capabilities.",
      lede: "The prototype brings together the assistant capabilities described in the project scope; it does not claim clinical validation.",
      index: "FLOW / 03",
      cardLabel: "CAPABILITY",
      capabilities: [
        {
          number: "01",
          title: "Clarify & screen",
          description:
            "A multimodal interaction flow for symptom clarification, medical relevance checks, and emergency screening before general assistance.",
        },
        {
          number: "02",
          title: "Retrieve & guide",
          description:
            "LangGraph coordinates triage and retrieval from medical references, then supports specialty guidance within the research prototype.",
        },
        {
          number: "03",
          title: "Discover & coordinate",
          description:
            "Doctor-catalog tools, session history, role-based workflows, and appointment notifications connect the assistant flow to follow-up actions.",
        },
      ],
    },
    architecture: {
      kicker: "05 / ARCHITECTURE",
      title: "System and orchestration diagrams.",
      lede: "Both diagrams below have been redrawn from the original project files as responsive vector diagrams, with the source labels and flow preserved.",
      index: "SYSTEM / 02",
    },
    safety: {
      kicker: "06 / SAFETY & SCOPE",
      title: "A clear boundary for healthcare AI.",
      lede: "This personal project is a research prototype. It is not clinically validated and must not replace diagnosis, treatment decisions, or advice from a healthcare professional.",
      index: "SCOPE / 03",
      cardLabel: "BOUNDARY",
      cards: [
        { title: "Prototype scope", description: "Personal research project demonstrating an AI-assisted healthcare workflow." },
        { title: "Safety-oriented flow", description: "The design includes medical relevance checks, emergency screening, and triage steps." },
        { title: "Clinical boundary", description: "Not clinically validated; it must not be used to diagnose, prescribe, or replace professional care." },
      ],
    },
    footer: "VMEC Healthcare AI · Case study by Thịnh Giáp",
    footerLink: "Back to AI Systems Lab",
  },
  vi: {
    skip: "Đi đến nội dung chính",
    homeLabel: "Thịnh Giáp — về trang chủ AI Systems Lab",
    navLabel: "Điều hướng hồ sơ dự án",
    navItems: [
      { label: "Đóng góp", href: "#contribution" },
      { label: "Luồng", href: "#solution" },
      { label: "Kiến trúc", href: "#architecture" },
      { label: "An toàn", href: "#safety" },
    ],
    sourceCode: "Mã nguồn",
    hero: {
      eyebrow: "Y TẾ / HỒ SƠ DỰ ÁN",
      titleAccent: "AI y tế.",
      intro:
        "Bản thử nghiệm cá nhân về trợ lý y tế đa phương thức, tìm hiểu cách làm rõ triệu chứng, sàng lọc tình huống khẩn cấp, định hướng chuyên khoa, tìm bác sĩ và hỗ trợ quy trình hẹn khám.",
      roleLabel: "Vai trò",
      roleValue: "Lập trình AI / Backend",
      projectTypeLabel: "Loại dự án",
      projectTypeValue: "Dự án cá nhân",
      statusLabel: "Trạng thái",
      statusValue: "Bản thử nghiệm nghiên cứu",
      imageAlt: "Hình ảnh dự án trợ lý AI y tế VMEC",
      snapshot: "HÌNH ẢNH DỰ ÁN / VMEC",
      prototype: "BẢN THỬ NGHIỆM NGHIÊN CỨU",
    },
    demo: {
      kicker: "01 / GIỚI THIỆU DỰ ÁN",
      title: "Khám phá luồng hoạt động của bản thử nghiệm.",
      slides: "Mở slide dự án",
      playLabel: "Phát video giới thiệu trợ lý AI y tế VMEC",
      unavailable: "Hiện chưa có video giới thiệu dự án.",
    },
    contribution: {
      kicker: "02 / ĐÓNG GÓP CỦA TÔI",
      title: "Ba phần việc chính.",
      items: [
        "Thiết kế luồng LangGraph gồm kiểm tra mức độ liên quan y tế, sàng lọc tình huống khẩn cấp, phân loại nhu cầu, truy xuất RAG và công cụ tra cứu danh mục bác sĩ.",
        "Triển khai lịch sử phiên làm việc và các quy trình phân quyền cho bản thử nghiệm trợ lý.",
        "Kết nối truy xuất kiến thức y khoa với chức năng tìm bác sĩ và luồng gửi thông báo lịch hẹn.",
      ],
    },
    problem: {
      kicker: "03 / BÀI TOÁN",
      title: "Giúp người dùng định hướng trong quy trình chăm sóc sức khỏe.",
      paragraphs: [
        "Dự án tìm hiểu cách một trợ lý AI có thể làm rõ mối quan tâm ban đầu của người dùng, đồng thời hỗ trợ định hướng chuyên khoa, tìm bác sĩ và thực hiện các bước hẹn khám trong cùng một nơi.",
        "Đây là bản thử nghiệm phục vụ nghiên cứu, không phải dịch vụ lâm sàng đang vận hành. Mọi ứng dụng thực tế trong y tế đều cần được thẩm định lâm sàng, quyền riêng tư và quy trình vận hành.",
      ],
    },
    workflow: {
      kicker: "04 / CÁC KHÁI NIỆM LUỒNG NGHIỆP VỤ",
      title: "Ba khả năng kết nối với nhau.",
      lede: "Bản thử nghiệm kết hợp các khả năng trợ lý trong phạm vi dự án; không khẳng định đã được kiểm chứng lâm sàng.",
      index: "LUỒNG / 03",
      cardLabel: "KHẢ NĂNG",
      capabilities: [
        {
          number: "01",
          title: "Làm rõ & sàng lọc",
          description:
            "Luồng tương tác đa phương thức hỗ trợ làm rõ triệu chứng, kiểm tra mức độ liên quan đến y tế và sàng lọc tình huống khẩn cấp trước khi cung cấp hỗ trợ thông thường.",
        },
        {
          number: "02",
          title: "Truy xuất & định hướng",
          description:
            "LangGraph điều phối phân loại nhu cầu và truy xuất từ tài liệu tham khảo y khoa, sau đó hỗ trợ định hướng chuyên khoa trong phạm vi bản thử nghiệm nghiên cứu.",
        },
        {
          number: "03",
          title: "Tìm bác sĩ & điều phối",
          description:
            "Công cụ tra cứu danh mục bác sĩ, lịch sử phiên, quy trình phân quyền và thông báo lịch hẹn kết nối luồng trợ lý với các bước tiếp theo.",
        },
      ],
    },
    architecture: {
      kicker: "05 / KIẾN TRÚC",
      title: "Sơ đồ hệ thống và luồng điều phối.",
      lede: "Hai sơ đồ dưới đây được vẽ lại từ các tệp gốc của dự án dưới dạng vector thích ứng với nhiều kích thước màn hình; nhãn và luồng kỹ thuật được giữ chính xác theo mã nguồn.",
      index: "HỆ THỐNG / 02",
    },
    safety: {
      kicker: "06 / AN TOÀN & PHẠM VI",
      title: "Ranh giới rõ ràng cho AI trong y tế.",
      lede: "Đây là dự án nghiên cứu cá nhân, chưa được kiểm chứng lâm sàng; không thay thế chẩn đoán, quyết định điều trị hay tư vấn từ chuyên gia y tế.",
      index: "PHẠM VI / 03",
      cardLabel: "GIỚI HẠN",
      cards: [
        { title: "Phạm vi bản thử nghiệm", description: "Dự án nghiên cứu cá nhân minh họa quy trình chăm sóc sức khỏe có hỗ trợ AI." },
        { title: "Luồng chú trọng an toàn", description: "Thiết kế gồm kiểm tra mức độ liên quan y tế, sàng lọc tình huống khẩn cấp và các bước phân loại nhu cầu." },
        { title: "Giới hạn lâm sàng", description: "Chưa được kiểm chứng lâm sàng; không dùng để chẩn đoán, kê đơn hoặc thay thế chăm sóc chuyên môn." },
      ],
    },
    footer: "AI y tế VMEC · Hồ sơ dự án của Thịnh Giáp",
    footerLink: "Quay lại AI Systems Lab",
  },
} satisfies Record<Language, Record<string, unknown>>;

export async function generateMetadata({
  searchParams,
}: PageProps<"/projects/healthcare">): Promise<Metadata> {
  const params = await searchParams;
  if (params.lang === "vi") {
    return {
      title: "AI y tế VMEC | Thịnh Giáp",
      description:
        "Bản thử nghiệm nghiên cứu cá nhân về trợ lý AI đa phương thức trong y tế của Thịnh Giáp. Chưa được kiểm chứng lâm sàng; không dùng để chẩn đoán hay điều trị.",
      openGraph: {
        title: "AI y tế VMEC | Thịnh Giáp",
        description:
          "Bản thử nghiệm nghiên cứu cá nhân về trợ lý AI đa phương thức trong y tế của Thịnh Giáp. Chưa được kiểm chứng lâm sàng; không dùng để chẩn đoán hay điều trị.",
        type: "article",
        locale: "vi_VN",
        siteName: "Thịnh Giáp | AI Systems Lab",
      },
    };
  }
  return {
    title: "VMEC Healthcare AI | Thịnh Giáp",
    description:
      "Personal healthcare AI research prototype by Thịnh Giáp. Not a clinically validated diagnostic or treatment tool.",
    openGraph: {
      title: "VMEC Healthcare AI | Thịnh Giáp",
      description:
        "Personal healthcare AI research prototype by Thịnh Giáp. Not a clinically validated diagnostic or treatment tool.",
      type: "article",
      locale: "en_US",
      siteName: "Thịnh Giáp | AI Systems Lab",
    },
  };
}

export default async function HealthcareProjectPage({
  searchParams,
}: PageProps<"/projects/healthcare">) {
  const params = await searchParams;
  const language: Language = params.lang === "vi" ? "vi" : "en";
  const copy = pageCopy[language] as (typeof pageCopy)[Language];
  return (
    <>
      <a lang={language} className="lab-skip-link" href="#main-content">{copy.skip}</a>

      <header lang={language} className={`lab-header ${styles.header}`}>
        <div className={`lab-header-inner ${styles.headerInner}`}>
          <Link href={`/?lang=${language}#top`} className="lab-brand" aria-label={copy.homeLabel}>
            <span className="lab-monogram" aria-hidden="true">TG</span>
            <span className="lab-brand-copy">
              <strong>Thịnh Giáp</strong>
              <small>AI SYSTEMS LAB</small>
            </span>
          </Link>

          <nav aria-label={copy.navLabel} className={`lab-nav ${styles.nav}`}>
            {copy.navItems.map(({ label, href }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <div className="lab-header-actions">
            <LanguageSwitch locale={language} path="/projects/healthcare" />
            <a
              className="lab-header-link"
              href="https://github.com/giapthinh123/healthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.sourceCode} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" lang={language} className={styles.page}>
        <section id="top" className={styles.hero} aria-labelledby="case-study-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={`lab-eyebrow ${styles.heroEyebrow}`}>
                <span className="lab-live-dot" aria-hidden="true" />
                {copy.hero.eyebrow}
              </p>
              <h1 id="case-study-title" className={styles.title}>
                VMEC
                <span>{copy.hero.titleAccent}</span>
              </h1>
              <p className={styles.heroIntro}>{copy.hero.intro}</p>

              <dl className={styles.metrics}>
                <div>
                  <dt>{copy.hero.roleLabel}</dt>
                  <dd>{copy.hero.roleValue}</dd>
                </div>
                <div>
                  <dt>{copy.hero.projectTypeLabel}</dt>
                  <dd>{copy.hero.projectTypeValue}</dd>
                </div>
                <div>
                  <dt>{copy.hero.statusLabel}</dt>
                  <dd>{copy.hero.statusValue}</dd>
                </div>
              </dl>
            </div>

            <div className={styles.heroVisual}>
              <AssetFrame
                src={healthcareAssets.heroProduct}
                label={copy.hero.imageAlt}
                ratio="hero"
                priority
              />
              <p className={styles.visualCaption}>
                <span>{copy.hero.snapshot}</span>
                <span>{copy.hero.prototype}</span>
              </p>
            </div>
          </div>
        </section>

        <section id="demo" className={`${styles.section} ${styles.demoSection}`} aria-labelledby="demo-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className="lab-section-kicker">{copy.demo.kicker}</p>
                <h2 id="demo-title" className={styles.sectionTitle}>{copy.demo.title}</h2>
              </div>
              <a className={styles.textLink} href={healthcareAssets.slides} target="_blank" rel="noopener noreferrer">
                {copy.demo.slides} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className={styles.demoFrame}>
              <VideoDemo
                source={healthcareAssets.demoVideo}
                poster={healthcareAssets.demoPoster}
                playLabel={copy.demo.playLabel}
                unavailableText={copy.demo.unavailable}
              />
            </div>
          </div>
        </section>

        <section id="contribution" className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="contribution-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className="lab-section-kicker">{copy.contribution.kicker}</p>
                <h2 id="contribution-title" className={styles.sectionTitle}>{copy.contribution.title}</h2>
              </div>
              <span className={styles.sectionIndex}>01—03</span>
            </div>
            <ol className={styles.contributionList}>
              {copy.contribution.items.map((item, index) => (
                <li key={item}>
                  <span className={styles.itemNumber}>0{index + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="problem" className={styles.section} aria-labelledby="problem-title">
          <div className={styles.container}>
            <div className={styles.problemGrid}>
              <div>
                <p className="lab-section-kicker">{copy.problem.kicker}</p>
                <h2 id="problem-title" className={styles.sectionTitle}>{copy.problem.title}</h2>
              </div>
              <div className={styles.problemCopy}>
                {copy.problem.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="solution-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className="lab-section-kicker">{copy.workflow.kicker}</p>
                <h2 id="solution-title" className={styles.sectionTitle}>{copy.workflow.title}</h2>
                <p className={styles.sectionLede}>{copy.workflow.lede}</p>
              </div>
              <span className={styles.sectionIndex}>{copy.workflow.index}</span>
            </div>

            <div className={styles.capabilityGrid}>
              {copy.workflow.capabilities.map((capability) => (
                <article key={capability.number} className={styles.capabilityCard}>
                  <span className={styles.cardNumber}>{capability.number} / {copy.workflow.cardLabel}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className={styles.section} aria-labelledby="architecture-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className="lab-section-kicker">{copy.architecture.kicker}</p>
                <h2 id="architecture-title" className={styles.sectionTitle}>{copy.architecture.title}</h2>
                <p className={styles.sectionLede}>{copy.architecture.lede}</p>
              </div>
              <span className={styles.sectionIndex}>{copy.architecture.index}</span>
            </div>

            <div className={styles.diagramWrap}>
              <SystemArchitectureDiagram language={language} />
            </div>
            <div className={styles.diagramWrap}>
              <LangGraphFlowDiagram language={language} />
            </div>
          </div>
        </section>

        <section id="safety" className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="safety-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className="lab-section-kicker">{copy.safety.kicker}</p>
                <h2 id="safety-title" className={styles.sectionTitle}>{copy.safety.title}</h2>
                <p className={styles.sectionLede}>{copy.safety.lede}</p>
              </div>
              <span className={styles.sectionIndex}>{copy.safety.index}</span>
            </div>

            <div className={styles.safetyGrid}>
              {copy.safety.cards.map((card, index) => (
                <article key={card.title} className={styles.safetyCard}>
                  <span className={styles.cardNumber}>0{index + 1} / {copy.safety.cardLabel}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer lang={language} className={`lab-footer ${styles.footer}`}>
        <div className={`lab-container ${styles.footerInner}`}>
          <span>{copy.footer}</span>
          <Link href={`/?lang=${language}#top`}>{copy.footerLink} <span aria-hidden="true">↑</span></Link>
        </div>
      </footer>
    </>
  );
}
