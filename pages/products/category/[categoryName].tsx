import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Product } from '../../../models/interfaces'
import Image from 'next/future/image'
import AppRating from '../../../components/ui/AppRating'

interface ProductsByCategoryProps {
    products: Product[]
}

export const getStaticPaths : GetStaticPaths = async (context) => {
    var res = await fetch('https://dummyjson.com/products/categories')
    var categorieNames = await res.json()

    return {
        paths: categorieNames.map((x:string) => ({
            params: {
                categoryName: x
            }
        })),
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const categoryName = context.params!.categoryName

    const resp = await fetch(`https://dummyjson.com/products/category/${categoryName}`)
    const data = await resp.json()

    return {
        props: {
            products: data!.products as Product[]
        },
        revalidate: 60 * 60
    }
}


const ProductsByCategory : NextPage<ProductsByCategoryProps> = (props) => {

    const [products, setProducts] = useState<Product[]>(props.products)
     
    useEffect(() => {
        setProducts(props.products)
    }, [props.products])

    return (
        <div>
            <div className='flex flex-wrap gap-4 justify-center'>
                {
                    products.map((x) => (
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

export default ProductsByCategory