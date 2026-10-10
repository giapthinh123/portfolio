"use client";

import { useRef, useState } from "react";

type VideoDemoProps = {
  source: string | null;
  poster: string | null;
};

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "--:--";

  const rounded = Math.floor(seconds);
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const remainingSeconds = rounded % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

export default function VideoDemo({ source, poster }: VideoDemoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState("--:--");
  const [isPlaying, setIsPlaying] = useState(false);

  if (!source) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-[1.5rem] border border-[#255649] bg-[#12372E] p-6 text-center text-[#B7CDC4]">
        Video demo sẽ được thêm tại đây
      </div>
    );
  }

  const playVideo = () => {
    void videoRef.current?.play();
  };

  return (
    <div className="group relative aspect-video overflow-hidden rounded-[1.5rem] border border-[#255649] bg-black shadow-2xl shadow-black/25">
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        controls
        preload="metadata"
        poster={poster ?? undefined}
        onLoadedMetadata={(event) => setDuration(formatDuration(event.currentTarget.duration))}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={source} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ phát video.
      </video>

      {!isPlaying ? (
        <button
          type="button"
          onClick={playVideo}
          aria-label="Phát video demo VMEC Healthcare AI"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#58E2B0] text-[#071D18] shadow-xl transition hover:scale-105 hover:bg-[#75EABC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2F8F5]"
        >
          <span className="ml-1 text-3xl" aria-hidden="true">▶</span>
        </button>
      ) : null}

      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-[#071D18]/85 px-3 py-1 text-xs font-semibold text-[#F2F8F5] backdrop-blur">
        {duration}
      </span>
    </div>
  );
}
