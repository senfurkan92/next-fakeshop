import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import AppRating from '../../components/ui/AppRating'
import { Product } from '../../models/interfaces'
import Image from 'next/future/image'

interface ProductsByFilterProps {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}

export const getStaticPaths : GetStaticPaths = async (context) => {
    return {
        paths: [
            {
                params: {
                    filter: ['contain', 'min', 'max']
                }
            }
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps : GetStaticProps = async (context) => {

    var [contain,min,max] = context.params!.filter as string[]
    var resp = await fetch(`https://dummyjson.com/products/search?q=${contain}`)
    var data: ProductsByFilterProps = await resp.json()
    data.products = data.products.filter(x => x.price >= Number(min) && x.price <= Number(max))

    return {
        props: {
            ...data
        },
        revalidate: 60*60
    }    
}

const ProductsByFilter : NextPage<ProductsByFilterProps> = ({products}) => {

    var [list, setList] = useState<Product[]>(products)

    useEffect(() => {
        setList(products)
    }, [products])


    return (
        <div>
            <div className='flex flex-wrap gap-4 justify-center'>
                {
                    list.map((x) => (
                        <div className="card w-96 glass p-4" key={x.id}>
                            <div className='bg-error text-error-content rounded-md px-2 py-1 absolute right-4 rotate-12'>
                                -%{x.discountPercentage.toFixed(0)}
                            </div>
                            <figure>
                                <div className=' w-40 h-40'>
                                    <Image 
                                        className='w-full h-full object-contain' 
                                        src={x.thumbnail} 
                                        alt={x.title}
                                        width={370}
                                        height={370}
                                    />
                                </div>
                            </figure>
                            <div className="card-body">
                                <p className='flex justify-between'>
                                    <span>{x.brand}</span>
                                </p>
                                <p className="card-title line-clamp-1">
                                    {x.title}
                                </p>
                                <p className='line-clamp-2'>
                                    {x.description}
                                </p>
                                <p className='flex gap-1 text-warning-content bg-warning w-[max-content] py-1 px-2 rounded-sm'>
                                    <AppRating rating={x.rating}></AppRating>
                                </p>
                                <p className='text-2xl text-success-content font-bold italic'>
                                    ${x.price.toFixed(2)}
                                </p>
                                <p className='flex justify-end'>
                                    <span className='capitalize bg-info text-info-content text-sm italic rounded-md py-1 px-2'>
                                        {x.category}
                                    </span>
                                </p>
                                <div className="card-actions justify-end">
                                    <Link href={`/products/${x.id}`}>
                                        <div className="btn btn-primary">
                                            Learn now!
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
} 

export default ProductsByFilter