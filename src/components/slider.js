import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 

import webgif2 from '../assets/images/portfolio2.png';
import webgif3 from '../assets/images/portfolio3.png';
import webgif4 from '../assets/images/portfolio1.png';


 const items = [
     {
        webtype: 'Social',
        webtitle: 'Studybud',
        location: 'L.A',
        img: webgif2,
        altText: 'Image 2',
        imgBG: {
            background: 'hsla(167.16157205240174, 100.00%, 93.75%, 1.00)',
        }
     },
     {
        webtype: 'Software',
        webtitle: 'CVscan',
        location: 'California',
        img: webgif3,
        altText: 'Image 3',
        imgBG: {
            background: '#C9DDDB',
        }
     },
     {
        webtype: 'Agency',
        webtitle: 'Agency',
        location: 'kenya',
        img: webgif4,
        altText: 'Image 4',
        imgBG: {
            background: '#E8CDC2',
        }
     },
    //  {
    //     webtype: 'Insurance',
    //     webtitle: 'Jotan',
    //     location: 'NewYork',
    //     img: webgif2,
    //     altText: 'Image 2',
    //     imgBG: {
    //         background: '#CEB597',
    //     }
    //  },
    //  {
    //     webtype: 'Marketing',
    //     webtitle: 'Janet Machuka',
    //     location: 'Kenya',
    //     img: webgif3,
    //     altText: 'Image 3',
    //     imgBG: {
    //         background: '#CEB597',
    //     }
    //  },
    //  {
    //     webtype: 'Health Tech',
    //     webtitle: 'Brandy Health',
    //     location: 'South Africa',
    //     img: webgif4,
    //     altText: 'Image 4',
    //     imgBG: {
    //         background: '#C9DDDB',
    //     }
    //  }
 ];

const Slider = () => {
    //console.log(items);
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    //triggered when the page loads inthe screen
    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        const scrollableWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
        setWidth(scrollableWidth);
    }, []);
    
    
    return (
        <div className='portfolio'>
            <div className='fullwidth-slider'>
                <div className='centered-text'>
                    <h2><span>Work<span>.</span></span>portfolio and cases</h2>
                    {/* <div className='arrows'>
                        <a href='/' className='arrow-next'>next</a>
                        <a href='/' className='arrow-prev'>prev</a>
                    </div> */}
                </div>
                <div className='projects-wrapper'>
                    <motion.div className='project-list' ref={carousel}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='draggable-track'>
                            {items.map((dragItem) => {
                                return (
                                    <motion.div className='project-item'>
                                        <div className='project-card'>
                                            <div className='brand-background' style={dragItem.imgBG}>
                                                <div className='project-image-wrap'>
                                                    <img
                                                        height='100%'
                                                        width='100%'
                                                        src={dragItem.img}
                                                        alt={dragItem.altText}
                                                    />
                                                </div>
                                            </div>
                                            <div className='projectdetails-wrapper'>
                                                <div className='project-text-wrapper'>
                                                    <div className='project-sub-detail'>
                                                        <div className='badge-location'>                                    
                                                            <div className='location-text'>{dragItem.location}</div>
                                                        </div>
                                                        <div className='badge-type'>
                                                            <div className='badge-text'>
                                                                {dragItem.webtype}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className='project-name'>{dragItem.webtitle}</h5>
                                                </div>
                                                <div className='project-button-wrap'>
                                                    <a href='/' className='viewproj-btn'>View project</a>
                                                    <a href='/' className='viewsite-btn'>View site</a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                );
                            })}
                        </motion.div>
                            
                        
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
