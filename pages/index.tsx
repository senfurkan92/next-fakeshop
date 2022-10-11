import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/future/image'

interface HomeProps {
  categories: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {

  var res = await fetch('https://dummyjson.com/products/categories')
  var data = await res.json()

  return {
    props: {
      categories: data
    },
    revalidate: 60 * 60
  }
}

const Home : NextPage<HomeProps> = (props) => {
  return (
    <div>
      <div className='flex justify-center items-center flex-wrap gap-4'>
        {props.categories.map((x,i) => (
          <div className="card w-96 h-36 bg-base-100 shadow-xl image-full" key={i}>
            <figure>
              <Image src={`https://source.unsplash.com/random/384x144/?${x}`} alt={x} width={384} height={144} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-warning uppercase">{x}</h2>
              <div className="card-actions justify-end">     
                  <Link href={`/products/category/${x}`}>
                    <button className="btn btn-primary">Inspect</button>
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home