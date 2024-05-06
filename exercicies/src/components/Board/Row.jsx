import Square from './Square'
import './Row.css'

export default function Row (props) {
  return (
    <div className='board-row'>
      {Array.from({ length: 8 }).map((_, index) => (
        <Square key={index} isBlack={index % 2 === 0 ? props.isBlack : !props.isBlack} />
      ))}
    </div>
  )
}