import { notFound } from "next/navigation";
import { TrickPlayer } from "@/components/TrickPlayer";
import { getAllTricks, getTrickById } from "@/lib/trick-engine";

export function generateStaticParams() {
  return getAllTricks().map((trick) => ({ slug: trick.id }));
}

export default async function TrickPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ surprise?: string }>;
}) {
  const { slug } = await params;
  const { surprise } = await searchParams;
  const trick = getTrickById(slug);

  if (!trick) {
    notFound();
  }

  return (
    <TrickPlayer trick={trick} surprise={surprise === "1"} />
  );
}
