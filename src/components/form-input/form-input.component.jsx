import React from 'react'

export default function FormInput({ label, ...otherProps }) {
  return (
    <>
    <label>{label}</label>
    <input
    className='w-full text-black text-xl rounded-sm bg-stone-200'
      { ...otherProps}
    />
    </>
  );
}