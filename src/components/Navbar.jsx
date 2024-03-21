import Button from "./Button"

function Navbar() {
  return (
    <div className="max-w-screen-lg  py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center ">
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Refokus" />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Career","","News"].map((link, index) =>
        (link.length === 0 ? <span key={index} className="w-[1px] h-5 bg-zinc-400"></span>:(
          <a className="flex items-center gap-2 font-regular text-sm" href="#" key={index}>
          
          {index === 1 && (<span style={{ boxShadow: '0 0 0.25em #00FF19' }} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>)}
          {link}</a>
        )))}
      </div>
      </div>
      <Button />
    </div>
  )
}

export default Navbar
