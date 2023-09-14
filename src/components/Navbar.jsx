import Image from "next/image";
import Logo from '../resources/logo.svg';
import { Amaranth } from 'next/font/google'

const font = Amaranth({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function Navbar() {
  return (
    <div className={`${font.className} h-full max-h-[100px] border-b-2 border-amber-700/90 bg-emerald-900/90 mb-2 md:p-2 flex items-start justify-between w-full`}>
      <a href="/" className="flex flex-col-reverse md:flex-row items-start md:items-end p-1 w-1/2 text-slate-200 text-xl overline">
        <Image src={Logo} alt='logo' width={80} height={80} />
        <span className="flex">          
          Everybody <span className="text-rose-600">  &#9825; </span>&apos;s Pizza
        </span>
      </a>
      {/* hidden on medium screens+ */}
      <div className="md:hidden text-slate-200 w-1/3 h-full flex items-center justify-end mr-2">
        <button className="p-1 text-2xl border-thin border-black rounded-md bg-emerald-900/90">&#9776;</button>
      </div>
      {/* hidden on mobile */}
      <div className="hidden md:flex items-end justify-evenly w-1/3 h-full text-xl text-slate-200">
        <a className="" href="/about">
          <h3>About</h3>
        </a>
        <a className="" href="/shop">
          <h3>Shop</h3>
        </a>
        <a href="/sign-in">
          <h3>Sign in</h3>
        </a>
      </div>
      

    </div>
  )
}
