import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <form action="/form" method="post">
        <input type="submit" value="move" />
      </form>
      <Link href="/a">move to a link</Link>
    </div>
  );
}