import type { Metadata } from "next";
import Link from "next/link";
import AssetFrame from "./AssetFrame";
import VideoDemo from "./VideoDemo";
import { healthcareAssets } from "./assets";

export const metadata: Metadata = {
  title: "VMEC Healthcare AI | Thịnh Giáp",
  description:
    "Case study VMEC Healthcare AI - trợ lý y tế đa phương thức hỗ trợ định hướng chuyên khoa, đặt lịch và dẫn đường bệnh viện.",
};

const navItems = [
  ["Đóng góp", "#contribution"],
  ["Giải pháp", "#solution"],
  ["Kiến trúc", "#architecture"],
  ["An toàn", "#safety"],
];

const contributions = [
  "Thiết kế luồng backend. Các tính năng cho sản phẩm.",
  "Thiết kế flow hội thoại end-to-end, bao gồm Emergency Guard, RAG và GraphRAG.",
  "Thiết kế truy vấn tài liệu Hybrid RAG - GraphRAG.",
];

const solutions = [
  {
    number: "01",
    title: "Hiểu nhu cầu",
    description:
      "Hội thoại nhiều lượt qua văn bản hoặc giọng nói giúp làm rõ triệu chứng. Emergency Guard được ưu tiên để phát hiện dấu hiệu nguy hiểm trước khi tiếp tục luồng tư vấn.",
    image: healthcareAssets.solutionScreens.needs,
    label: "Screenshot - Hiểu nhu cầu",
  },
  {
    number: "02",
    title: "Kết nối lịch khám",
    description:
      "Hệ thống định hướng chuyên khoa, tra cứu bác sĩ và khung giờ còn trống. Lịch được giữ tạm thời 15 phút và chỉ xác nhận sau khi bệnh nhân đồng ý, lễ tân phê duyệt.",
    image: healthcareAssets.solutionScreens.booking,
    label: "Screenshot - Kết nối lịch khám",
  },
  {
    number: "03",
    title: "Dẫn đường trong bệnh viện",
    description:
      "Người bệnh check-in bằng mã QR dùng một lần và nhận lộ trình được tối ưu theo độ đông đúc realtime của từng phòng khám thay vì đi theo một tuyến cố định.",
    image: healthcareAssets.solutionScreens.navigation,
    label: "Screenshot - Dẫn đường trong bệnh viện",
  },
];

const safetyLayers = [
  ["Emergency Guard", "Chạy trước LLM, RAG và đặt lịch để ưu tiên các dấu hiệu cần cấp cứu."],
  ["Model Armor", "Ngăn prompt injection, jailbreak và yêu cầu tiết lộ thông tin hệ thống."],
  ["PII Redaction", "Che số điện thoại, CCCD và thông tin định danh nhạy cảm."],
  ["Clinical validation", "Ngăn nội dung chẩn đoán xác định hoặc hướng dẫn kê đơn."],
  ["Verified citations", "Kiểm soát nguồn y khoa theo domain tin cậy và trạng thái liên kết."],
  ["Human-in-the-loop", "Yêu cầu bệnh nhân xác nhận và lễ tân phê duyệt lịch khám."],
];

export default function HealthcareProjectPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#071D18] text-[17px] leading-[1.6] text-[#F2F8F5] sm:text-lg">
      <header className="border-b border-white/10 bg-[#071D18]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F2F8F5] transition hover:text-[#58E2B0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58E2B0]"
          >
            <span aria-hidden="true">←</span>
            Portfolio
          </Link>

          <nav aria-label="Điều hướng case study" className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-[#B7CDC4] transition hover:text-[#58E2B0]">
                {label}
              </a>
            ))}
          </nav>

          <a
            href="https://github.com/giapthinh123/healthcare"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#58E2B0]/45 px-4 py-2 text-sm font-semibold text-[#F2F8F5] transition hover:border-[#58E2B0] hover:bg-[#58E2B0] hover:text-[#071D18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58E2B0]"
          >
            Source code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#58E2B0]/10 blur-3xl" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />
        </div>

        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#58E2B0]">
              Healthcare AI · Case study
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#F2F8F5] sm:text-6xl lg:text-7xl">
              VMEC
              <span className="block text-[#58E2B0]">Healthcare AI.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-[#B7CDC4]">
              Trợ lý y tế AI đa phương thức hỗ trợ người bệnh từ lúc làm rõ triệu chứng, kết nối lịch khám đến check-in và dẫn đường trong bệnh viện.
            </p>

            <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
              <div className="bg-[#12372E] p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#58E2B0]">Vai trò</dt>
                <dd className="mt-2 text-base font-semibold text-[#F2F8F5]">Lead &amp; Backend &amp; AI Engineer</dd>
              </div>
              <div className="bg-[#12372E] p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#58E2B0]">Thời gian</dt>
                <dd className="mt-2 text-base font-semibold text-[#F2F8F5]">4 tuần</dd>
              </div>
              <div className="bg-[#12372E] p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#58E2B0]">Quy mô</dt>
                <dd className="mt-2 text-base font-semibold text-[#F2F8F5]">4 thành viên</dd>
              </div>
            </dl>
          </div>

          <AssetFrame
            src={healthcareAssets.heroProduct}
            label="Ảnh sản phẩm VMEC Healthcare AI"
            ratio="hero"
            priority
          />
        </div>
      </section>

      <section id="demo" className="border-t border-white/10 bg-[#071D18]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#58E2B0]">Demo sản phẩm</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F2F8F5] sm:text-4xl">Xem hành trình hoạt động.</h2>
            </div>
            <a href={healthcareAssets.slides} target="_blank" rel="noopener noreferrer" className="w-fit text-sm font-semibold text-[#B7CDC4] underline decoration-[#58E2B0]/50 underline-offset-4 transition hover:text-[#58E2B0]">
              Mở slide PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
          <VideoDemo source={healthcareAssets.demoVideo} poster={healthcareAssets.demoPoster} />
        </div>
      </section>

      <section id="contribution" className="bg-[#EEF5F1] text-[#071D18]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176B52]">Đóng góp của tôi</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Ba phần việc cốt lõi.</h2>
          </div>
          <ol className="divide-y divide-[#071D18]/15 border-y border-[#071D18]/15">
            {contributions.map((item, index) => (
              <li key={item} className="grid grid-cols-[auto_1fr] gap-5 py-6">
                <span className="font-mono text-sm font-bold text-[#176B52]">0{index + 1}</span>
                <p className="font-semibold text-[#071D18]">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="problem" className="bg-[#12372E]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#58E2B0]">Bài toán</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F2F8F5] sm:text-4xl">Một hành trình khám còn nhiều điểm đứt gãy.</h2>
          </div>
          <div className="space-y-5 text-[#B7CDC4]">
            <p>Người bệnh khó xác định chuyên khoa khi triệu chứng ban đầu chưa rõ. Việc tìm bác sĩ, kiểm tra lịch và đặt khám qua nhiều bước rời rạc làm tăng thời gian xử lý.</p>
            <p>Lộ trình cố định trong bệnh viện không phản ánh độ đông đúc thực tế, trong khi chatbot thông thường có thể bỏ sót tình huống cấp cứu, thiếu nguồn y khoa hoặc vượt quá phạm vi hỗ trợ.</p>
          </div>
        </div>
      </section>

      <section id="solution" className="bg-[#EEF5F1] text-[#071D18]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176B52]">Giải pháp</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Ba chặng trong một trải nghiệm liên tục.</h2>
            <p className="mt-5 text-[#2F4D43]">VMEC kết nối hội thoại, lịch khám và lộ trình bệnh viện trong cùng một hành trình dành cho người bệnh.</p>
          </div>

          <div className="mt-14 space-y-16 sm:space-y-24">
            {solutions.map((solution, index) => (
              <article key={solution.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <AssetFrame src={solution.image} label={solution.label} ratio="screen" />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="font-mono text-sm font-bold text-[#176B52]">{solution.number}</span>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">{solution.title}</h3>
                  <p className="mt-5 text-[#2F4D43]">{solution.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="bg-[#071D18]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#58E2B0]">Kiến trúc</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F2F8F5] sm:text-4xl">Các sơ đồ kỹ thuật của hệ thống.</h2>
            <p className="mt-5 text-[#B7CDC4]">Các khung dưới đây được chuẩn bị sẵn để bổ sung sơ đồ chính thức, không sử dụng hình mô phỏng hoặc screenshot giả.</p>
          </div>

          <div className="mt-12">
            <AssetFrame src={healthcareAssets.diagrams.system} label="Sơ đồ kiến trúc hệ thống" ratio="diagram" />
          </div>
          <div className="mt-12">
            <AssetFrame src={healthcareAssets.diagrams.chat} label="Luồng chat end-to-end" ratio="diagram" />
          </div>
        </div>
      </section>

      <section id="safety" className="bg-[#12372E]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#58E2B0]">An toàn y tế &amp; bảo mật</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F2F8F5] sm:text-4xl">Kiểm soát được đặt xuyên suốt luồng xử lý.</h2>
            <p className="mt-5 text-[#B7CDC4]">AI hỗ trợ định hướng và hành trình khám, không thay thế chẩn đoán hoặc quyết định điều trị của chuyên gia y tế.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {safetyLayers.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#071D18]/45 p-6">
                <h3 className="font-semibold text-[#F2F8F5]">{title}</h3>
                <p className="mt-3 text-base text-[#B7CDC4]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <footer className="border-t border-white/10 bg-[#071D18]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-8 text-sm text-[#B7CDC4] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>VMEC Healthcare AI · Case study by Thịnh Giáp</p>
          <Link href="/" className="font-semibold text-[#F2F8F5] transition hover:text-[#58E2B0]">Quay lại portfolio</Link>
        </div>
      </footer>
    </main>
  );
}
