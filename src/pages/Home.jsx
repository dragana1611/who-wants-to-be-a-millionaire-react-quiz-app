// import React from 'react'
import Header from '../components/Header'
import Menu from '../components/menuComponents/Menu'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="text-xl flex  justify-center align-middle text-white h-screen w-screen bg-[url('./assets/images/video-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col justify-between">
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  )
}

export default Home
