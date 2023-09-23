"use client"

import Image from "next/image";
import Logo from '../../resources/logo.svg';
import Menu from '../../resources/menu.svg';
import { Amaranth } from 'next/font/google';
import ReactModal from "react-modal";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import { signOutUser } from "@/utilities/firebase.utils";

const font = Amaranth({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function Navbar() {

  useEffect(() => {
    if (document) {
      const newAppElement = document.getElementById('app') || undefined;
    return setAppElement(newAppElement);
    }
  }, []) 

  const [isOpen, setIsOpen] = useState(false);
  const [appElement, setAppElement] = useState(undefined)
  const { currentUser } = useContext(UserContext);

  const openModal = () => {
    setIsOpen((prev) => !prev);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div
      id="navbar"
      className={`${font.className} h-full max-h-[100px] bg-yellow-500/90 mb-3 md:p-2 flex items-start justify-between w-full sticky top-0 z-50`}
    >
      <a
        href="/"
        className="flex flex-col-reverse md:flex-row items-start md:items-end p-1 w-3/4 md:w-1/4  text-slate-950 text-xl overline"
      >
        <Image src={Logo} alt="logo" width={80} height={80} />
        <span className="flex">
          Everybody 
          <span className="text-rose-700"> &#9825; </span>&apos;s
          Pizza
        </span>
      </a>
      {/* for under 768px/mobile */}
      <div className="md:hidden text-slate-900 w-1/3 h-full flex items-center justify-end mr-2">
        <button
          onClick={openModal}
          className="px-2 flex items-center justify-center text-2xl"
        >
          {isOpen === true ? (
            'Close'
          ) : (
            <Image src={Menu} alt="menu-button" className="w-8 " />
          )}
        </button>
      </div>
      {/* for 768px+ */}
      <div className="hidden md:flex items-end justify-evenly w-1/3 h-full text-xl text-slate-950">
        <a className="hover:underline" href="/about">
          <h3>Shop</h3>
        </a>
        <a className="hover:underline" href="/shop">
          <h3>Contact</h3>
        </a>
        {currentUser ?
          <button onClick={signOutUser}>Sign Out</button>
          :
          <a className="hover:underline" href="/auth">
          <h3>Sign in</h3>
        </a>}
      </div>

      <ReactModal
        appElement={appElement}
        isOpen={isOpen}
        contentLabel={'site navigation menu'}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '275px',
            height: '50vh',
            backgroundColor: 'rgb(100 100 45 / 0.95)',
            border: '3px solid white',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 'auto',
          },
          overlay: {
            backgroundImage:
              'linear-gradient(45deg, transparent 0% 48%, #49340f 48% 52%, transparent 52% 100%), linear-gradient(-45deg, transparent 0% 48%, #065f46 48% 52%, transparent 52% 100%)',
            backgroundSize: '4% 4%, 3% 3%',
            backgroundRepeat: 'repeat',
          },
        }}
      >
        <div
          className={`${font.className} flex flex-col items-center justify-evenly w-full h-full text-4xl text-black`}
        >
          <a
            className="w-full from-slate-300/50 via-slate-300/90 to-transparent bg-gradient-to-l border-t-thin border-b-thin border-r-thin border-amber-300 px-4 py-2 rounded-r-md"
            href="/about"
          >
            <h3 className="text-center">Shop</h3>
          </a>
          <a
            className="w-full from-slate-300/50 via-slate-300/90 to-transparent bg-gradient-to-r border-t-thin border-b-thin border-l-thin border-amber-300 px-4 py-2 rounded-l-md"
            href="/shop"
          >
            <h3 className="text-center">Contact</h3>
          </a>
          {currentUser ?
            <button className="w-full from-slate-300/50 via-slate-300/90 to-transparent bg-gradient-to-l border-t-thin border-b-thin border-r-thin border-amber-300 px-4 py-2 rounded-r-md" onClick={signOutUser}>Sign Out</button>
            :
            <a
            className="w-full from-slate-300/50 via-slate-300/90 to-transparent bg-gradient-to-l border-t-thin border-b-thin border-r-thin border-amber-300 px-4 py-2 rounded-r-md"
            href="/auth"
          >
            <h3 className="text-center">Sign in</h3>
          </a>}
        </div>
        <button
          onClick={closeModal}
          className={`${font.className} tracking-wide text-slate-200 bg-slate-950 text-xl w-full p-2 rounded-md border-thin border-black`}
        >
          Close
        </button>
      </ReactModal>
    </div>
  );
}
