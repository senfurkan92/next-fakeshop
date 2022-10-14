import Link from "next/link"

interface AppLinkProps {
    href: string,
    children: JSX.Element | JSX.Element[]
}

const AppLink = ({href, children}: AppLinkProps) : JSX.Element => {
    return (
        <div className="cursor-pointer">
            <Link href={href}>{children}</Link>
        </div>
    )
}

export default AppLink