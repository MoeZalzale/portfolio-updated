import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import {useAnimation} from 'framer-motion'
import {useEffect} from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const Home = () => {
  
  return (
    
    <div className='font-main'> 
   <Parallax >
      <Main/>
      

      
      <Projects
      first
      title = {['Twitch', 'Clip','Api']}
      desc = 'A full stack application which uses a Django server to fetch popular clips from a streaming platform to clearly display them to the user using React.'
      speed={[-0.07,-0.5]}
      link='https://github.com/MoeZalzale'
      pictures = {["/ex1.PNG","/ex2.PNG"]}
      />

    <Projects
      title = {['COVID', 'Tracker']}
      desc = 'A single page react app that tracks covid cases across the provinces of Canada'
      speed={[-0.12]}
      link='https://covid-tracker-7baa4.web.app/'
      pictures={["/covid.PNG"]}
      />

    <Projects
      title = {['Password',"Wordlist",'Generator']}
      desc = 'A Python web application which generates a list of passwords based on the word submitted by the user'
      speed={[-0.06]}
      link ='http://moezalzale.pythonanywhere.com/'
      pictures={["/password.PNG"]}
      />

      <Skills/>

    <Contact/>

      </Parallax>

  
      




   
   
    </div>
   
  )
}

export default Home
