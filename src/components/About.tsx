export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-card/40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          About
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            Mình là <strong className="font-semibold text-foreground">Thịnh Giáp</strong>{" "}
            (<span className="font-mono text-sm">giapthinh123</span>) — developer thiên về
            AI/Computer Vision và full-stack, thích biến mô hình thành sản phẩm có thể
            dùng được.
          </p>
          <p>
            Các dự án gần đây trải dài từ agentic healthcare stack (LangGraph, FastAPI,
            Next.js, Expo), hệ thống nhận dạng biển số (YOLO + EasyOCR + PyQt5), phân
            loại da liễu trên HAM10000 (YOLO + CNN + Flask), đến e-commerce Java Servlet/
            JSP tích hợp VNPay.
          </p>
          <p>
            Mục tiêu khi ứng tuyển: đóng góp vào đội sản phẩm AI/CV hoặc full-stack,
            học hỏi nhanh và giao tiếp rõ ràng qua code và tài liệu.
          </p>
        </div>
      </div>
    </section>
  );
}
