'use client'

import { useState } from 'react'

export default function Email() {

    const [inputActive, setInputActive] = useState(false)

    return (
        <div 
            className={`relative border-black rounded border
            hover:bg-teal-950 focus:bg-teal-500 before-shadow transition duration-300 ease-in-out shadow-lg 
            ${inputActive ? 'bg-teal-950':'bg-transparent'}`}>
                <form className="grid p-4 -top-2 -right-2 relative">
                    <label for='email' className="text-base pb-2 relative">Username</label>
                    <input 
                    type='text' 
                    id='email' 
                    name='email'
                    placeholder='@username'
                    className="border border-black rounded placeholder-gray-600 text-xs p-3 w-full"
                    onFocus={() => {setInputActive(true)}} onBlur={() => setInputActive(false)}
                    />
                </form>
                </div>
    )
}
