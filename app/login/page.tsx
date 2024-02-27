import LoginScreen from '@/screen/Login/LoginScreen'
import { Metadata } from 'next'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <LoginScreen />
    </div>
  )
}

export default LoginPage
export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Login | PhotoLand`,
  };
}
