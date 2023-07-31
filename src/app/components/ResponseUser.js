import { BiUserPin } from 'react-icons/bi'

export default function ResponseUser() {
    return (
        <div className=" 
          grid gap-4 p-5
          border border-gray-300 rounded">
            <div className="flex gap-2 align-text-bottom">
                <BiUserPin className="text-gray-300 text-3xl h-full" />
                <div className="grid w-full">
                    <form className='w-full'>
                        <input
                            placeholder="Enter your Username"
                            className="w-full border border-gray-300 text-xs p-3 rounded
                            focus:border-black hover:border-black" />
                    </form>
                </div>
            </div>
            <textarea
            cols='30' rows='2'
            placeholder="Write a Reply" 
            className="text-base pl-3 line-height-3">

            </textarea>

            <div className="text-right">
            <button className="p-3 px-7 bg-gray-300 text-black rounded 
                text-xs transition duration-300 ease-in-out
                focus:bg-teal-500 focus:text-black focus:border-black
                hover:bg-teal-500 hover:text-black hover:border-black border
                ">
                  REPLY
            </button>
          </div>
        </div>
    )
}
