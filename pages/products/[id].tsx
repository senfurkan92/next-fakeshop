import {NextPage, GetStaticProps, GetStaticPaths} from 'next'
import { Product } from '../../models/interfaces'
import AppCardCarousel from '../../components/carousel/AppCardCarousel'
import Image from 'next/future/image'
import AppRating from '../../components/ui/AppRating'
import Link from 'next/link'

interface ProductProp {
    item: Product
}

export const getStaticPaths : GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {id: '1'}
            }
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps : GetStaticProps = async (context) => {

    const resp = await fetch(`https://dummyjson.com/products/${context.params!.id}`)
    const data = await resp.json()

    return {
        props: {
            item: data as Product
        },
        revalidate: 60*60
    }
}

const GetImageContainer = ({src}: {src: string}) : JSX.Element => {
    return (
        <div className=' w-60 h-60'>
            <Image src={src} alt="" height={240} width={240} className='object-contain w-full h-full'/>
        </div>
    )
}  

const ProductDetail : NextPage<ProductProp> = ({item}) => {

    var imagesElements = item.images.map((x) => <GetImageContainer src={x} key={x+1000}></GetImageContainer>)

    return (
        <div className='grid grid-cols-3'>
            <div className='md:col-span-1 col-span-3'>
                <AppCardCarousel images={imagesElements}></AppCardCarousel>
            </div>
            <div className='md:col-span-2 col-span-3'>
                <p className='text-3xl uppercase text-primary font-bold italic underline underline-offset-8 mb-2'>
                    - {item.title} -
                </p>
                <p className='flex items-center gap-4 mb-8'>
                    <span className='text-xs capitalize px-4 py-1 bg-warning text-warning-content rounded-lg'>
                        {item.brand}
                    </span>
                    <Link href={`/products/category/${item.category}`}>
                        <span className='text-xs capitalize px-4 py-1 bg-info text-info-content rounded-lg cursor-pointer'>
                            {item.category}
                        </span>
                    </Link>
                </p>
                <p className='mb-4'>
                    {item.description}
                </p>
                <p className='flex justify-start items-center gap-4 mb-4'>
                    <span className='mb-4 text-3xl font-semibold text-secondary'>
                        ${item.price.toFixed(2)} 
                    </span>
                    <span className='mb-4 text-xl font-semibold line-through text-error rotate-6'>
                        &ensp;${(item.price/(1-item.discountPercentage/100)).toFixed(2)}&ensp; 
                    </span>
                </p>
                <p className='flex gap-1 text-xl text-warning-content bg-warning w-[max-content] py-1 px-2 rounded-lg'>
                    <AppRating rating={item.rating}/>
                </p>
            </div>
        </div>
    )
}

export default ProductDetail 
