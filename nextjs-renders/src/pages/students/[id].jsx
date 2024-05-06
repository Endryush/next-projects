// generate static paths to SSG for some rules
export function getStaticPaths () {
  return {
    fallback: false, // if id is diff from params, show 404 component
    paths: [
      { params: { id: '102' } },
      { params: { id: '454' } },
      { params: { id: '540' } },
    ]
  }
}

export function getStaticProps (context) {
  const id = context.params.id // context will be sent 3 times, because getStaticPaths() has 3 different paths
  const canShowId = ['102', '454', '540'].includes(context.params.id)
  return {
    props: {
      id: canShowId ? id : 'no-id' // 'no-id' will be show only if fallback === true in getStaticPaths()
    }
  }
}

export default function StudentById (props) {
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      {props.id}
    </div>
  )
}