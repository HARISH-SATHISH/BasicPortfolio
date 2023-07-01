import Header from './components/Header'
import { Inter } from 'next/font/google'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Skill/>
    <Projects/>
    <Footer/>
    </>
  )
}
