/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdOutlineArrowForward } from "react-icons/md";
function Card({width,start,para,hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-lg hover:bg-purple-600 ${width} flex flex-col justify-between`}>
      <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h3>one heading</h3>
        <MdOutlineArrowForward />
      </div>
      <h1 className="text-3xl font-medium mt-10">whatever heading</h1>
      </div>
      <div className="down w-full mt-32">
        {
            start && (

                <>
                 <h1 className="text-6xl font-bold tracking-tighter leading-none">start a project</h1>
      <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">Contact us</button>
                </>
            )
        }
     {
        para && (
            <p className="text-sm font-regular text-zinc-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        )
     }
      
      </div>
    </div>
  )
}

export default Card
