import Link from "next/link";

export default async function Sample() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/sample/list">sample/list</Link>
        </li>
        <li>
          <Link href="/sample/show">sample/list/show</Link>
        </li>
      </ul>
    </div>
  );
}
