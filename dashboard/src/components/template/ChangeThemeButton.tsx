import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../icons"

interface ChangeThemeButtonProps {
  theme?: string,
  changeTheme?: () => void
}

export default function ChangeThemeButton (props: ChangeThemeButtonProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) return <></>;
  return props.theme === 'dark' ? 
  (
    <div 
      onClick={props.changeTheme}
      className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8
        rounded-full p-1
      `}
    >
      <div
        className={`
          flex items-center justify-center
          bg-white text-yellow-600
          w-6 h-6 p-0.5
          rounded-full
        `}
      >
        {SunIcon}
      </div>
      <div
        className={`
          hidden lg:flex items-center ml-2
          text-white
        `}
      >
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : 
  (
    <div 
      onClick={props.changeTheme}
      className={`
        hidden sm:flex items-center justify-between cursor-pointer
        bg-gradient-to-r from-gray-500 to-gray-900
        w-14 lg:w-24 h-8
        rounded-full p-1
      `}
    >
      <div
        className={`
          hidden lg:flex items-center
          text-white
          ml-2 mr-1
        `}
      >
        <span className="text-sm">Escuro</span>
      </div>
      <div
        className={`
          flex items-center justify-center
         text-white bg-gray-900
          w-6 h-6 p-0.5
          rounded-full
        `}
      >
        {MoonIcon}
      </div>
    </div>
  )
}
