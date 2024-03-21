/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
    var products = [
        {
            title: "arqitel",
            description: "Arqu Execution and its employees continue to recieve  orders for customers and customers taht get orders",
            live: true,
            case: false
        },
        {
            title: "TTR",
            description: "Arqu Execution and its employees continue to recieve  orders for customers and customers taht get orders",
            live: true,
            case: false
        },
        {
            title: "YIR 2004",
            description: "Arqu Execution and its employees continue to recieve  orders for customers and customers taht get orders",
            live: true,
            case: true
        },
        {
            title: "Yahoo!",
            description: "Arqu Execution and its employees continue to recieve  orders for customers and customers taht get orders",
            live: true,
            case: true
        },

    ];

    const [pos,setPos] = useState(0)

    const mover = (val) => {
        setPos(val * 20)
    }
  return (
    <div className="mt-32 relative">
      {
          products.map((product, index) => (
              <Product mover={mover} key={index} product={product} count={index} />
          ))
      }
      <div className="w-full h-full absolute top-0 pointer-events-none ">
      <motion.div initial={{y:pos}} 
       animate={{y: pos +`rem`}} className="window absolute w-[23rem] h-[20rem] left-1/3  overflow-hidden">
      <motion.div animate={{y: -pos+`rem`}} className="window w-full h-full ">
        <img src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div animate={{y: -pos+`rem`}} className="window w-full h-full "><img src="https://images.unsplash.com/photo-1710923566925-b6f030b013ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" /></motion.div>
      <motion.div animate={{y: -pos+`rem`}} className="window w-full h-full "><img src="https://images.unsplash.com/photo-1710087992365-ce7d0e38b26d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" /></motion.div>
      <motion.div animate={{y: -pos+`rem`}} className="window w-full h-full "><img src="https://images.unsplash.com/photo-1710437094660-dd28f771ce95?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" /></motion.div>
      </motion.div>
      </div>
    </div>
  )
}

export default Products
