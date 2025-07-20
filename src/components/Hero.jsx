import React from 'react'
import { Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/clothing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video for readability */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center lg:text-left lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side: Text & Button */}
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-white flex flex-col items-center lg:items-start"
        >
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-medium">
            Where Quality Meets Convenience —
          </h1>
          <div className="text-blue-900 font-semibold mt-3 text-xl md:text-3xl">
            <Typewriter
              words={[
                "Shop Smarter, Live Better.",
                "Buy Better, Live Brighter.",
                "Spend Wisely, Thrive Daily."
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              cursorBlinking="true"
              typeSpeed={45}
              deleteSpeed={35}
              delaySpeed={1000}
            />
          </div>
          <Link
            to='/items'
            smooth={true}
            duration={600}
            className="mt-6 bg-transparent text-white px-5 py-3 rounded-xl shadow-md hover:text-blue-900 hover:border-blue-900 font-semibold transition-all duration-300 border-white border-2 cursor-pointer">
            Shop Now
          </Link>
        </motion.div>
      </div>

      {/* Scrolling Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap bg-white py-2 z-20">
        <div className="inline-block animate-marquee text-4xl text-blue-900 font-bold">
          {"<This Website is Designed and Developed by Abdur Rehman./>"}
        </div>
      </div>
    </div>
  )
}

export default Hero