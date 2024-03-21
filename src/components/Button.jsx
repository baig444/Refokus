/* eslint-disable react/prop-types */
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
function Button({title = "Get Started"}) {
  return (
    <div className="w-32 px-2 py-1 bg-zinc-100 text-black rounded-full">
      <span className="text-sm font-regular flex items-center justify-between">{title}<MdOutlineSubdirectoryArrowRight /></span>
    </div>
  )
}

export default Button
