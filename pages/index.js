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
    <Head>
      <title>Moe Zalzale</title>
      <meta name="description" content="Moes Porfolio" />
      <meta name="title" property="og:title" content="Moe Zalzale" />
      <meta property="og:type" content="Website" />
      <meta name="image" property="og:image" content="/head.PNG" />
      <meta name="description" property="og:description" content="Moes Portfolio" />
      <meta name="author" content="Moe Zalzale" />


    </Head>



   <Parallax >
      <Main/>
      

      
      <Projects
      first
      title = {['Twitch', 'Clip','Api']}
      desc = 'A full stack application which uses a Django server to fetch popular clips from a streaming platform to clearly display them to the user using React.'
      speed={[-0.07,-0.5]}
      link='https://twitchclips.vercel.app/'
      pictures = {["/ex1.PNG","/ex2.PNG"]}
      />

    <Projects
      title = {['Calendar', 'Facts']}
      desc = "A single page react app that displays facts based on the date picked, user can also 'like' a fact and add it to a list."
      speed={[-0.12]}
      link='https://calendar-facts.vercel.app/'
      pictures={["/calendar.PNG"]}
      />

    <Projects
      title = {['eCommerce',"Store"]}
      desc = 'A React application that allows the user to search and add items to their cart. Each item is associated to a seller through a relational database and fetched using GraphQL. '
      speed={[-0.06]}
      link ='https://ecommerce-moezalzale.vercel.app/'
      pictures={["/ecommerce.png"]}
      />

      <Skills/>

    <Contact/>

      </Parallax>

  
      




   
   
    </div>
   
  )
}

export default Home
