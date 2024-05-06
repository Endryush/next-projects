// explicity use SSR, generate code by server side, allows better SEO
export function getServerSideProps () {
  return { props: {
    num: Math.random()
  } }
}

export default function First (props: { num: any }) {
  return (
    <div>
      <h1>SSR content</h1>
      {props.num}
    </div>
  )
}