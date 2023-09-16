'use client';

import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithFacebookPopup,
  signInWithGitHubPopup,
} from '../../utilities/firebase.utils.js';
import { Quicksand } from 'next/font/google';
import GoogleIcon from '../../resources/google.svg';
import GitHubIcon from '../../resources/github.svg';
import Image from 'next/image.js';

const font = Quicksand({
  weight: '300',
  subsets: ['latin'],
});

export default function signIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };

  const logFacebookUser = async () => {
    const response = await signInWithFacebookPopup();
    console.log(response);
    // createUserDocFromAuth(user);
  };
  const logGitHubUser = async () => {
    const response = await signInWithGitHubPopup();
    console.log(response);
    createUserDocFromAuth(response.user);
  };

  return (
    <div
      className={`${font.className} w-1/3 mx-auto flex flex-col items-center justify-center gap-2`}
    >
      <h1 className="">Sign in page!</h1>
      <button
        onClick={logGoogleUser}
        className="h-20 w-3/4 border-4 border-r-yellow-500 border-t-red-500 border-l-green-500 border-b-blue-500 p-2 rounded-md bg-stone-100 text-slate-900 flex gap-2 items-center justify-center"
      >
        Sign in with Google
        <Image src={GoogleIcon} alt="google logo" width={40} height={40} />
      </button>
      <button
        onClick={logFacebookUser}
        className="h-20 w-3/4 border-2 border-sky-500 p-2 rounded-md bg-blue-600 text-slate-200"
      >
        Sign in with Facebook
      </button>
      <button
        onClick={logGitHubUser}
        className="h-20 w-3/4 border-2 border-slate-300 p-2 rounded-md bg-black text-slate-100 flex gap-2 items-center justify-center"
      >
        Sign in with GitHub
        <Image src={GitHubIcon} alt="GitHub logo" width={40} height={40} />
      </button>
    </div>
  );
}
