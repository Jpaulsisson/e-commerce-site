import Image from 'next/image'
import { Amatic_SC } from 'next/font/google'

const font = Amatic_SC({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function Home() {

  const categories = [
    {
      title: 'Hats',
      id: 1,
      imageURL: 'https://source.unsplash.com/random/?hat',
      cols: 'col-span-2'
    },
    {
      title: 'Jackets',
      id: 2,
      imageURL: 'https://source.unsplash.com/random/?jacket',
      cols: 'col-span-2'
    },
    {
      title: 'Shoes',
      id: 3,
      imageURL: 'https://source.unsplash.com/random/?shoe',
      cols: 'col-span-2'
    },
    {
      title: 'Womens',
      id: 4,
      imageURL: 'https://source.unsplash.com/random/?woman',
      cols: 'col-span-3'
    },
    {
      title: 'Mens',
      id: 5,
      imageURL: 'https://source.unsplash.com/random/?man',
      cols: 'col-span-3'
    },
  ]


  return (
    <main className={font.className + ` font-thin categories-container grid grid-cols-2 md:grid-cols-6 grid-rows-2 md:gap-4`}>
      {categories.map(({ title, id, imageURL, cols }) => {
        return (
          <div key={id} className={`category-container ${cols} border-thin border-black min-h-[50vh]`}> 
            <div className="background w-full h-full bg-center bg-cover flex flex-col items-start justify-end" style={{ backgroundImage: `url(${imageURL})`}}>
              <div className='category opacity-80 bg-amber-700/90 p-8 md:p-16 border-thin border-black'>
                <h2 className='text-5xl text-center text-slate-200 mb-2 tracking-wider '>{title}</h2>
                <p className='text-xl text-center text-slate-200 p-2'>Shop Now</p>
              </div>
            </div>
          </div>
        )
      })}
    </main>
  )
}
