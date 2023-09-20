import React from 'react'

export default function FormInput({ value, name, id, label}) {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      className="w-full text-black rounded-md p-2"
      value={value}
      required
      name={name}
      type="text"
    />
    </>
    
  );
}

//  <div className='w-full h-full mt-12 md:h-3/4 md:w-3/4 mx-auto rounded-md p-2 flex flex-col justify-center items-center gap-6'>
      
// <form name='sign-up' className={`${font.className} text-stone-300 text-xl bg-lime-800 flex flex-col items-start justify-center gap-2 w-full h-full md:w-1/2 md:h-3/4 p-4 rounded-md`} onSubmit={handleFormSubmit}>
// <h2 className='self-center text-3xl'>Sign up with your email!</h2>
// <label htmlFor="name">Name *</label>
// <input id='name' className='w-full text-black rounded-md p-2' value={name} onChange={handleFormChange} required name='name' type="text" />
// <label htmlFor="email">Email *</label>
// <input id='email' className='w-full text-black rounded-md p-2' value={email} onChange={handleFormChange} required name='email' type="email" />
// <label htmlFor="password">Password *</label>
// <input id='password' className='w-full text-black rounded-md p-2' value={password} onChange={handleFormChange} required name='password' type="password" />
// <label htmlFor="confirm">Confirm Password *</label>
// <input id='confirm' className='w-full text-black rounded-md p-2' value={confirm} onChange={handleFormChange} required name='confirm' type="password" />
// <button className='self-center border-thin border-slate-500 bg-black py-2 px-6 rounded-md mt-3' type='submit' htmlFor="sign-up">Sign Up!</button>
// </form>
// <div className={`w-full ${font.className} text-lg pb-8`}>
// <h2 className='text-slate-300 text-center text-xl mb-4'>Or sign in with one of these providers!</h2>
// <SignIn />
// </div>

// </div>