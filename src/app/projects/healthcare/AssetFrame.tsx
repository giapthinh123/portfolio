import Image from "next/image";

type AssetFrameProps = {
  src: string | null;
  label: string;
  ratio?: "hero" | "screen" | "diagram";
  priority?: boolean;
};

const ratioClasses = {
  hero: "aspect-[4/3]",
  screen: "aspect-[16/10]",
  diagram: "aspect-video",
};

export default function AssetFrame({
  src,
  label,
  ratio = "screen",
  priority = false,
}: AssetFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] ${ratioClasses[ratio]}`}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <span
            aria-hidden="true"
            className="block h-10 w-10 rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)]"
          />
          <span className="text-sm font-semibold tracking-wide text-[var(--muted)]">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
