import { useGSAP } from '@gsap/react'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
    useGSAP(()=>{
        gsap.from(".text",{
            y:100,
            opacity:0,
            duration:0.3,
            scrollTrigger:{
                trigger:".box",
                scroller:"body",
                start:"-10% 20%",
                end:"20% 20%",
                // markers:true,
                scrub:true
                
            }
        })
    })
  return (
    <div className='w-full h-[100vh] object-contain relative font-integral text-center box '>
       <video src=""></video>
       <h2 className='max-w-[20%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] leading-none text z-[10] text-white'>What we do - With our capabilities we support brands and products to satisfy their needs at all stages of their product's life cycle.</h2>
    </div>
  )
}

export default Page4
