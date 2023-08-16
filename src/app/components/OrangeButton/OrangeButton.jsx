import Link from "next/link";

export function OrangeButton({ content, link }) {
  return (
    <button className="px-full py-2 mt-full rounded-xl bg-moanackOrange font-bold">
      <Link href={link}>{content}</Link>
    </button>
  );
}
