

import React from 'react'
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


export default function Auth() {

  return (
    <div className='flex flex-col md:flex-row items-center justify-evenly text-3xl text-center text-white'>
      <div className="w-full">
        <h2>Already a member?</h2>
        <SignInForm />
      </div>
      <div className='w-full'>
        <h2>New To E<span className="text-rose-700"> &#9825; </span>P?</h2>
        <SignUpForm />
      </div>
    </div>
  );
}
