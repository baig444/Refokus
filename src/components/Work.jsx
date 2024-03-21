/* eslint-disable no-unused-vars */
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"


function Work() {

   
  const [images, setImages] = useState( [
    { url: "https://i.pinimg.com/564x/f3/c7/9d/f3c79d3a96398c81a34d328edcc59893.jpg", top: "50%", left: "50%", isActive: false },
    { url: "https://i.pinimg.com/564x/75/78/81/757881df41ef534807b71f2093fb1f5d.jpg", top: "53%", left: "48%", isActive: false },
    { url: "https://i.pinimg.com/564x/ab/8b/4f/ab8b4fdb592cafe835517546961a9c30.jpg", top: "47%", left: "52%", isActive: false },
    { url: "https://i.pinimg.com/564x/f5/69/2f/f5692f76bee1913d2aeccec6600643bc.jpg", top: "51%", left: "49%", isActive: false },
    { url: "https://i.pinimg.com/564x/1a/52/2e/1a522e081a5114fce9223bb27d74bcf1.jpg", top: "53%", left: "53%", isActive: false },
    { url: "https://i.pinimg.com/736x/23/65/29/23652998fe06a765e757cc5ebdda1d2d.jpg", top: "55%", left: "52%", isActive: false },
  ])
  const { scrollYProgress } = useScroll()
  
  scrollYProgress.on("change", (data) => {
    function getActiveImages(arr) {
      setImages(prev =>(
        prev.map((item,index)=>(
          arr.indexOf(index) === -1 ? {...item, isActive: false} : {...item, isActive: true}
        ))
      ))
    }

    switch(Math.floor(data*100)) {
      case 0:
       getActiveImages([])
        break
      case 1:
        getActiveImages([0])
        break
      case 2:
        getActiveImages([0,1])
        break
      case 3:
        getActiveImages([0,1,2])
        break
      case 4:
        getActiveImages([0,1,2,3])
        break
      case 5:
        getActiveImages([0,1,2,3,4])
        break
        case 6:
        getActiveImages([0,1,2,3,4,5])
        break
    }
  })
  return (
    <div className="w-full">
      <div className="relative max-w-screen-lg mx-auto text-center ">
        <h1 className="text-[30vw] leading-none select-none font-medium tracking-tight">works</h1>
        <div className="absolute top-0  w-full h-full ">
          {
            images.map((image, index) => (
              image.isActive && (<img key={index} src={image.url} alt="" className="absolute w-40 h-52 rounded-lg object-cover -translate-x-[50%] -translate-y-[50%]" style={{ top: image.top, left: image.left }} />)
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Work
