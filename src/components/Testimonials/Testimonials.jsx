import { useState, useRef, useEffect } from 'react'
import './Testimonials.css'

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(1)
    const sliderRef = useRef(null)

    const testimonials = [
        {
            name: 'Allie Kuzyk',
            company: 'Google®',
            image: 'https://media.wearemotto.com/wp-content/uploads/2022/10/04161029/Google-testimonial.jpg',
            quote: "I've referred Thoughtshop® to anyone who asks for an all-around strategic and branding powerhouse. I've always felt we are more than just a client, but true partners.",
        },
        {
            name: 'Annie Wang',
            company: 'Artnet',
            image: 'https://media.wearemotto.com/wp-content/uploads/2026/01/04144337/Artnet-testimonial.jpg',
            quote: "Thoughtshop® absolutely blew us away. They united our leadership under a common vision and exceeded our team's expectations by 100x.",
        },
        {
            name: 'Annie Pei',
            company: 'Nomina',
            image: 'https://media.wearemotto.com/wp-content/uploads/2025/07/04143806/Nomina-testimonial-1.jpg',
            quote: "Thoughtshop® is the best team I've ever worked with. The team brings a rare balance of sharp creative thinking, operational rigor, and skillful stakeholder management.",
        },
        {
            name: 'Bryan Harper',
            company: 'Minnesota Vikings',
            image: 'https://media.wearemotto.com/wp-content/uploads/2026/01/04144345/Minnesota-vikings-testimonial.jpg',
            quote: "Thoughtshop® sparked a trail of thought we hadn't explored, clarifying how our vision could translate into more ambitious, bold moves.",
        },
        {
            name: 'Nathan Hallmark',
            company: 'FasterLines',
            image: 'https://media.wearemotto.com/wp-content/uploads/2026/01/04144340/FasterLines-testimonial.jpg',
            quote: "Thoughtshop's level of brilliance surpassed my greatest hope. The team provided an incredible experience of self discovery and realization of who we are.",
        },
        {
            name: 'Hicham Chahine',
            company: 'Ninjas in Pyjamas',
            image: 'https://media.wearemotto.com/wp-content/uploads/2026/01/04144348/NIP-testimonial.jpg',
            quote: "Our rapid growth and global success were shaped by the brilliant team at Thoughtshop®, who challenged our thinking and guided us through a successful rebrand.",
        },
        {
            name: 'Camilla Cornwell',
            company: 'Goodnotes',
            image: 'https://media.wearemotto.com/wp-content/uploads/2022/10/04144507/Goodnotes-testimonial.jpg',
            quote: "We have spine tingles. It's amazing to see the strategy and brand come together into such a cohesive and inspiring brand narrative.",
        },
    ]

    useEffect(() => {
        const slider = sliderRef.current
        if (slider) {
            const handleScroll = () => {
                const slideWidth = slider.children[0]?.offsetWidth || 0
                const newSlide = Math.round(slider.scrollLeft / (slideWidth + 24)) + 1
                setCurrentSlide(Math.min(newSlide, testimonials.length))
            }
            slider.addEventListener('scroll', handleScroll)
            return () => slider.removeEventListener('scroll', handleScroll)
        }
    }, [testimonials.length])

    return (
        <section className="max-w-full relative z-4 pb-200 s:pb-300 bg-gray-bg overflow-hidden select-none">
            <div className="site-grid items-end">
                <h2 className="h2 uppercase col-span-6 s:col-span-7">
                    Praise from clients
                </h2>
                <p className="col-span-4 s:col-start-8 s:col-span-3 s:pr-30 pb-20 my-40 s:my-0">
                    What leaders say about working with Thoughtshop®
                </p>
                <div className="col-span-6 s:col-span-2 font-medium pb-20 s:text-right whitespace-nowrap">
                    <span>{currentSlide}</span> — {testimonials.length}
                </div>
            </div>
            <div className="site-max">
                <div ref={sliderRef} className="testimonials__slider relative flex s:mt-90">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonials__slide min-w-full max-w-full s:min-w-[65rem] s:max-w-[65rem] bg-white mr-12 s:mr-24 rounded-[0.9rem] p-40 s:p-80"
                        >
                            <div className="flex flex-col s:flex-row items-start s:items-center">
                                <figure className="min-w-[6.9rem] media-fill relative max-w-[6.9rem] aspect-square rounded-full overflow-hidden bg-gray mb-20 s:mb-0 s:mr-25">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        draggable="false"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </figure>
                                <p className="flex flex-col">
                                    {testimonial.name}
                                    <span className="text-gray-7">{testimonial.company}</span>
                                </p>
                            </div>
                            <blockquote className="text-20 s:text-26 mt-40 s:mt-80">
                                "{testimonial.quote}"
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
