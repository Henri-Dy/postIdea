import React from 'react'
import { Link } from 'react-router-dom';

const Connexion = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
     


<div className="flex items-center  bg-white px-4 w-full md:max-w-[32em] rounded-lg">
    <div className='w-full'>
        <div className=" py-5 w-full">
            <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 ">Sign in</h1>
                <p className="text-gray-500 ">Sign in to access your account</p>
            </div>
            <div className="m-7">
                <form action="">
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300  " />
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                    </div>
                    <div className="mb-6">
                        <button type="button" className="w-full px-2 py-4 text-white bg-gradient-to-r from-cyan-500 to-green-400 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                    </div>
                    <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to='/Inscription' className="text-green-400 focus:outline-none focus:underline focus:text-indigo-500 ">Sign up</Link></p>
                </form>
            </div>
        </div>
    </div>
</div>
 </div>
  )
}

export default Connexion