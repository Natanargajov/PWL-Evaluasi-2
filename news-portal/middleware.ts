"use client";
import { useSearchParams } from "next/navigation";

export default function DetailPage() {
  const params = useSearchParams();
  const url = params.get("url");

  return <iframe src={url || ""} className="w-full h-screen" />;
}
