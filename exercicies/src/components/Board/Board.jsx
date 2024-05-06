import Row from './Row'

export default function Board (props) {
  return (
    <>
       {Array.from({ length: 8 }).map((_, index) => (
        <Row key={index} isBlack={index % 2 === 0 ? props.isBlack : !props.isBlack} />
      ))}
    </>
  )
}