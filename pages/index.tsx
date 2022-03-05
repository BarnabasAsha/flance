import type { NextPage } from 'next'
import Head from 'next/head'
import { Contact, Features, Hero, JoinTeams, SaveTime, Testimonials, Trust, WhyFlance } from '../components/templates'


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Trust />
      <Features />
      <WhyFlance />
      <SaveTime />
      <JoinTeams />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home
