'use client';

import { Josefin_Sans } from 'next/font/google';
import React from 'react';
import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '@/utilities/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import SignInOAuth from '../sign-in-oauth/sign-in-oauth.component';

const font = Josefin_Sans({
  subsets: ['latin'],
  weight: '200',
});

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirm: '',
};


export default function SignUpForm() {
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirm } = formFields;

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
    if (password !== confirm) {
      alert(
        `Password and Confirm password don't match. Please re-enter and try again`
      );
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { name });
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert(`User already exists. Try signing in.`);
        return;
      }
      console.error(err);
    }
  };

  return (
    <div className="w-full h-full md:h-3/4 md:w-3/4 mx-auto rounded-md p-2 flex flex-col justify-center items-center gap-6">
      <form
        name="sign-up"
        className={`${font.className} text-stone-300 text-xl bg-lime-950 flex flex-col items-start justify-center gap-2 w-full h-full md:w-1/2 md:h-3/4 p-4 rounded-md`}
        onSubmit={handleFormSubmit}
      >
        <h2 className="self-center text-3xl">Sign up with your email!</h2>
        <FormInput
          label='Name *'
          type='text'
          required
          onChange={handleFormChange}
          name='name'
          value={name}
        />

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
          onChange={handleFormChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password *'
          type='password'
          required
          onChange={handleFormChange}
          name='confirm'
          value={confirm}
        />

        <button
          className="self-center border-thin border-slate-500 bg-black py-2 px-6 rounded-md mt-3"
          type="submit"
          htmlFor="sign-up"
        >
          Sign Up!
        </button>
      </form>
      <div className={`w-full ${font.className} text-lg pb-8`}>
        <h2 className="text-slate-300 text-center text-xl mb-4">
          Or sign up with one of your favorite corporate giants!
        </h2>
        <SignInOAuth />
      </div>
    </div>
  );
}
