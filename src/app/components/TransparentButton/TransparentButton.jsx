import Link from "next/link";

export function TransparentButton({ content, link }) {
  return (
    <button className="px-full py-2 mt-full rounded-xl bg-transparent border-moanackOrange border-solid border font-bold hover:bg-moanackOrange transition-all ease-in-out hover:scale-105">
      <Link href={link}>{content}</Link>
    </button>
  );
}
