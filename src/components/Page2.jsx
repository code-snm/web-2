import React from 'react'

const Page2 = () => {
  return (
    <div className='w-full h-[112vh] font-integral'>
    
       <div className='w-full h-[100vh] px-3 py-3'>
         <video autoPlay loop muted className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/65764cc4a132b0f87177abaf/66032c13697f973ea37e8126_rocket-transcode.mp4"></video>
       </div>
       <div className='flex p-1 justify-evenly items-center text-center'>
          <h1 className='text-xs'>350+ projects done</h1>
          <h1 className='text-3xl pb-4'>.</h1>
          <h1 className='text-xs'>23 INTERNATIONAL AWARDS</h1>
          <h1 className='text-3xl pb-4'>.</h1>
          <h1 className='text-xs'>12+ YEARS OF EXPERIENCE</h1>
          <h1 className='text-3xl pb-4'>.</h1>
          <h1 className='text-xs'>WORKING GLOBALLY</h1>
       </div>
    </div>
  )
}

export default Page2
