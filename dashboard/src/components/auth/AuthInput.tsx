interface AuthInputProps {
  label: string,
  value: string,
  type?: string,
  required?: boolean
  changeValue: (newValue: string) => void
}

export default function AuthInput (props: AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor="">
        {props.label}
      </label>
      <input 
        className={`
          text-black
          px-4 py-3 mt-2 rounded-lg
          border focus:border-blue-500 outline-blue-500
        `}
        type={props.type ?? 'text'} 
        value={props.value}
        required={props.required}
        onChange={e => props.changeValue?.(e.target.value)}
      />
    </div>
  )
}