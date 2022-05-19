import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import {motion} from 'framer-motion'

const Skills = () => {



const variant =  {
        animate: i=> ({x:i%2===0?[`90vw`,`0vw`]:['0vw','90vw'],
                y:[0,75],
        transition: {duration:10,type:'spring', yoyo:Infinity, delay: i,
        y:{
                duration:1,yoyo:Infinity
        }
         }

        })
   
   }




    return (
        <div className=' h-screen relative bg-rick bg-cover bg-bottom bg-no-repeat w-full' >
            

            <h1 className='absolute top-5 left-10 m-auto text-[white] text-8xl'>Skills</h1>
            <img src='/CHALKBOARD.png' className='absolute left-[2rem] w-[20rem] bottom-[20rem] md:left-[1rem] lg:w-[20rem] lg:bottom-1 lg:left-[20rem] xl:w-[30rem]' ></img>

            <div className='p-10 hidden relative top-0 md:flex md:flex-col md:justify-around md:h-[40%]'>

            <motion.img variants={variant}  animate='animate' custom={1} src='/react.png' width='125px' ></motion.img>
            <motion.img variants={variant} animate='animate' custom={2} src='/redux.png' width='125px' ></motion.img>
            <motion.img className='bg-[white] p-2 rounded' variants={variant} animate="animate" custom={3} src='/next.png' width='125px' ></motion.img>
            <motion.img  variants={variant} animate="animate" custom={4} src='/js.png' height='100px' width='100px' ></motion.img>
            <motion.img  variants={variant} animate="animate" custom={5} src='/python.png' width='200px' ></motion.img>

            </div>
            
        </div>
    )
}

export default Skills
