"use client";

import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithFacebookPopup,
  signInWithGitHubPopup,
} from '../../utilities/firebase.utils.js';
import GoogleIcon from '../../resources/google.svg';
import GitHubIcon from '../../resources/github.svg';
import Image from 'next/image.js';


export default function signInOAuth() {

  const googleLogin = async () => {
    await signInWithGooglePopup();
  };

  const logFacebookUser = () => {
    const response = 'this is a fake response. i love you.'
    setCurrentUser('Facebook User');
    console.log(response);
  };
  const logGitHubUser = () => {
    const response = 'my blood runs cold.. my memory has just been sold.. angel is the centerfold.. nah nah nah-nah nah nah, nah nah nah nah-nah nah nah nah...';
    setCurrentUser('GitHub User');
    console.log(response);
  };

  return (
    <div className={`w-full mx-auto flex flex-col items-center justify-center gap-2 text-base`}>
      <button
        onClick={googleLogin}
        className="h-12 w-3/4 md:w-1/2 border-2 border-l-yellow-500 border-t-red-500 border-b-green-500 border-r-blue-500 p-2 rounded-md bg-stone-100 text-slate-900 flex gap-2 items-center justify-center">
        Sign in with Google
        <Image src={GoogleIcon} alt="google logo" width={40} height={40} />
      </button>

      {/* creating dummy buttons here to show what it would look like if finished but not going through the whole process of setting up an app with Google, Facebook, AND GitHub for a fake site. I have completed this process on my personal portfolio site and you only get so many free apps on these platforms before they start charging. */}

      <button
        onClick={logFacebookUser}
        className="h-12 w-3/4 md:w-1/2 border-2 border-sky-500 p-2 rounded-md bg-blue-600 text-slate-200"
      >
        Sign in with Facebook <span className='text-xs'>*fake*</span>
      </button>
      <button
        onClick={logGitHubUser}
        className="h-12 w-3/4 md:w-1/2 border-2 border-slate-300 p-2 rounded-md bg-stone-800 text-slate-100 flex gap-2 items-center justify-center"
      >
        Sign in with GitHub 
        <Image src={GitHubIcon} alt="GitHub logo" width={40} height={40} /><span className='text-xs'>*fake*</span>
      </button>
      {/* end of dummy buttons. to be clear, the google one works, the other two are fake. Love you. Have a good day/night. */}
    </div>
  );
}
