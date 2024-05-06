import MainTitle from '@/components/MainTitle/MainTitle'

export default function third () {
  const listItems : Array<number> = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <MainTitle 
        title='Revisando syntax JSX'
        subtitle='Typescript será implementado ainda'
      />
      {listItems.map((item) => (
         <span key={item}>
          {item}
          {item !== listItems.length ? ',' : ''} 
        </span>
      ))}
    </div>
  )
}