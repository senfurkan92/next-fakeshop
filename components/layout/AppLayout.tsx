import Head from "next/head"
import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
import AppMain from "./AppMain"

interface AppLayoutProps {
    children: JSX.Element | JSX.Element[]
}

const AppLayout = (props :AppLayoutProps) : JSX.Element => {
    return (
        <>
            <Head>
                <title>Demo-Next</title>
            </Head>
            <div className="min-h-[100vh] grid grid-rows-[max-content_auto_max-content]" data-theme="winter">
                <AppHeader></AppHeader>
                <AppMain>
                    {props.children}
                </AppMain>
                <AppFooter></AppFooter>
            </div>
        </>
    )
}

export default AppLayout