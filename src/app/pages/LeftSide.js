import Buttom from "../components/Buttom";
import Email from "../components/Email";
import FormBody from "../components/FormBody";


export default function LeftSide() {
    return(
        <section aria-label='leftSide' className='grid justify-center'>
          <div className="grid gap-3 ">
            
            <Email />

            <FormBody />

            <Buttom />
          </div>
          
        </section>
    )
}