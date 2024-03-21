/* eslint-disable react/prop-types */

import { motion } from 'framer-motion'
function Marquee({images}) {
  return (
    <div className="flex w-full py-10 gap-10 whitespace-nowrap overflow-hidden">
     <motion.div initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease
      : "linear",duration: 20}} className="flex flex-shrink-0 gap-40 pr-40">
     {images.map((image, index) => (
        <img key={index} src={image} className="w-30 rounded-lg object-cover flex-shrink-0" />
      ))}
     </motion.div>
     <motion.div initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease
      : "linear",duration: 20}} className="flex flex-shrink-0 gap-40 pr-40">
     {images.map((image, index) => (
        <img key={index} src={image} className="w-30 rounded-lg object-cover flex-shrink-0" />
      ))}
     </motion.div>
    </div>
  )
}

export default Marquee
