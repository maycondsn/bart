
import Link from 'next/link'
import { BiCheck } from 'react-icons/bi'
import { AiOutlineEye } from 'react-icons/ai'

export default function Question(props) {

  return (
    <Link href={`/pages/question/${props.id}`} className='border-b border-black mx-6 flex text-left'>
      <div className='grid gap-2 p-6'>
        <div className='flex gap-5 text-xs text-teal-600'>
          <span className='flex gap-2'><BiCheck className='text-base' />0 answers</span>
          <span className='flex gap-2'><AiOutlineEye className='text-base' /> 0 views</span>
        </div>
        <div className="hover:text-teal-900">
          <h1 className='text-2xl font-semibold pb-2'>{props.title}</h1>
          <p>{props.body}</p>
        </div>
      </div>
      <span className='py-6 font-normal text-xs'>Seg, 01:28</span>
    </Link>
  )
}