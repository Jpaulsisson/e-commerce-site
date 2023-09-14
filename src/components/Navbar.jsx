"use client"

import Image from "next/image";
import Logo from '../resources/logo.svg';
import { Amaranth } from 'next/font/google';
import ReactModal from "react-modal";
// ReactModal.setAppElement('#navbar')
import { useState } from "react";



const font = Amaranth({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div id="navbar" className={`${font.className} h-full max-h-[100px] border-b-2 border-amber-700/90 bg-emerald-900/90 mb-2 md:p-2 flex items-start justify-between w-full`}>
      <a href="/" className="flex flex-col-reverse md:flex-row items-start md:items-end p-1 w-1/2 text-slate-200 text-xl overline">
        <Image src={Logo} alt='logo' width={80} height={80} />
        <span className="flex">          
          Everybody <span className="text-rose-600">  &#9825; </span>&apos;s Pizza
        </span>
      </a>
      {/* for under 768px/mobile */}
      <div className="md:hidden text-slate-200 w-1/3 h-full flex items-center justify-end mr-2">
        <button onClick={openModal} className="px-2 text-2xl border-thin border-black rounded-md bg-emerald-900/90">
          {isOpen === true ? <span>X</span> : <span>&#9776;</span>}
          </button>
      </div>
      {/* for 768px+ */}
      <div className="hidden md:flex items-end justify-evenly w-1/3 h-full text-xl text-slate-200">
        <a className="" href="/about">
          <h3>Shop</h3>
        </a>
        <a className="" href="/shop">
          <h3>Contact</h3>
        </a>
        <a href="/sign-in">
          <h3>Sign in</h3>
        </a>
      </div>

      <ReactModal
        isOpen={isOpen}
        contentLabel={'site navigation menu'}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '275px',
            backgroundColor: 'rgb(180 83 9 / 0.7)',
            border: '3px solid white',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          overlay: {
            backgroundImage: 'linear-gradient(45deg, transparent 0% 48%, #065f46 48% 52%, transparent 52% 100%',
            backgroundSize: '10% 10%',
            backgroundRepeat: 'repeat',            
          }
        }}
      >
        <div className={`${font.className} flex flex-col items-start justify-evenly w-full h-full text-5xl text-slate-200`}>
        <a className=" from-emerald-950 via-emerald-800 to-transparent bg-gradient-to-l border-t-thin border-b-thin border-r-thin border-white px-4 py-2 rounded-r-md" href="/about">
          <h3>Shop</h3>
        </a>
        <a className="self-end from-emerald-950  via-emerald-800  to-transparent bg-gradient-to-r border-t-thin border-b-thin border-l-thin border-white px-4 py-2 rounded-l-md" href="/shop">
          <h3>Contact</h3>
        </a>
        <a className="from-emerald-950  via-emerald-800  to-transparent bg-gradient-to-l border-t-thin border-b-thin border-r-thin border-white px-4 py-2 rounded-r-md" href="/sign-in">
          <h3>Sign in</h3>
        </a>
      </div>
      <button onClick={closeModal} className='bg-slate-100/70 text-slate-950 text-xl w-full p-2 rounded-md border-thin border-black'>Close</button>
      </ReactModal>
    </div>
  )
}
