"use client"
import AuthForm from '@/components/forms/authForm'
import Link from 'next/link'
import React from 'react'

const Signup = () => {

    const onSubmit = () => {

    }
  return (
    <main className='flex flex-row w-full items-center justify-center h-screen' >
      <AuthForm formType="signup" onSubmit={onSubmit} />
      <Link href="/">
        <button className="bg-blue-600 text-white ">New user?</button>
      </Link>
    </main>
  )
}

export default Signup