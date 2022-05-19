import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react'
import {done} from '../animationSlice'
import {useSelector, useDispatch} from 'react-redux'
import Image from 'next/image'
import Header from './Header'
function Main() {
    const dispatch = useDispatch()

    const isDone = useSelector((state)=> state.animation.value)
    const first = useAnimation()

    const seq = async () =>{
        await first.start({y:100, transition: {type:'spring',duration:1.5}})
        first.start({scale:1.5,y:0, transition: {type:'spring', duration:1}})
        dispatch(done())

    }

    useEffect(()=>{
        seq()
    },[])
   
    return (
    <div className='min-h-screen flex flex-col items-center bg-mainbg bg-cover'>
        <Header/>
        <div className='w-full pt-5 md:pt-[10rem] items-center justify-center flex flex-col'>
        <motion.h1 className='text-[20px] md:text-[100px] drop-shadow-xl'
        initial ={{y:500}}
        animate = {first}
        >Moe Zalzale</motion.h1>

        {isDone&& 
        <motion.p className='max-w-2xl p-5 rounded border-b-2 border-x-2 text-xl overflow-hidden'
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition ={{type:'spring',duration:2}}
        >Welcome to my portfolio! I am a software developer from Ottawa,Ontario and i specialize in Reactjs. I love to create apps on my free time and learn new things, I am currently learning Nextjs, Redux and Framer-motion. </motion.p>}
        </div>
    </div>
    )
}

export default Main
