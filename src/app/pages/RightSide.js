import Question from "@/app/components/Question";

export default async function RightSide() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store',
    })
    const reverseData = await response.json()
    const data = await reverseData.reverse()

    return(
        <section aria-label='rightSide' className='bg-white'>
            <div className="flex border-black border-b justify-between text-xs text-teal-800 mb-3 ">
                <span className="px-7 pb-3">{Object.keys(data).length} Questions</span>
                <span className="px-8 pb-3">Scroll Down</span>
            </div>
            {data.map((item) => (
                <Question key={item.id} id={item.id} title={item.title} body={item.body} />
            ))}

        </section>
    )
}
