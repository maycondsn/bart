import Link from "next/link"

import {BiLeftArrowCircle} from "react-icons/bi"

import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'

export default async function Question({ params }) {

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    cache: 'no-store',
  })
  const question = await response.json()


  return (
    <div className="left-over grid justify-center">
        
      <div className="bg-white m-6 border-black border rounded max-w-2xl ">
        <header className="flex p-2 py-8 gap-5 border-b mx-8 border-black">
          <Link href='/'><BiLeftArrowCircle className="text-3xl text-teal-400 hover:bg-white "/></Link>
          <div>
            <div className="text-sm flex gap-6 text-teal-600">
              <span className="flex gap-1"><BiTimeFive className="text-lg"/>Asked Jul 2023</span>
              <span className="flex gap-1"><AiOutlineEye className="text-lg"/>Viewed 1 times</span>
            </div>
            <h1 className="text-3xl font-bold pt-3">${question.title}</h1>
          </div>
        </header>

        <main className="p-8 px-16 text-lg grid gap-8 line-height-2 ">
          <p>
          {question.body}
          </p>
          <span className="text-xl font-semibold">2 Answers</span>
          <div className=" flex before:content-[''] gap-4 before:w-2 before:h-2/4 before:bg-teal-400">
            <p className="text-base text-[''] line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, massa nec dictum pretium, purus ligula imperdiet lacus, nec sollicitudin quam erat eget eros. Maecenas quis sagittis justo. Curabitur hendrerit eros ante, vel fringilla nisl commodo sed. Proin at fringilla lorem, quis tincidunt felis. Nulla molestie fermentum porttitor. Phasellus id dignissim dui. Quisque facilisis vulputate 
            </p>
          </div>
          <div className=" flex before:content-[''] gap-4 before:w-2 before:h-2/4 before:bg-teal-400">
            <p className="text-base line-height-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, massa nec dictum pretium, purus ligula imperdiet lacus, nec sollicitudin quam erat eget eros. Maecenas quis sagittis justo. Curabitur hendrerit eros ante, vel fringilla nisl commodo sed. Proin at fringilla lorem, quis tincidunt felis. Nulla molestie fermentum porttitor. Phasellus id dignissim dui. Quisque facilisis vulputate 
            </p>
          </div>
          
          <form className="grid gap-4">
            <div className="grid gap-2 ">
              <label className="flex gap-2 align-middle text-sm" placeholder="username@email.com"><AiOutlineMail className="text-2xl grid" />Email</label>
              <input className="rounded p-4 text-sm  border-black border max-w-lg" />
            </div>
            <div className="grid gap-2">
              <label className="flex gap-2 align-middle text-sm"><AiOutlineMessage className="text-2xl grid" />Your Answer</label>
              <textarea id='message' name='message' cols='30' rows='10'
              className="p-4 text-sm active:border active:border-teal-500 rounded border-black border max-w-lg" ></textarea>
            </div>
          </form>

          <div className="text-right">
            <button className="p-3 px-6 bg-gray-950 text-slate-50 rounded 
                hover:bg-teal-500 transition duration-300 ease-in-out  
                   active:bg-teal-500 
                '">
                  REPLY
            </button>
          </div>
        </main>
      </div>
      

    </div>
  )
}
