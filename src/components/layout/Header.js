import Link from "next/link";
export default function Header() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between">
                    <Link href="" className="text-primary font-semibold text-2xl">ST Pizza</Link>

                    <nav className="flex gap-8 text-gray-500 items-center">
                        <Link href={''}>Home</Link>
                        <Link href={''}>Menu</Link>
                        <Link href={''}>About</Link>
                        <Link href={''}>Contact</Link>

                    </nav>

                    <nav className="flex items-center gap-4">
                        <Link href={''} className="text-gray-500" >Register</Link>
                        <Link href={''} className="bg-primary text-white px-6 py-2 rounded-full">Login</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}