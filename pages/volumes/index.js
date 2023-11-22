import { introduction } from "../../lib/data";
import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function handleSubmit() {
    const newDirectory = getRandomElement(volumes);
    console.log(newDirectory);
    router.push(`/volumes/${newDirectory.slug}`);
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleSubmit}>Random Detail Page</button>
    </>
  );
}
