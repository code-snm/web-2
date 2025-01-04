import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {

    useGSAP(()=>{
        gsap.from(".work",{
            y:50,
            opacity:0,
            stagger:0.2,
            duration:0.2,
            scrollTrigger:{
                trigger:".work",
                scroller:"body",
                start:"-60% top",
                end:"-55% top",
                // markers:true,
                yoyo:true,
                // scrub:true
                
            }
        })
    })
    useGSAP(()=>{
        let vedios = document.querySelectorAll(".vid");
        vedios.forEach((vid)=>{
            gsap.to(vid,{
                scale:1.2,
                scrollTrigger:{
                    trigger:vid,
                    scroller:"body",
                    start:"top 10%",
                    end:"bottom 20%",
                    // markers:true,
                    scrub:true
                }
            })

        })
       
    })

  return (
    <div className='w-full h-[400vh] font-integral relative'>
        <div className='w-full h-[100vh] border-2 border-black flex justify-end items-center flex-col sticky top-0 left-0 '>
             <h2 className='w-[20%] text-sm text-center leading-none'>SMART AND BEAUTIFUL EXPERIENCES THAT WE FORGE</h2>
             <h1 className='text-[18rem] '>
                <span className='work'>W</span>
                <span className='work'>O</span>
                <span className='work'>R</span>
                <span className='work'>K</span>
                <span className='work'>S</span>
             </h1>
        </div>
        <div className='w-full h-[300vh] border-2  '>
            <div className='w-full h-[100vh]  relative'>
                <div className='absolute top-4 left-6 w-[16vw] rounded-xl h-[24vh] overflow-hidden vid'>
                    <video className='w-full h-full object-cover' autoPlay loop muted  src="https://cdn.prod.website-files.com/65764cc4a132b0f87177abaf/65fb1c16d933f64f5500a560_04-transcode.mp4"></video>
                </div>
                <div className='absolute bottom-4 right-4 rounded-xl h-[62vh] w-[20vw] overflow-hidden vid'>
                    <video className='w-full h-full object-cover' autoPlay loop muted src="https://cdn.prod.website-files.com/65764cc4a132b0f87177abaf/65fb41d43cc0f0b585757938_tass-transcode.mp4"></video>
                </div>
            </div>
            <div className='w-full h-[100vh]  relative'>
                <div className='absolute top-4 left-10 rounded-xl h-[50vh] w-[35vw] overflow-hidden vid'>
                    <video className='w-full h-full object-cover' autoPlay loop muted src="https://cdn.prod.website-files.com/65764cc4a132b0f87177abaf/65f49ba6f9eb362af61198e7_pexels-ruslan-khmelevsky-18247083%20(240p)-transcode.mp4"></video>
                </div>
                <div className='absolute bottom-4 right-6 w-[16vw] rounded-xl h-[24vh] overflow-hidden vid'>
                    <video className='w-full h-full object-cover' autoPlay loop muted src="https://cdn.prod.website-files.com/65764cc4a132b0f87177abaf/65fb1c0c620f4da5c7703bb0_02-transcode.mp4"></video>
                </div>
            </div>
            <div className='w-full h-[100vh]  relative'>
            <div className='absolute top-4 left-10 rounded-xl h-[80vh] w-[30vw] overflow-hidden vid'>
                    <video className='w-full h-full object-cover' autoPlay loop muted src="https://cdn.prod.website-files.com/65764cc4a132b0f87177abaf/65fb1bd7ab70346cd3698600_01-transcode.mp4"></video>
                </div>
                <div className='absolute bottom-4 right-6 w-[16vw] rounded-xl h-[24vh] overflow-hidden vid'>
                    <video className='w-full h-full object-cover' autoPlay loop muted src="https://cdn.prod.website-files.com/65764cc4a132b0f87177abaf/66032f5771125ba72e61b317_globe-transcode.mp4"></video>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Page5
