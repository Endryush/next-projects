import Link from "next/link"

interface MenuItemProps {
  url?: string,
  text: string,
  icon: any,
  customClass?: string
  onCLick?: (event: any) => void
}

export default function MenuItem (props: MenuItemProps) {
  function renderLink () {
    return (
      <div className={`
        flex flex-col justify-center items-center
        w-full h-20 
        text-white-600
        ${props.customClass}
      `}>
        {props.icon}
        <span className={`text-xs font-light`}>
          { props.text }
        </span>
      </div>
    )
  }
  return (
    <li 
      onClick={props.onCLick}
      className={`hover:bg-gray-100 cursor-pointer`}
    >
      {props.url ? (
        <Link  
          href={props.url}
        >
          {renderLink()}
        </Link>
      ) : (
          renderLink()
      )}
    </li>
  )
}