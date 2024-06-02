"use client"
import Image from "next/image"
import { Button } from '../components'

const Hero = () => {

  const handleScroll = () => {

  } 

  return (
    <div className="flex w-screen h-screen items-center justify-between">
      <div className="flex-1 pt-26 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <Button
          title="Explore Cars" 
          style="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      {/* hero image */}
      <div className="hero__container">
        <div className="relative">
          <Image
            src="/hero.png"
            alt="hero image"
            width={700}
            height={700}
            className="object-contain w-full h-full"
          />
          <div className="absolute xl:-top-64 xl:-right-1/3 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"/>
        </div>
      </div>
    </div>
  )
}

export default Hero