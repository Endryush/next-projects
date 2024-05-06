// convention to explicity use static pages
export function getStaticProps () {
  return { props: {
    num: Math.random()
  } }
}

export default function Second (props: { num: number }) {
  return (
    <div>
      <h1>Static content</h1>
      <p>Num static = {props.num}</p>
      <p>Need to build application to make num staticly (npm run build  && npm start)</p> 
    </div>
  )
}