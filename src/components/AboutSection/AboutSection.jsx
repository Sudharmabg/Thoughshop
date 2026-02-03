import { useRef } from 'react'
import './AboutSection.css'

const AboutSection = () => {
    const sliderRef = useRef(null)

    const locations = [
        {
            image: 'https://media.wearemotto.com/wp-content/uploads/2023/01/20065119/Portrait-Studioi-opt.jpg',
            location: 'London',
            aspectRatio: '2011 / 2800',
        },
        {
            image: 'https://media.wearemotto.com/wp-content/uploads/2023/07/10151440/motto-hq-water-street.jpg',
            location: 'NYC',
            aspectRatio: '883 / 598',
        },
        {
            image: 'https://media.wearemotto.com/wp-content/uploads/2025/01/05093011/Berlin.jpg',
            location: 'Berlin',
            aspectRatio: '883 / 598',
        },
    ]

    return (
        <section id="about" className="max-w-full grid grid-cols-1 relative z-4 mb-200 s:mb-300 overflow-hidden select-none">
            <div className="site-grid smax:order-1">
                <h2 className="col-span-6 s:col-span-12 h1 smax:text-80 smax:leading-[1.2] uppercase s:whitespace-nowrap mb-20 overflow-hidden">
                    About Thoughtshop<span className="superscript">®</span>
                </h2>
            </div>

            <div className="site-max smax:order-3 mt-90 s:mt-0">
                <div ref={sliderRef} className="about-section__slider relative flex">
                    {locations.map((loc, index) => (
                        <div key={index} className="about-section__slide mr-12 s:mr-24">
                            <div
                                className="relative h-[30rem] s:h-[60rem]"
                                style={{ aspectRatio: loc.aspectRatio }}
                                role="presentation"
                            >
                                <figure className="relative media-fill size-full">
                                    <img
                                        alt={`Thoughtshop ${loc.location}`}
                                        draggable="false"
                                        className="block w-full object-cover"
                                        style={{ aspectRatio: loc.aspectRatio }}
                                        src={loc.image}
                                        loading="lazy"
                                    />
                                </figure>
                            </div>
                            <p className="uppercase small-title smax:text-21 smax:leading-[1.35] mt-15 s:mt-20">
                                Thoughtshop®<br />
                                ({loc.location})
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="site-grid smax:order-2">
                <div className="col-start-1 s:col-start-5 w-[90%] s:w-full col-span-6 mt-25 s:mt-100">
                    <p className="h3 font-sans leading-[1.1]">
                        Thoughtshop® is proudly among the 0.01% of branding agencies owned by women.
                        It all started when two college dropouts with $250 decided to do brand differently.
                    </p>
                    <a href="#about" className="inline-flex uline-double mt-70 s:mt-60 mb-10">
                        Learn more about Thoughtshop®
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
