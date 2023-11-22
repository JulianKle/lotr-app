import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function fellowshipRing() {
  const movie = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <h2>All Volumes</h2>
      {movie.books.map((book) => {
        return (
          <ul key={book.title}>
            <li>{book.ordinal}</li>
            <li>{book.title}</li>
          </ul>
        );
      })}
      <Image
        src="/public/images/the-two-towers.png"
        height={230}
        width={140}
        alt="The two Towers"
      />
      <nav>
        <Link href="/volumes">← All Volumes</Link>
      </nav>
    </>
  );
}
