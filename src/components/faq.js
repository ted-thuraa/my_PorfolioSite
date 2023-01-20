import React, { useState } from 'react'
import { motion } from 'framer-motion';

const faqsItems = [
    {
        id: "0",
        title: "What frameworks do you work with?",
        details: "Depending on your needs I work with React, vue and on the backend Django, laravel or express using mern stack",
    },
    {
        id: "1",
        title: "Who would you like to work with",
        details: "Anybody with an idea and wants to bring it to life",
    },
    {
        id: "2",
        title: "How many staff do you have?",
        details: "Currently working alone but might bring in a team in future",
    },
    {
        id: "3",
        title: "Where are you located",
        details: "Currently i am working remotely",
    },
    {
        id: "4",
        title: "What information do you need to give us a proposal",
        details: "Where are you in the process? Can i support you with a discovery phase to help plan the structure, logic and content of your website?",
    },
]



const Faq = () => {

    const [expanded, setExpanded] = useState(-1)
    
    function toggleExpanded(index) {
        if(index === expanded){
            setExpanded(-1);
            return
        }
        setExpanded(index);
    }

    



  return (
    <div className='faq-service'>
        <div className='is-padding'>
            <div className='container-column'>
                <div className='faq-main-wrapper'>
                    <div className='faq-headline-wrapper'>
                        <h2>
                            <span>FAQ<span>.</span></span>
                            find answers
                        </h2>
                    </div>
                    <div className='sub-headline-wrapper'>
                        <div className='sub-headline-inner'>
                            <p>Can't find answers. drop me a message</p>
                        </div>
                    </div>
                    <div className='faq-container'> 
                        {faqsItems.map((faqItem, index) => 
                            <motion.div className='accordion-item' 
                                key={index}
                                onClick={() => toggleExpanded(index)}
                            >
                                <div className='dropdown-toggle-text'
                                >
                                    <a className='faq-link' >
                                        <div className='toggle-text'>
                                            {faqItem.title}
                                        </div>
                                        <div className='toggle-icon'>
                                            <motion.span 
                                                animate={{ rotate: expanded === index ? 0 : 45, x: 3 }}
                                                transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                                            ></motion.span>
                                            <motion.span
                                                animate={{ rotate: expanded === index ? 0 : -45, x: -3 }}
                                                transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                                            ></motion.span>
                                        </div>
                                    </a>
                                </div>
                                <motion.div className='dropdown-body-open'
                                    animate={{ height : expanded === index ? "100%" : "0" }}
                                    transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
                                >
                                    <div className='dropdown-body-cont'>
                                        <p>
                                            {faqItem.details}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                        )}
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
