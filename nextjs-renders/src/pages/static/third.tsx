// convention to explicity use static pages
export function getStaticProps () {
  return { 
    revalidate: 7,
    props: {
      num: Math.random()
    } 
  }
}

export default function Third (props: { num: number }) {
  return (
    <div>
      <h1>Static content</h1>
      <p>Num static = {props.num}</p>
      <p>Need to build application to make num staticly (npm run build  && npm start)</p> 
      <h3>set time to update content <strong>(revalidate)</strong></h3>
    </div>
  )
}