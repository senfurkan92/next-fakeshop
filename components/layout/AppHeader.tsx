import Image from "next/future/image"
import AppLink from "../ui/AppLink"
import AppPerViewCarousel from "../carousel/AppPerViewCarousel"
import { useEffect, useState } from "react"
import AppFilterForm from "../ui/AppFilterForm"

const AppHeader = () : JSX.Element => {
    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <header className="bg-base-300 border-b-2 py-4 border-primary shadow-lg">
            <div className="container mx-auto">
                <div className="grid grid-cols-[max-content_auto] justify-start items-center gap-8">
                    <AppLink href={'/'}>
                        <div className="w-16 h-16">
                            <Image src={'/logo.png'} alt="" height={64} width={64} className="h-full w-full object-contain"/>
                        </div>
                    </AppLink>
                    <div className="flex items-center gap-4 overflow-x-auto">
                        <AppPerViewCarousel links={categories.map((x,i) => (
                            <AppLink href={`/products/category/${x}`} key={i+1000}>
                                <div className="uppercase">{x}</div>
                            </AppLink>
                        ))} />
                    </div>
                </div>
                <div className="divider">filter</div>
                <div className="flex items-center justify-center gap-4">
                    <AppFilterForm/>
                </div>
            </div>
        </header>
    )
}

export default AppHeader