"use client";
import { useRouter } from 'next/navigation';
import firebase from '@/firebase/config'
import User from '@/interfaces/User';
import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
interface AuthContextProps {
  user?: User | null,
  googleLogin?: () => Promise<void>
  logout?: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({});

async function formattedUser (firebaseUser: firebase.User) : Promise<User> {
  const token = await firebaseUser.getIdToken()

  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    provider: firebaseUser.providerData[0]?.providerId,
    imageUrl: firebaseUser.photoURL,
    token
  }
}

function manageCookies (isLogged: boolean) {
  if (isLogged) {
    Cookies.set('admin-template-auth', isLogged.toString() , {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-auth')
  }
}

export function AuthProvider(props: AuthProviderProps) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  async function configUserSession (firebaseUser:  firebase.User | null): Promise<string | boolean> {
    try {
      if (firebaseUser?.email) {
        const user = await formattedUser(firebaseUser)
        setUser(user)
        manageCookies(true)

        return user.email ?? ''
      } 

      setUser(null)
      manageCookies(false)

      return false
    } catch (error) {
      console.error(error)
      return false
    } finally {
      setLoading(false)
    }
  }

  async function googleLogin () {
    try {
      setLoading(true)
      const response = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
  
      if (response.user) {
        configUserSession(response.user)
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(true)
    }
  }

  async function logout () {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await configUserSession(null)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      router.push('/auth')
    }
  }

  useEffect(() => {
    if(Cookies.get('admin-template-auth')) {
      const cancelObserver = firebase.auth().onIdTokenChanged(configUserSession)
  
      return () => cancelObserver()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        googleLogin,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
