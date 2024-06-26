import './Square.css'

export default function Square (props) {
  return (
    <div 
      className={`
        square
        ${props?.isBlack ? 'black' : 'white'}`
      } 
    />
  )
}