import './style.css'

export default function MainTitle (props) {
  return (
    <>
      <h1 
        className={
          `main-title 
          ${props.subtitle ? 'has-sub' : ''}
          `
        }
      >
        
        {props.title}
      </h1>
      {props.subtitle && (
        <h3 className='main-title'>
          {props.subtitle}
        </h3>
      )}
    </>
  )
}