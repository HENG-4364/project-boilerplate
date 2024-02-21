"use client";

import { useMutation } from '@apollo/client';
import Link from 'next/link'
import React, { useState, useTransition } from 'react'
import { LOGIN_EMPLOYEE_MUTATION } from './graphql/Mutation/EmployeeLogin';
import Cookie from "js-cookie"
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmployee] = useMutation(LOGIN_EMPLOYEE_MUTATION)
  const router = useRouter()
  const [isPenging, startTrasition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTrasition(() => {
      loginEmployee({
        variables: {
          input: {
            userName: username,
            password: password
          }
        },
        onCompleted: ({ loginEmployee }) => {
          if (loginEmployee) {
            Swal.fire({
              icon: "success",
              title: "ជោគជ័យ",
              text: "សូមស្វាគមន៍!",
              confirmButtonText: "យល់ព្រម",
              timer: 3000,
            });
            Cookie.set("token", loginEmployee?.token)
            window.location.replace("/");          
          }
        },
        onError: (err) => {
          console.error(err?.message);
        },
        refetchQueries: ['EmployeeMe', "employeeMe"],
      })
    })
  };

  return (
    <div className='h-[100vh] w-[100%] flex items-center justify-center text-black'>
      <div className='bg-white px-5 py-10 rounded-md w-[400px]'>
        <div className='text-black pb-5'>
          <div className='flex justify-center'>
            <img src="/logo.png" alt="" className='bg-black p-2 rounded-sm' />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Username..." required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
            <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className='w-full'>
            <button type="submit" disabled={isPenging ? true : false} className="w-[100%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {isPenging ? "Loading" : "Login"}
            </button>
          </div>
          <div className='flex justify-center pt-5'>
            Or <span className='ps-2'><Link href={'/signup'} className='text-blue-500'>SingUp Account</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen
