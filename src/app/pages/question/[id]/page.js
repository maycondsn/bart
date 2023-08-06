import Link from "next/link"

import {BiArrowFromRight} from "react-icons/bi"

import {AiOutlineEye} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'

import ResponseQuestion from "@/app/components/Response"
import ResponseUser from "@/app/components/ResponseUser"

export default async function Question({ params }) {

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    cache: 'no-store',
  })
  const question = await response.json()

  return (
    <div className="left-over grid justify-center">

      <div className="bg-white m-6 border-black border rounded max-w-2xl ">
        <header className="flex p-2 py-8 gap-5 border-b mx-8 border-black">
          <Link href='/'><BiArrowFromRight className="text-3xl text-teal-500 hover:text-teal-950 "/></Link>
          <div>
            <div className="text-sm flex gap-6 text-teal-600">
              <span className="flex gap-1 ">
                <BiTimeFive className="text-lg"/>Asked Jul 2023
              </span>
              <span className="flex gap-1">
                <AiOutlineEye className="text-lg"/>Viewed 1 times
              </span>
            </div>
            <h1 className="text-3xl font-bold pt-3">{question.title}</h1>
          </div>
        </header>

        <main className="p-8 px-16 text-lg font-sans grid gap-8 line-height-2 ">
          <p>
          {question.body}
          </p>

          {/* Answers */}
          <ResponseUser />
          
          <span className="text-xl font-semibold">2 Answers</span>

          <ResponseQuestion />
          <ResponseQuestion />
          
        </main>
      </div>
      

    </div>
  )
}
