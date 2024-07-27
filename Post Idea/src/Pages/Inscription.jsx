import React from 'react'
import { Link } from 'react-router-dom';

const Inscription = () => {
  return (
    <div>
     
<div className="bg-grey-lighter min-h-screen flex justify-center items-center">
            <div className="container max-w-sm md:max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-[3em] py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-bold text-gray-700">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full px-3 py-2 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full px-3 py-2 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full px-3 py-2 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full px-3 py-2 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center px-3 py-2 rounded bg-gradient-to-r from-cyan-400 to-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-cyan-500" href="#">
                            Terms of Service 
                        </a> and
                        <a className="no-underline text-cyan-500 border-b border-grey-dark text-grey-dark" href="#">
                             Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-cyan-500" to='/Connexion'>
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inscription