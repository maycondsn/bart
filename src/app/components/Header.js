import {BiCodeBlock} from 'react-icons/bi'
import { BiMouse } from 'react-icons/bi'
import {BiMessageAlt} from 'react-icons/bi'

export default async function Header() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
      })
      const reverseData = await response.json()
      const data = await reverseData.reverse()
  

    return(
        <header className='flex justify-center relative py-3 bg-white  top-0'>

            {/* Logo */}
            <a href="/" className='flex gap-2'>
                <BiCodeBlock className='text-teal-400 text-3xl align-middle'/>
                <p className='text-xl font-mono flex'><strong className='text-teal-400'>BART</strong>OLOMEU</p>
            </a>

            {/* Infos */}
            <div 
            className="flex bg-white absolute gap-5 justify-between right-0 pt-3 text-xs text-gray-700  ">
                <div className="pl-6 gap-2 flex">
                    <BiMessageAlt className="text-base"/>
                    <span className="pb-3">{Object.keys(data).length} Questions</span>
                </div>
                <div className="flex gap-2">
                    <BiMouse className="text-base"/>
                    <span className="pr-8 pb-3">Scroll Down</span>
                </div>
                
            </div>
        </header>
    )
}