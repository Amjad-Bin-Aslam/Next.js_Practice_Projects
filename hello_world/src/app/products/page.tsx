import Link from "next/link";

export default function ProductList() {
    return (
        <>
            <h1>Products List</h1>
            <Link href={"/products/1"}>
                <h2>Product 1</h2>
            </Link>
            <Link href={"/products/2"}>
                <h2>Product 2</h2>
            </Link>
            <Link href={"/products/3"}>
                <h2>Product 3</h2>
            </Link>
            <Link href="/">Home</Link>
        </>
    )
}