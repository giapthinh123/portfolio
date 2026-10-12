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
      className={`relative overflow-hidden rounded-[1.5rem] border border-[#34483C] bg-[#11221C] ${ratioClasses[ratio]}`}
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
            className="block h-10 w-10 rounded-full border border-[#9CE8BD]/55 bg-[#9CE8BD]/10"
          />
          <span className="text-sm font-semibold tracking-wide text-[#A4B5AC]">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
