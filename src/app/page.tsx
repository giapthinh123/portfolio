import type { Metadata } from "next";
import AIStudioHome from "@/components/AIStudioHome";
import type { SiteLocale } from "@/components/LanguageSwitch";

export async function generateMetadata({
  searchParams,
}: PageProps<"/">): Promise<Metadata> {
  const params = await searchParams;
  if (params.lang === "vi") {
    return {
      title: "Thịnh Giáp | Kỹ sư AI & Backend",
      description:
        "Hồ sơ của Thịnh Giáp về các hệ thống AI, backend, RAG, thị giác máy tính và kỹ thuật sản phẩm.",
      openGraph: {
        title: "Thịnh Giáp | Kỹ sư AI & Backend",
        description: "Xây dựng hệ thống hữu ích xoay quanh AI: truy xuất, mô hình, API và giao diện sản phẩm.",
        type: "website",
      },
    };
  }
  return {
    title: "Thịnh Giáp | AI Systems Lab",
    description:
      "AI and backend engineering portfolio of Giap Hoang Thinh — RAG, computer vision, research systems, and practical product engineering.",
    openGraph: {
      title: "Thịnh Giáp | AI Systems Lab",
      description: "Building useful systems around AI: retrieval, models, APIs, and product interfaces.",
      type: "website",
    },
  };
}

export default async function Home({ searchParams }: PageProps<"/">) {
  const params = await searchParams;
  const locale: SiteLocale = params.lang === "vi" ? "vi" : "en";
  return <AIStudioHome locale={locale} />;
}
