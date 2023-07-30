

export default function LeftSide() {
    return(
        <section aria-label='leftSide' className='grid justify-center'>
          <div className="grid gap-6 ">
            <div className=" relative bg-gray-100 border-black rounded border
             hover:bg-teal-500 focus:bg-teal-500 before-shadow transition duration-300 ease-in-out shadow-lg ">
              <form className="grid p-4 -top-2 -right-2 relative">
                <label for='email' className="text-lg pb-2 relative">Email</label>
                <input type='text' id='email' name='email' placeholder='username@gmail.com'
                className="border border-black rounded placeholder-gray-600 text-sm p-3 w-full"
                />
              </form>
            </div>

            <div className="grid gap-5">
              <div className="relative bg-gray-100 border-black rounded border shadow-lg
             hover:bg-teal-500 focus:bg-teal-500 before-shadow transition duration-300 ease-in-out ">
                <form className='grid p-4 -top-2 -right-2 relative'>
                  <div className="grid">
                    <div className='pb-4'>
                      <label for='title' className='text-lg pb-2'>Title</label>
                      <p className='text-xs pb-1'>Be specific and imagine you’re asking a question to another person.</p>
                      <input type='text' id='title' name='title' 
                      className='border border-black rounded placeholder-gray-600 text-sm p-3 w-full'
                      />
                    </div>
                    
                    <div>
                      <label for='message' className='text-lg pb-2' >Message</label>
                      <p className='text-xs pb-1'>Be specific and imagine you’re asking a question to another person.</p>
                      <textarea id='message' name='message' cols='30' rows='8'
                      className='border border-black rounded placeholder-gray-600 text-sm p-3 w-full active:border-teal-500' 
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='text-right mt-4'>
              <a href='#' className='p-4 px-6 bg-slate-950 text-gray-50 rounded 
              hover:bg-teal-500 transition duration-300 ease-in-out  
                focus:bg-teal-500
              '
              >
                ASK QUESTION
              </a>
            </div>
          </div>
          
        </section>
    )
}