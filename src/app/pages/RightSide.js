import Question from "@/app/components/Question";

export default async function RightSide() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store',
    })
    const reverseData = await response.json()
    const data = await reverseData.reverse()

    return(
        <section aria-label='rightSide' className='bg-white relative'>
            <div className="w-full h-px bg-black fixed"></div>
            <div className="pt-5">
            {data.map((item) => (
                <Question key={item.id} id={item.id} title={item.title} body={item.body} />
            ))}
            </div>

        </section>
    )
}
