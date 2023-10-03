import Link from "next/link";

export function WhiteButton({ content, link }) {
  return (
    <button className="px-full py-2 mt-full rounded-xl bg-white font-bold text-[#212021] hover:bg-moanackGrey hover:text-white transition-all ease-in-out hover:scale-105">
      <Link href={link}>{content}</Link>
    </button>
  );
}
