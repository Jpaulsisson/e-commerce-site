'use client';

import React from 'react';
import { signInAuthUserWithEmailAndPassword } from '@/utilities/firebase.utils';
import { useState } from 'react';
import SignInOAuth from '../../components/sign-in-oauth/sign-in-oauth.component';
import FormInput from '../../components/form-input/form-input.component';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleFormChange = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      console.log(response);
    } catch (err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password');
          break;
        case 'auth/user-not-found':
          alert('No user with this email has an account');
          break;
          default:
            console.error(err)
      }
    }
  };


  return (
    <div className="w-full h-full mt-12 md:h-3/4 md:w-3/4 mx-auto rounded-md p-2 flex flex-col justify-center items-center gap-6">
      <form
        name="sign-in"
        className={`text-stone-300 text-xl bg-lime-950 flex flex-col items-start justify-center gap-2 w-full h-full md:w-1/2 md:h-3/4 p-4 rounded-md`}
        onSubmit={handleFormSubmit}
      >
        <h2 className="self-center text-3xl">Sign in here</h2>
        <FormInput
          label='Email *'
          type='email'
          required
          onChange={handleFormChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password *'
          type='password'
          required
          id='password'
          name='password'
          value={password}
          onChange={handleFormChange}
        />
        <button
          className="self-center border-thin border-slate-500 bg-black py-2 px-6 rounded-md mt-3"
          type="submit"
          htmlFor="sign-in"
        >
          Sign In
        </button>
      </form>
      <div className={`w-full text-lg pb-8`}>
        <h2 className="text-slate-300 text-center text-xl mb-4">
          Or...
        </h2>
        <SignInOAuth />
      </div>
    </div>
  );
}
