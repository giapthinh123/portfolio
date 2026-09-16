export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Mở cho cơ hội AI/CV và full-stack. Liên hệ qua GitHub hoặc các kênh bên dưới
          (placeholder — sẽ cập nhật sau).
        </p>
        <ul className="mt-8 space-y-4 text-base">
          <li className="flex flex-wrap items-center gap-2">
            <span className="w-24 text-sm font-medium text-muted">GitHub</span>
            <a
              href="https://github.com/giapthinh123"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              github.com/giapthinh123
            </a>
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <span className="w-24 text-sm font-medium text-muted">Email</span>
            <span className="text-foreground">your.email@example.com</span>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-muted">
              placeholder
            </span>
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <span className="w-24 text-sm font-medium text-muted">LinkedIn</span>
            <span className="text-foreground">linkedin.com/in/your-profile</span>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-muted">
              placeholder
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
