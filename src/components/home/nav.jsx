import Link from "next/link"

export const Nav = () => {
    return (
      <nav className="flex justify-center mb-8">
        <div className="flex gap-4 text-[#008F8C] font-medium">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About me
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            References
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Education
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
      </nav>
    )
}