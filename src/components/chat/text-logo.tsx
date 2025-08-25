'use client";'
import Link from "next/link";
export default function TextLogo() {
    return <h4 className="sm:text-5xl text-4xl :text-sm font-bold tracking-tight mb-6 mt-4 text-left">
        <Link href={'/'}> doubt<span className="text-indigo-600">Zero</span></Link>
    </h4>
}