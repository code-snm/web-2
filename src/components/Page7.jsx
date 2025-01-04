import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const Page7 = () => {


    // useGSAP(()=>{
    //      gsap.to(".text",{
    //         y:50,
    //         opacity:0,
    //         scrollTrigger:{
    //             trigger:".text",
    //             scroller:"body",
    //             start:"top 80%",
    //             markers:true,
    //             yoyo:true
    //         }
    //      })
    // })


  return (
    <div className='w-full h-[100vh] flex justify-center items-center flex-col font-integral fit2 relative'>
         <h1 className='w-[55%] text-[3.1rem] leading-none text-center z-[10] text'>We are <span className='text-red-500'>global</span> we serve customers all over the world</h1>
    </div>
  )
}

export default Page7
