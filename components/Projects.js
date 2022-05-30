import React, {useEffect} from 'react'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import Image from 'next/image'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const Projects = ({first, title, desc, pictures, speed, link}) => {
    const {scrollY, scrollYProgress} = useViewportScroll()
    const y1 = useTransform(scrollYProgress, [0.5, 1], [0, -50]);
    const y2 = useTransform(scrollY, [0, 3000], [0, -400]);
    const {ref,inView,entry} = useInView({
        threshold:0.5,
        triggerOnce:true
    })

    
    const title_variant={
        initial:{x:-1000},
        animate: i =>(inView&&{
        x:0,
        transition: {
            delay: i* 0.3,
            type:'spring',
            duration: 3,
        },

        }
        )
    }


    return (
        <>
       
        <div ref = {ref} className='relative bg-gradient-to-b from-[black] to-background h-screen flex text-[white] justify-around overflow-hidden'>
       
       
            
        {first && <motion.h1 className='text-[white] text-4xl lg:text-[4vw] absolute top-5 left-10'>Projects</motion.h1>}
            
                <div className='flex flex-col flex-[0.4] items-center justify-center z-10 px-5'>
                    <motion.div className='text-4xl flex flex-col mt-20 lg:text-6xl text-[white]'> 
                    {title.map((word,i)=>
                <motion.span  style={{position:'relative', left:`${i*2}rem`}}variants={title_variant} initial="initial" animate='animate' custom={i} className='text-4xl lg:text-6xl xl:text-[4vw] '>{word}</motion.span>
                    

                    )}
                    {/* // <motion.span  variants={title_variant} initial="initial" animate='animate' custom={1}>Twitch</motion.span>
                    // <motion.span  variants={title_variant} initial="initial" animate='animate' custom={2} className='relative left-20 py-3'>Clip</motion.span>
                    // <motion.span  variants={title_variant} initial="initial" animate='animate' custom={3}className='relative left-40 '>API</motion.span> */}
                    </motion.div>

                    <div className=' w-[calc(100vw-50px)] flex border-x-2 border-b-2 rounded max-w-screen p-5 text-xl md:max-w-sm'>
                <span>{desc} </span>


                    </div>
                    </div>
            
                <Link href={link}>
                <div className=' hidden lg:flex justify-center items-center relative flex-[0.6] h-full cursor-pointer '>
                        {pictures.map((pic,i) =>
                          
                            <ParallaxLayer style={{ left:`${i*5}rem`,top:0}}  speed={speed[i]}>
                                
                            <img  src={pic} className=' max-w-[70%] object-contain' ></img> 
                                </ParallaxLayer>
                               
                            
                            
                            )}


                    
                

                    {/* <ParallaxLayer style={{ zIndex:10,top:0}}  speed={speed[0]}>
        <Image  src='/ex1.PNG' width='1000px' height='700px' objectFit='contain' ></Image> 
            </ParallaxLayer>

            <ParallaxLayer style={{left:'20rem',top:0, zIndex:9}} speed ={speed[1]}>
        <Image src='/ex2.PNG' width='1100px' height='900px' objectFit='contain' ></Image> 
            </ParallaxLayer> */}

              
                </div>
                </Link>
               

                
                <div className='absolute w-full bottom-0 bg-gradient-to-t from-[black] to-[transparent] z-2 h-[200px]'></div>
                
            
        </div>
        
        </>
    )
}

export default Projects
