import Link from "next/link";
import router from "next/router";

export default function RoutesExample () {

  function paramPush () {
    router.push({
      pathname: 'account/[id]/search',
      query: { 
        id: '123',
        name:'name'
      } 
    })
  }

  return (
    <div>
      <h1>Routing Example</h1>
      <ul>
        <Link href="/account/login">
          <li>Login</li>
        </Link>
        <Link href="/account/teste/search">
          <li>Dynamic route</li>
        </Link>
      </ul>
      <div>
        Usando next/router
        <button onClick={() => router.push('/account/forgot-password')}>
          Esqueci senha
        </button>
        <button  onClick={paramPush}>
          Push com parametro
        </button>
      </div>
    </div>
  )
}