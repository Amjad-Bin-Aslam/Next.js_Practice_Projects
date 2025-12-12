import Link from "next/link"

export default async function Home() {

    return (
        <>
            <h1>Welome Home</h1>
            <Link href="/blog">Blog</Link>
            <br />
            <Link href={"/products"}> Products </Link>
            <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
            <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
        </>
    )
}