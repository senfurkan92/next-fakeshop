interface AppMainProps {
    children: JSX.Element | JSX.Element[]
}

const AppMain = (props: AppMainProps) : JSX.Element => {
    return (
        <main className="py-8">
            <div className="container mx-auto">
                {props.children}
            </div>
        </main>
    )
}

export default AppMain