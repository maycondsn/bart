import {BiCodeBlock} from 'react-icons/bi'

export default function Header() {
    return(
        <header className='grid justify-center relative py-5 bg-white  top-0'>
            <a href="/" className='flex gap-2'>
                <BiCodeBlock className='text-teal-400 text-4xl align-middle'/>
                <p className='text-2xl font-mono flex'><strong className='text-teal-400'>BART</strong>OLOMEU</p>
            </a>
        </header>
    )
}