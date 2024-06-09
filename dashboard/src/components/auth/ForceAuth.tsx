"use client";
import Image from "next/image"
import loadingGif from '../../../public/images/loading.gif'
import useAuth from "@/data/hook/useAuth"
import { useRouter } from "next/navigation"
import { ReactNode } from "react";
import Head from "next/head";
import { Cookies } from "@/enum/cookies";

interface ForceAuthProps {
  children: ReactNode;
}


export default function ForceAuth (props: ForceAuthProps) {
  const { user, loading } = useAuth()
  const router = useRouter() 

  function renderContent () {
    return (
      <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie?.includes(${Cookies.AdminCookieAuth})) {
                window.location.href = '/auth'
              }
            `
          }}
        />
      </Head>
        {props.children}
      </>
    )
  }

  function renderLoading () {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image height={100} width={100} src={loadingGif} alt="loading gif" />
      </div>
    )
  }

  if(!loading && user?.email) return renderContent()
    
  if (loading) return renderLoading()

  router.push('/auth')
  return 
}