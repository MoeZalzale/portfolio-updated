import Link from 'next/link'
import {AnimationControls, motion, useAnimation} from 'framer-motion'
import { useEffect,useState } from 'react'
import {useSelector} from 'react-redux'
const Header = () => {
    const isDone = useSelector ((state) => state.animation.value)

    return (
        <motion.header
        initial ={{y:-100,opacity:0}}
         animate={isDone&&{y:0,opacity:1}}
         transition={{type: 'spring', duration:1}}
         className='w-full pb-10 md:pb-0'
        >

                
         <div className=' flex max-w-7xl mx-auto items-center justify-around text-4xl pt-5'>
            <Link href='/MoeZalzale.pdf'> 
            <h2 className='cursor-pointer drop-shadow-md text-xl md:text-4xl'>Resume</h2>
            </Link>

            <Link href='https://github.com/MoeZalzale'> 
            <h2 className='cursor-pointer  drop-shadow-md text-xl md:text-4xl'>Github</h2>
            </Link>

            <Link href='https://www.linkedin.com/in/moezalzale/'> 
            <h2 className='cursor-pointer  drop-shadow-md text-xl md:text-4xl'>LinkedIn</h2>
            </Link>
        </div>
        </motion.header>
    )
}

export default Header