import React from 'react'
import {motion} from 'framer-motion'

export const HeroContent = () => {
  return (
    <motion.div
        initial = "hidden"
        animate="visible"
        className='flex flex-row items-center justift-center px-20 mt-40 w-full z-[20]'>
            <div className="h-full w-full flex flex-col gap-5 justifu-center m-auto text-start">
                <motion.div
                    className="Welcome-box py-[15px] px-[4px] border border -[#7042f88b] opacity=[0.9]">
                        this will be the div that moves in
                    </motion.div>
            </div>
        </motion.div>
  )
}

