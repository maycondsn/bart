import Question from "@/app/components/Question";

export default async function RightSide() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store',
    })
    const data = await response.json()

    return(
        <section aria-label='rightSide' className='bg-white'>
            {data.map((item) => (
                <Question key={item.id} id={item.id} title={item.title} body={item.body} />
            ))}

        </section>
    )
}