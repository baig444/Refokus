/* eslint-disable react/prop-types */
import Button from "./Button"

function Product({product,mover,count}) {
    return (
        <div className="w-full py-10 h-[20rem] text-white">
            <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-lg mx-auto flex items-center justify-between">
                <h1 className="text-6xl capitalize">{product.title}</h1>
                <div className="dets w-1/3">
                    <p className="mb-10">{product.description}.</p>
                    <div className="flex items-center gap-8">
                    {product.live && <Button />}
                    {product.case && <Button title='Case Study' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
