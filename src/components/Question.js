
import Link from 'next/link'
import {BiCheck} from 'react-icons/bi'
import {AiOutlineEye} from 'react-icons/ai'

export default function Question() {
    return (
        <Link href='/pages/question' className='border-b border-black mx-6 flex text-left'>
            <div className='grid gap-2 p-6'>
              <div className='flex gap-5 text-xs text-teal-600'>
                <span className='flex gap-2'><BiCheck className='text-base'/>0 answers</span>
                <span className='flex gap-2'><AiOutlineEye className='text-base'/> 0 views</span>
              </div>
              <div>
                <h1 className='text-2xl font-semibold pb-2'>Lorem ipsum sit dolot amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, massa nec dictum pretium, purus ligula imperdiet lacus, nec sollicitudin quam ...</p>
              </div>
            </div>
            <span className='py-6 font-normal text-xs'>Seg, 01:28</span>
          </Link>
    )
}