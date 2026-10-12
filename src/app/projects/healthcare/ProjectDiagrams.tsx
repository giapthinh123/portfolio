type DiagramLanguage = "en" | "vi";

type SvgCardProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  eyebrow: string;
  title: string;
  lines?: string[];
  accent?: string;
  highlighted?: boolean;
  compact?: boolean;
};

function SvgCard({
  x,
  y,
  width,
  height,
  eyebrow,
  title,
  lines = [],
  accent = "#9CE8BD",
  highlighted = false,
  compact = false,
}: SvgCardProps) {
  const titleY = y + (compact ? 46 : 56);
  const lineStart = titleY + (compact ? 22 : 27);
  const lineGap = compact ? 17 : 20;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={compact ? 17 : 20}
        fill={highlighted ? "#9CE8BD" : "#11221C"}
        stroke={highlighted ? "#C5F4D5" : "#34483C"}
        strokeWidth="1.5"
      />
      <rect x={x} y={y + 16} width="4" height={height - 32} rx="2" fill={accent} />
      <text
        x={x + 20}
        y={y + (compact ? 25 : 29)}
        fill={highlighted ? "#173623" : "#A4B5AC"}
        fontSize={compact ? "9" : "10"}
        fontWeight="700"
        letterSpacing="1.5"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {eyebrow.toUpperCase()}
      </text>
      <text
        x={x + 20}
        y={titleY}
        fill={highlighted ? "#092017" : "#EDF5F0"}
        fontSize={compact ? "16" : "19"}
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {title}
      </text>
      {lines.map((line, index) => (
        <text
          key={`${line}-${index}`}
          x={x + 20}
          y={lineStart + index * lineGap}
          fill={highlighted ? "#173623" : "#A4B5AC"}
          fontSize={compact ? "11" : "12"}
          fontWeight="500"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function ArrowDefs({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={`${id}-grid`} width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="#34483C" opacity="0.38" />
      </pattern>
      <marker
        id={`${id}-arrow`}
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#9CE8BD" />
      </marker>
      <marker
        id={`${id}-arrow-muted`}
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#6A8074" />
      </marker>
    </defs>
  );
}

function Arrow({
  d,
  id,
  muted = false,
  dashed = false,
}: {
  d: string;
  id: string;
  muted?: boolean;
  dashed?: boolean;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={muted ? "#6A8074" : "#9CE8BD"}
      strokeWidth={muted ? "1.8" : "2.2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dashed ? "5 7" : undefined}
      markerEnd={`url(#${id}-arrow${muted ? "-muted" : ""})`}
    />
  );
}

function BranchLabel({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <g>
      <rect x={x - 23} y={y - 15} width="46" height="25" rx="12.5" fill="#172D23" stroke="#34483C" />
      <text
        x={x}
        y={y + 2}
        textAnchor="middle"
        fill="#C5F4D5"
        fontSize="11"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {children}
      </text>
    </g>
  );
}

function Terminal({
  x,
  y,
  width,
  label,
  compact = false,
}: {
  x: number;
  y: number;
  width: number;
  label: string;
  compact?: boolean;
}) {
  const height = compact ? 56 : 62;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={height / 2} fill="#142B20" stroke="#9CE8BD" strokeWidth="1.5" />
      <circle cx={x + 18} cy={y + height / 2} r="4" fill="#9CE8BD" />
      <text
        x={x + width / 2 + 5}
        y={y + height / 2 + 5}
        textAnchor="middle"
        fill="#EDF5F0"
        fontSize={compact ? "13" : "15"}
        fontWeight="700"
        letterSpacing="1"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function Diamond({
  cx,
  cy,
  width,
  height,
  lines,
  compact = false,
}: {
  cx: number;
  cy: number;
  width: number;
  height: number;
  lines: string[];
  compact?: boolean;
}) {
  const points = `${cx},${cy - height / 2} ${cx + width / 2},${cy} ${cx},${cy + height / 2} ${cx - width / 2},${cy}`;
  const lineGap = compact ? 15 : 17;
  const firstY = cy - ((lines.length - 1) * lineGap) / 2 + 4;
  return (
    <g>
      <polygon points={points} fill="#12271E" stroke="#9CE8BD" strokeWidth="1.7" />
      {lines.map((line, index) => (
        <text
          key={line}
          x={cx}
          y={firstY + index * lineGap}
          textAnchor="middle"
          fill="#EDF5F0"
          fontSize={compact ? "12" : "13"}
          fontWeight="700"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

const architectureCopy = {
  en: {
    caption: "01 / System map",
    subtitle: "Request path · supporting systems",
    title: "VMEC Healthcare AI system architecture",
    description: "Frontend sends requests to FastAPI and LangGraph, which connects to Hybrid RAG, AI models, business services, and data storage.",
    layers: ["REQUEST LAYER", "ORCHESTRATION", "CAPABILITIES & DATA"],
    client: { eyebrow: "01 · Client", title: "Frontend", lines: ["Next.js Web / Expo Mobile", "Voice & Realtime"] },
    api: { eyebrow: "02 · API", title: "FastAPI", lines: ["REST / SSE / WebSocket"] },
    core: { eyebrow: "03 · Core", title: "AI Orchestration", lines: ["LangGraph + Guardrails"] },
    summary: "One request path; four connected supporting systems",
    sourceNote: "REDRAWN FROM PROJECT SOURCE",
    mobileLabel: "SAME SYSTEM · MOBILE LAYOUT",
    mobileNote: "Redrawn from the repository architecture diagram",
  },
  vi: {
    caption: "01 / Sơ đồ hệ thống",
    subtitle: "Luồng yêu cầu · các hệ thống hỗ trợ",
    title: "Kiến trúc hệ thống trợ lý AI y tế VMEC",
    description: "Giao diện gửi yêu cầu đến FastAPI và LangGraph, sau đó kết nối với RAG lai, mô hình AI, dịch vụ nghiệp vụ và tầng lưu trữ dữ liệu.",
    layers: ["TẦNG GỬI YÊU CẦU", "ĐIỀU PHỐI", "NĂNG LỰC & DỮ LIỆU"],
    client: { eyebrow: "01 · ỨNG DỤNG", title: "Giao diện", lines: ["Web Next.js / Mobile Expo", "Giọng nói & thời gian thực"] },
    api: { eyebrow: "02 · API", title: "FastAPI", lines: ["REST / SSE / WebSocket"] },
    core: { eyebrow: "03 · LÕI", title: "Điều phối AI", lines: ["LangGraph + lớp bảo vệ"] },
    summary: "Một luồng yêu cầu; bốn hệ thống hỗ trợ kết nối",
    sourceNote: "VẼ LẠI TỪ MÃ NGUỒN DỰ ÁN",
    mobileLabel: "CÙNG HỆ THỐNG · BỐ CỤC DI ĐỘNG",
    mobileNote: "Vẽ lại từ sơ đồ kiến trúc trong mã nguồn",
  },
} satisfies Record<DiagramLanguage, Record<string, unknown>>;

const architectureBranches = {
  en: [
    { eyebrow: "RETRIEVAL", title: "Hybrid RAG", lines: ["pgvector + Kuzu", "RRF + FlashRank"], accent: "#9CE8BD" },
    { eyebrow: "MODELS", title: "AI Models", lines: ["Gemini / Mistral Embeddings"], accent: "#9DC8FF" },
    { eyebrow: "PRODUCT SERVICES", title: "Business Services", lines: ["Booking / Navigation"], accent: "#F1C27D" },
    { eyebrow: "PERSISTENCE", title: "Data", lines: ["Cosmos DB / Supabase / MongoDB"], accent: "#D7A8F7" },
  ],
  vi: [
    { eyebrow: "TRUY XUẤT", title: "RAG lai", lines: ["pgvector + Kuzu", "RRF + FlashRank"], accent: "#9CE8BD" },
    { eyebrow: "MÔ HÌNH", title: "Mô hình AI", lines: ["Gemini / Mistral Embeddings"], accent: "#9DC8FF" },
    { eyebrow: "DỊCH VỤ SẢN PHẨM", title: "Dịch vụ nghiệp vụ", lines: ["Đặt lịch / Dẫn đường"], accent: "#F1C27D" },
    { eyebrow: "LƯU TRỮ", title: "Dữ liệu", lines: ["Cosmos DB / Supabase / MongoDB"], accent: "#D7A8F7" },
  ],
} satisfies Record<DiagramLanguage, { eyebrow: string; title: string; lines: string[]; accent: string }[]>;

export function SystemArchitectureDiagram({ language }: { language: DiagramLanguage }) {
  const id = "system-map";
  const copy = architectureCopy[language] as (typeof architectureCopy)[DiagramLanguage];
  const branches = architectureBranches[language];
  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-[#34483C] bg-[#0D1915] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9CE8BD]">{copy.caption}</span>
        <span className="text-xs text-[#A4B5AC]">{copy.subtitle}</span>
      </figcaption>

      <svg className="hidden h-auto w-full md:block" viewBox="0 0 1200 650" role="img" aria-labelledby="system-desktop-title system-desktop-desc">
        <title id="system-desktop-title">{copy.title}</title>
        <desc id="system-desktop-desc">{copy.description}</desc>
        <ArrowDefs id={id} />
        <rect width="1200" height="650" fill="#0D1915" />
        <rect width="1200" height="650" fill={`url(#${id}-grid)`} />

        <text x="48" y="54" fill="#7E9187" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.layers[0]}</text>
        <text x="604" y="54" fill="#7E9187" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.layers[1]}</text>
        <text x="930" y="54" fill="#7E9187" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.layers[2]}</text>

        <Arrow id={id} d="M 278 314 H 326" />
        <Arrow id={id} d="M 556 314 H 604" />
        <path d="M 556 350 H 580 V 438 H 904 V 398 H 930" fill="none" stroke="#6A8074" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-arrow-muted)`} />
        <path d="M 854 314 H 884 V 117 M 884 117 V 537" fill="none" stroke="#6A8074" strokeWidth="2" strokeLinecap="round" />
        {[117, 257, 537].map((centerY) => (
          <Arrow key={centerY} id={id} d={`M 884 ${centerY} H 930`} />
        ))}
        <circle cx="884" cy="314" r="5" fill="#9CE8BD" />
        <Arrow id={id} d="M 1049 450 V 486" />

        <SvgCard x={48} y={239} width={230} height={150} eyebrow={copy.client.eyebrow as string} title={copy.client.title as string} lines={copy.client.lines as string[]} accent="#9CE8BD" />
        <SvgCard x={326} y={239} width={230} height={150} eyebrow={copy.api.eyebrow as string} title={copy.api.title as string} lines={copy.api.lines as string[]} accent="#9DC8FF" />
        <SvgCard x={604} y={239} width={250} height={150} eyebrow={copy.core.eyebrow as string} title={copy.core.title as string} lines={copy.core.lines as string[]} accent="#9CE8BD" highlighted />
        {branches.map((branch, index) => (
          <SvgCard
            key={branch.title}
            x={930}
            y={66 + index * 140}
            width={238}
            height={104}
            eyebrow={branch.eyebrow}
            title={branch.title}
            lines={branch.lines}
            accent={branch.accent}
            compact
          />
        ))}

        <line x1="48" y1="594" x2="1152" y2="594" stroke="#34483C" strokeWidth="1" />
        <circle cx="57" cy="622" r="4" fill="#9CE8BD" />
        <text x="70" y="626" fill="#A4B5AC" fontSize="11" fontWeight="600" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.summary}</text>
        <text x="1152" y="626" textAnchor="end" fill="#718278" fontSize="10" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.sourceNote}</text>
      </svg>

      <svg className="mx-auto block h-auto w-full max-w-[520px] md:hidden" viewBox="0 0 390 1325" role="img" aria-labelledby="system-mobile-title system-mobile-desc">
        <title id="system-mobile-title">{copy.title}</title>
        <desc id="system-mobile-desc">{copy.description}</desc>
        <ArrowDefs id={`${id}-mobile`} />
        <rect width="390" height="1325" fill="#0D1915" />
        <rect width="390" height="1325" fill={`url(#${id}-mobile-grid)`} />

        <Arrow id={`${id}-mobile`} d="M 195 168 V 202" />
        <Arrow id={`${id}-mobile`} d="M 195 336 V 372" />
        <path d="M 195 336 H 16 V 944 H 32" fill="none" stroke="#6A8074" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-mobile-arrow-muted)`} />
        <path d="M 358 442 H 370 V 1094" fill="none" stroke="#6A8074" strokeWidth="2" strokeLinecap="round" />
        {[644, 794, 1094].map((centerY) => (
          <Arrow key={centerY} id={`${id}-mobile`} d={`M 370 ${centerY} H 358`} />
        ))}
        <circle cx="370" cy="442" r="4" fill="#9CE8BD" />
        <Arrow id={`${id}-mobile`} d="M 195 994 V 1044" />

        <SvgCard x={32} y={34} width={326} height={134} eyebrow={copy.client.eyebrow as string} title={copy.client.title as string} lines={copy.client.lines as string[]} accent="#9CE8BD" compact />
        <SvgCard x={32} y={202} width={326} height={134} eyebrow={copy.api.eyebrow as string} title={copy.api.title as string} lines={copy.api.lines as string[]} accent="#9DC8FF" compact />
        <SvgCard x={32} y={372} width={326} height={140} eyebrow={copy.core.eyebrow as string} title={copy.core.title as string} lines={copy.core.lines as string[]} accent="#9CE8BD" highlighted compact />
        {branches.map((branch, index) => (
          <SvgCard
            key={branch.title}
            x={32}
            y={594 + index * 150}
            width={326}
            height={100}
            eyebrow={branch.eyebrow}
            title={branch.title}
            lines={branch.lines}
            accent={branch.accent}
            compact
          />
        ))}
        <text x="32" y="1237" fill="#A4B5AC" fontSize="10" fontWeight="700" letterSpacing="1.3" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.mobileLabel}</text>
        <text x="32" y="1260" fill="#6A8074" fontSize="10" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.mobileNote}</text>
      </svg>
    </figure>
  );
}

const flowCopy = {
  en: {
    caption: "02 / LangGraph flow",
    subtitle: "Guardrails · routing · audit",
    title: "Healthcare assistant LangGraph flow",
    description: "Start passes through Guardrails and a permission decision. Allowed requests reach the Workflow / Intent Router, which routes to TriageGraph, RagGraph, CatalogGraph, and Fallback. Triage checks whether there is enough information. Paths converge at Audit and END.",
    headings: ["SCREEN", "ROUTE", "SPECIALIST GRAPHS"],
    start: "START",
    safetyEyebrow: "01 · Safety gate",
    safetyTitle: "Guardrails",
    safetyLines: ["Validation → Emergency", "Armor → Medical Check"],
    permission: ["Allow", "processing?"],
    routeEyebrow: "02 · Routing",
    routeTitle: "Workflow /",
    routeLines: ["Intent Router"],
    subgraph: "SUBGRAPH",
    enoughInfo: "Enough info?",
    yes: "Yes",
    no: "No",
    auditEyebrow: "TRACE",
    auditTitle: "Audit",
    end: "END",
    desktopNote: "REDRAWN FROM ORIGINAL LANGGRAPH DIAGRAM · LABELS RETAINED",
    mobileNote: "REDRAWN FROM SOURCE · RESPONSIVE MOBILE FLOW",
  },
  vi: {
    caption: "02 / Luồng LangGraph",
    subtitle: "Lớp bảo vệ · định tuyến · kiểm toán",
    title: "Luồng LangGraph của trợ lý y tế",
    description: "Yêu cầu bắt đầu đi qua lớp bảo vệ và bước kiểm tra quyền xử lý. Yêu cầu được phép sẽ đến bộ định tuyến quy trình và ý định, rồi chuyển tới TriageGraph, RagGraph, CatalogGraph hoặc nhánh dự phòng. Luồng phân loại kiểm tra đã đủ thông tin chưa; các nhánh hội tụ tại bước kiểm toán và kết thúc.",
    headings: ["GIAO DIỆN", "ĐỊNH TUYẾN", "CÁC ĐỒ THỊ CHUYÊN TRÁCH"],
    start: "BẮT ĐẦU",
    safetyEyebrow: "01 · CỔNG AN TOÀN",
    safetyTitle: "Lớp bảo vệ",
    safetyLines: ["Kiểm tra → khẩn cấp", "Armor → rà soát y tế"],
    permission: ["Cho phép", "xử lý?"],
    routeEyebrow: "02 · ĐỊNH TUYẾN",
    routeTitle: "Điều phối luồng",
    routeLines: ["Định tuyến ý định"],
    subgraph: "ĐỒ THỊ CON",
    enoughInfo: "Đủ thông tin?",
    yes: "Có",
    no: "Không",
    auditEyebrow: "KIỂM TRA",
    auditTitle: "Kiểm toán",
    end: "KẾT THÚC",
    desktopNote: "VẼ LẠI TỪ SƠ ĐỒ LANGGRAPH GỐC · GIỮ NGUYÊN LUỒNG",
    mobileNote: "VẼ LẠI TỪ MÃ NGUỒN · LUỒNG THÍCH ỨNG CHO DI ĐỘNG",
  },
} satisfies Record<DiagramLanguage, Record<string, unknown>>;

const flowNodes = [
  { title: "TriageGraph", y: 96, accent: "#9CE8BD" },
  { title: "RagGraph", y: 246, accent: "#9DC8FF" },
  { title: "CatalogGraph", y: 396, accent: "#F1C27D" },
  { title: "Fallback", y: 546, accent: "#D7A8F7" },
];

export function LangGraphFlowDiagram({ language }: { language: DiagramLanguage }) {
  const id = "langgraph-flow";
  const copy = flowCopy[language] as (typeof flowCopy)[DiagramLanguage];
  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-[#34483C] bg-[#0D1915] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9CE8BD]">{copy.caption}</span>
        <span className="text-xs text-[#A4B5AC]">{copy.subtitle}</span>
      </figcaption>

      <svg className="hidden h-auto w-full xl:block" viewBox="0 0 1420 900" role="img" aria-labelledby="flow-desktop-title flow-desktop-desc">
        <title id="flow-desktop-title">{copy.title}</title>
        <desc id="flow-desktop-desc">{copy.description}</desc>
        <ArrowDefs id={id} />
        <rect width="1420" height="900" fill="#0D1915" />
        <rect width="1420" height="900" fill={`url(#${id}-grid)`} />

        <text x="34" y="58" fill="#7E9187" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.headings[0]}</text>
        <text x="685" y="58" fill="#7E9187" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.headings[1]}</text>
        <text x="955" y="58" fill="#7E9187" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.headings[2]}</text>

        <Arrow id={id} d="M 140 342 H 180" />
        <Arrow id={id} d="M 440 342 H 450" />
        <Arrow id={id} d="M 630 342 H 685" />
        <BranchLabel x={657} y={322}>{copy.yes as string}</BranchLabel>
        <path d="M 540 252 C 560 175 640 74 780 74 H 1380 V 754 H 1225" fill="none" stroke="#6A8074" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-arrow-muted)`} />
        <BranchLabel x={590} y={183}>{copy.no as string}</BranchLabel>

        <path d="M 895 342 H 920 V 137 M 920 137 V 587" fill="none" stroke="#6A8074" strokeWidth="2" strokeLinecap="round" />
        {flowNodes.map((node) => (
          <Arrow key={node.title} id={id} d={`M 920 ${node.y + 41} H 955`} />
        ))}
        <circle cx="920" cy="342" r="5" fill="#9CE8BD" />

        <Arrow id={id} d="M 1165 137 H 1175" />
        <Diamond cx={1240} cy={137} width={130} height={130} lines={[copy.enoughInfo as string]} />
        <path d="M 1240 202 C 1240 228 1210 246 1165 287" fill="none" stroke="#9CE8BD" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-arrow)`} />
        <BranchLabel x={1202} y={229}>{copy.yes as string}</BranchLabel>
        <path d="M 1305 137 H 1396 V 754 H 1225" fill="none" stroke="#6A8074" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-arrow-muted)`} />
        <BranchLabel x={1335} y={121}>{copy.no as string}</BranchLabel>

        <path d="M 1165 287 C 1220 307 1260 344 1270 390 V 744 H 1225" fill="none" stroke="#6A8074" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-arrow-muted)`} />
        <path d="M 1165 437 H 1300 V 763 H 1225" fill="none" stroke="#6A8074" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-arrow-muted)`} />
        <path d="M 1165 587 H 1330 V 781 H 1225" fill="none" stroke="#6A8074" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-arrow-muted)`} />
        <Arrow id={id} d="M 1125 804 V 830" />

        <Terminal x={32} y={312} width={108} label={copy.start as string} />
        <SvgCard x={180} y={265} width={260} height={155} eyebrow={copy.safetyEyebrow as string} title={copy.safetyTitle as string} lines={copy.safetyLines as string[]} accent="#F1C27D" />
        <Diamond cx={540} cy={342} width={180} height={180} lines={copy.permission as string[]} />
        <SvgCard x={685} y={285} width={210} height={114} eyebrow={copy.routeEyebrow as string} title={copy.routeTitle as string} lines={copy.routeLines as string[]} accent="#9CE8BD" highlighted compact />
        {flowNodes.map((node) => (
          <SvgCard key={node.title} x={955} y={node.y} width={210} height={82} eyebrow={copy.subgraph as string} title={language === "vi" && node.title === "Fallback" ? "Dự phòng" : node.title} accent={node.accent} compact />
        ))}
        <SvgCard x={1025} y={715} width={200} height={89} eyebrow={copy.auditEyebrow as string} title={copy.auditTitle as string} accent="#F1C27D" compact />
        <Terminal x={1075} y={830} width={100} label={copy.end as string} compact />
        <text x="32" y="875" fill="#718278" fontSize="10" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.desktopNote}</text>
      </svg>

      <svg className="mx-auto block h-auto w-full max-w-[520px] xl:hidden" viewBox="0 0 420 1640" role="img" aria-labelledby="flow-mobile-title flow-mobile-desc">
        <title id="flow-mobile-title">{copy.title}</title>
        <desc id="flow-mobile-desc">{copy.description}</desc>
        <ArrowDefs id={`${id}-mobile`} />
        <rect width="420" height="1640" fill="#0D1915" />
        <rect width="420" height="1640" fill={`url(#${id}-mobile-grid)`} />

        <Arrow id={`${id}-mobile`} d="M 210 88 V 132" />
        <Arrow id={`${id}-mobile`} d="M 210 298 V 325" />
        <Arrow id={`${id}-mobile`} d="M 210 475 V 522" />
        <BranchLabel x={237} y={499}>{copy.yes as string}</BranchLabel>
        <path d="M 130 400 H 18 V 1424 H 50" fill="none" stroke="#6A8074" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-mobile-arrow-muted)`} />
        <BranchLabel x={59} y={381}>{copy.no as string}</BranchLabel>

        <path d="M 362 577 H 386 V 1261" fill="none" stroke="#6A8074" strokeWidth="1.8" strokeLinecap="round" />
        {[716, 949, 1105, 1261].map((centerY) => (
          <Arrow key={centerY} id={`${id}-mobile`} d={`M 386 ${centerY} H 360`} />
        ))}
        <circle cx="386" cy="577" r="4" fill="#9CE8BD" />

        <Arrow id={`${id}-mobile`} d="M 210 757 V 785" />
        <Diamond cx={210} cy={840} width={110} height={110} lines={language === "vi" ? ["Đủ thông", "tin?"] : ["Enough", "info?"]} compact />
        <path d="M 265 840 H 386 V 949 H 360" fill="none" stroke="#9CE8BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-mobile-arrow)`} />
        <BranchLabel x={302} y={822}>{copy.yes as string}</BranchLabel>
        <path d="M 155 840 H 28 V 1480 H 50" fill="none" stroke="#6A8074" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-mobile-arrow-muted)`} />
        <BranchLabel x={75} y={821}>{copy.no as string}</BranchLabel>

        <path d="M 360 949 H 386 V 1424 H 300" fill="none" stroke="#6A8074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-mobile-arrow-muted)`} />
        <path d="M 360 1105 H 386 V 1450 H 300" fill="none" stroke="#6A8074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-mobile-arrow-muted)`} />
        <path d="M 360 1261 H 386 V 1477 H 300" fill="none" stroke="#6A8074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id}-mobile-arrow-muted)`} />
        <Arrow id={`${id}-mobile`} d="M 175 1498 V 1541" />

        <Terminal x={138} y={32} width={144} label={copy.start as string} compact />
        <SvgCard x={36} y={132} width={348} height={166} eyebrow={copy.safetyEyebrow as string} title={copy.safetyTitle as string} lines={copy.safetyLines as string[]} accent="#F1C27D" compact />
        <Diamond cx={210} cy={400} width={160} height={150} lines={copy.permission as string[]} compact />
        <SvgCard x={58} y={522} width={304} height={110} eyebrow={copy.routeEyebrow as string} title={`${copy.routeTitle as string} ${(copy.routeLines as string[])[0]}`} accent="#9CE8BD" highlighted compact />
        <SvgCard x={40} y={675} width={320} height={82} eyebrow={copy.subgraph as string} title="TriageGraph" accent="#9CE8BD" compact />
        <SvgCard x={40} y={908} width={320} height={82} eyebrow={copy.subgraph as string} title="RagGraph" accent="#9DC8FF" compact />
        <SvgCard x={40} y={1064} width={320} height={82} eyebrow={copy.subgraph as string} title="CatalogGraph" accent="#F1C27D" compact />
        <SvgCard x={40} y={1220} width={320} height={82} eyebrow={copy.subgraph as string} title={language === "vi" ? "Dự phòng" : "Fallback"} accent="#D7A8F7" compact />
        <SvgCard x={50} y={1410} width={250} height={88} eyebrow={copy.auditEyebrow as string} title={copy.auditTitle as string} accent="#F1C27D" compact />
        <Terminal x={138} y={1541} width={144} label={copy.end as string} compact />
        <text x="36" y="1610" fill="#718278" fontSize="9" fontFamily="ui-sans-serif, system-ui, sans-serif">{copy.mobileNote}</text>
      </svg>
    </figure>
  );
}
