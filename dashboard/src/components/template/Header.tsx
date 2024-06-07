
"use client";
import useThemeData from "@/data/hook/useThemeData";
import ChangeThemeButton from "./ChangeThemeButton";
import Title from "./Title";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  title: string,
  subtitle: string,
}


export default function Header (props: HeaderProps) {
  const { theme, toggleTheme } = useThemeData()
  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow items-center justify-end gap-2">
        <ChangeThemeButton theme={theme} changeTheme={toggleTheme} />
        <UserAvatar />
      </div>
    </div>
  )
}