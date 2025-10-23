import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef()

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2
        }
    }, []   )
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src="/public/title.png" alt="Macook Title" />
        </div>
        <video src="/public/videos/hero.mp4" autoPlay playsInline muted ref={videoRef}></video>
        <button>Buy</button>
        <p >From $1599 or $133.25/mo. for 12 mo.</p>
    </section>
  )
}

export default Hero