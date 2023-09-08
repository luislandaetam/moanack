import Link from "next/link";

export function TransparentButton({ content, link }) {
  return (
    <button className="px-full py-2 mt-full rounded-xl bg-transparent border-moanackOrange border-solid border font-bold">
      <Link href={link}>{content}</Link>
    </button>
  );
}
