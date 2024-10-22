import React from 'react'

interface ButtonProps {
     text: string, 
     onclick?: () => void
}

const Button = ({text, onclick} : ButtonProps) => {
  return (
    <div>
        <button onClick={onclick} className='bg-white text-neutral-950 px-4 py-2 rounded-lg shadow-md'>
            {text}
        </button>
    </div>
  )
}

export default Button