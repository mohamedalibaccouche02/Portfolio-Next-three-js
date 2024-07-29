"use client"
import React, { useState } from 'react'
import { useEffect } from 'react'

const useScreenSize = () => {
    const [screenSize, setscreenSize] = useState()

    useEffect(() => {
        function getScreenSize() {
            return window.innerWidth
        }



        function handleResize() {
            setscreenSize(getScreenSize())}


            handleResize()

            window.addEventListener('resize', handleResize)

            return () => window.removeEventListener('resize', handleResize)
        },
        [])



  return screenSize
  
}

export default useScreenSize
