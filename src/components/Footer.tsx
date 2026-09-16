export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Thịnh Giáp · giapthinh123</p>
        <p>
          Source:{" "}
          <a
            href="https://github.com/giapthinh123/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            giapthinh123/portfolio
          </a>
        </p>
      </div>
    </footer>
  );
}
