export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
        Portfolio · Job seeking
      </p>
      <div className="max-w-3xl space-y-5">
        <h1
          id="hero-heading"
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          Thịnh Giáp
        </h1>
        <p className="text-xl text-muted sm:text-2xl">
          AI / Computer Vision / Full-stack Developer
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Xây dựng hệ thống end-to-end từ model CV/AI đến API và giao diện web/mobile —
          tập trung vào sản phẩm thực tế, code rõ ràng và trải nghiệm người dùng tốt.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Xem Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Contact
        </a>
        <a
          href="https://github.com/giapthinh123"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-transparent px-5 py-2.5 text-sm font-semibold text-muted underline-offset-4 transition hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          GitHub →
        </a>
      </div>
    </section>
  );
}
