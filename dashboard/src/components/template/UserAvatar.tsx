import useAuth from "@/data/hook/useAuth";
import Link from "next/link";
import { UserIcon } from "../icons";

export default function UserAvatar () {
  const { user } = useAuth()
  return (
    <div>
      <Link href='/profile'>
        {user?.imageUrl ? (
          <img
            src={user.imageUrl} 
            alt="User image"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        ) : (
          <div className="rounded-full cursor-pointer">
            {UserIcon}
          </div>
        )}
      </Link>
    </div>
  )
}