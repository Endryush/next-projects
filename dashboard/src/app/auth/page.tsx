"use client";
import AuthInput from "@/components/auth/AuthInput";
import { WarningIcon } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";
import { useState } from "react";

export default function Auth () {
  const { user, googleLogin } = useAuth()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')

  function handleError (msg: string, seconds: number = 3) {
    setError(msg)
    const errorTimeout = setTimeout(() =>{ setError('')}, seconds * 1000)
  }

  function handleLoginScreen () {
    setIsLogin(!isLogin)
  }

  function handleForm () {
    if (isLogin) {
      console.log('login')
    } else {
      console.log('cadastro')
    }
  }

  return (
    <div 
      className={`
        flex h-screen items-center justify-center
        bg-gray-200  text-gray-700
        dark:bg-gray-900 dark:text-gray-200
      `}
    >
      <div className="hidden md:block lg:w-7/12 md:w-5/12">
        <img 
          className="h-screen object-cover"
          src="https://i.ytimg.com/vi/dN8vWsH9s_M/maxresdefault.jpg" 
          alt="Encore art"
        />
      </div>
      <div className={`
        flex-grow
        p-5 sm:p-10
      `}>
        <h1 className="text-xl font-bold mb-5 text-gray text-gray-700 dark:text-gray-200">
          {isLogin ? 'Entre com a sua conta' : 'Faça seu cadastro'}
        </h1>
        {error && (
          <div className={`
            flex items-center gap-1
            py-3 px-5 my-2
            bg-red-400 text-white
            border border-red-700 rounded-lg
          `}
          >
            {WarningIcon}
            <span>{error}</span>
          </div>
        )}
        <AuthInput 
          label="Email" 
          type="email"
          value={email}
          changeValue={setEmail}
          required
        />
        <AuthInput 
          label="Senha"
          type="password"
          value={password}
          changeValue={setPassword}
          required
        />
        {!isLogin && 
          (
            <AuthInput 
              label="Confirme sua senha"
              type="password"
              value={confirmPassword}
              changeValue={setConfirmPassword}
              required
            />
          )
        }
        <button 
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounted-lg px-4 py-3 mt-5  rounded-md
          `}
          onClick={handleForm}
        >
          {isLogin ? 'Entrar' : 'Cadastre-se'}
        </button>

        <hr className="my-6 w-full border-gray-400 border-dashed" />

        {isLogin &&
        (
          <button 
            className={`
              w-full bg-red-500 hover:bg-red-400
              text-white rounted-lg px-4 py-3
              rounded-md
            `}
            onClick={googleLogin}
          >
            Entre com Google 
          </button>
        )}
        <a 
          className={`
            flex justify-center mt-2 cursor-pointer hover:underline  
            text-blue-500 hover:text-blue-700
            text-sm
          `}
          onClick={handleLoginScreen}
        >
          {
            isLogin ? 'Novo por aqui? Crie uma conta' : 'Já tenho uma conta'
          }
        </a>
      </div>
    </div>
  )
}