"use client";
import { useRouter } from 'next/navigation';
import firebase from '@/firebase/config'
import User from '@/interfaces/User';
import { createContext, ReactNode, useState } from 'react'

interface AuthContextProps {
  user?: User,
  googleLogin?: () => Promise<void>
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

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const router = useRouter()

  async function googleLogin () {
    const response = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )

    if (response.user?.email) {
      const user = await formattedUser(response.user)
      setUser(user)
      router.push('/')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        googleLogin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
