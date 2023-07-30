'use client'

import { useState } from 'react'

export default function FormBody() {

    const [inputActive, setInputActive] = useState(false)

    return (
        <div className="grid gap-5">
                <div className={`relative bg-gray-100 border-black rounded border shadow-lg
                hover:bg-teal-950 focus:bg-teal-500 before-shadow transition duration-300 ease-in-out 
                ${inputActive ? 'bg-teal-950':'bg-transparent'}`}>
                    <form className='grid p-4 -top-2 -right-2 relative'>
                    <div className="grid">
                        <div className='pb-4'>
                        <label for='title' className='text-base pb-2'>Title</label>
                        <p className='text-xs pb-1'>Be specific and imagine you’re asking a question to another person.</p>
                        <input type='text' id='title' name='title' 
                        className='border border-black rounded placeholder-gray-600 text-sm p-3 w-full'
                        onFocus={() => {setInputActive(true)}} onBlur={() => setInputActive(false)}
                        />
                        </div>
                        
                        <div>
                        <label for='message' className='text-base pb-2' >Message</label>
                        <p className='text-xs pb-1'>Be specific and imagine you’re asking a question to another person.</p>
                        <textarea id='message' name='message' cols='30' rows='8'
                        className='border border-black rounded text-sm p-3 w-full active:border-teal-500'
                        onFocus={() => {setInputActive(true)}} onBlur={() => setInputActive(false)} 
                        ></textarea>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
  )
}
