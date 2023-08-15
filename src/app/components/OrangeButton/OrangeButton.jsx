import Link from "next/link";

export function OrangeButton({ content, link }) {
  return (
    <button>
      <Link href={link}>{content}</Link>
    </button>
  );
}
