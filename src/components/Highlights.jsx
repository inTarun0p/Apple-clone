import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'


const Highlights = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" })
    useGSAP(() => {
        gsap.to([".left-column",".right-column"],{
        scrollTrigger:{
            trigger:"#highlights",
            start:isMobile?"bottom bottom":"top center",
            
        },  
        y:0,
        opacity:1,
        stagger:0.5,
        duration:1 ,
        ease:"power1.inOut"   
        })
    })
    return (
        <section id='highlights'>
            <h2>There never been a better time to upgrade.</h2>
            <h3>Here's what you get with new Macbook Pro.</h3>
            <div className='masonry'>
                <div className='left-column'>
                    <div >
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Fly through demanding task up to 9.8X faster.</p>
                    </div>
                    <div >
                        <img src="/sun.png" alt="Sun" />
                        <p>A Stunning <br />
                            Liquid Retina XDR Display
                        </p>
                    </div>
                </div>
                <div className='right-column'>
                    <div className=' apple-gradient'>
                        <img src="/ai.png" alt="Ai" />
                        <p>Built For  <br />
                            <span>Apple Intelligence </span> </p>
                    </div>
                    <div >
                        <img src="/battery.png" alt="battery" />
                        <p >Up to <span className='green-gradient'>{" "}20 hours of battery life {" "}</span><br />
                            <span className='text-dark-100'>with ProMotion Display</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights