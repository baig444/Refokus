
function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
            <h1 className="text-[9rem] font-semibold leading-none tracking-tight">refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-10">
            <div className="basis-1/3">
                <h4 className="mb-10 capitalize text-zinc-500">socials</h4>
                {['Instagram', 'twitter (x?)', 'linkedin'].map((social, index)=> <a className="block mt-2 capitalize" href="#" key={index}>{social}</a>
                )}
            </div>
            <div className="basis-1/3">
                <h4 className="mb-10 capitalize text-zinc-500">socials</h4>
                {['Instagram', 'twitter (x?)', 'linkedin'].map((social, index)=> <a className="block mt-2 capitalize" href="#" key={index}>{social}</a>
                )}
            </div>
            <div className="basis-1/2">
                <p>Refokus is a pioneering digital agency driven by design.</p>
                <button className="flex px-4 py-1 rounded-sm bg-violet-800 mt-4"><img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275af18668cfbd759bc_webflow.svg" alt="" className="w-20" /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
