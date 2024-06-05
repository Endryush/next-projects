export default function Logo () {
  return (
    <div className={`
      flex flex-col items-center justify-center
      h-12 w-12 bg-white rounded-full
    `}>
      <div className="h-3 w-3 rounded-full bg-red-700" />
      <div className="flex gap-1 mt-0.5">
        <div className="h-3 w-3 rounded-full bg-blue-700" />
        <div className="h-3 w-3 rounded-full bg-green-700" />
      </div>
    </div>
  )
}