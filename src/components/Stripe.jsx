/* eslint-disable react/prop-types */

function Stripe({url,number}) {
  return (
    <div className="w-full px-4 py-2 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-100 flex items-center justify-between">
      <img src={url} alt="" />
      <span className="font-semibold">{number}</span>
    </div>
  )
}

export default Stripe
