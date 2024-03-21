import Stripe from "./Stripe"

function Stripes() {

  var data = [
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",number:48},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg",number:2},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",number:11},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",number:48},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",number:2},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg",number:11}
  ]
  return (
    <div className="flex items-center mt-9">
      {
        data.map((item, index) => (
          <Stripe key={index} url={item.url} number={item.number}/>
        ))
      }
    </div>
  )
}

export default Stripes
