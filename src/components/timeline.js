import React from 'react'

import timeline1 from '../assets/images/discovery.jpg';
import timeline2 from '../assets/images/uxdesign.jpg';
import timeline3 from '../assets/images/branding.jpg';
import timeline4 from '../assets/images/development.jpg';
import timeline5 from '../assets/images/onboarding.jpg';

const Timeline = () => {
  return (
    <div className='timeline-main'>
        <div className='container-timeline'>
            <div className='timeline-component'>
                <div className='timeline-progress'>
                    <div className='timeline-progress-bar'></div>
                </div>
                <div className='timeline-item'>
                    <div className='timeline-left'>
                        <h4>Discovery workshop</h4>
                    </div>
                    <div className='timeline-centre'>
                        <div className='timeline-circle'></div>
                    </div>
                    <div className='timeline-right'>
                        <div className='right-text-wrapper'>
                            <p>Discuss your goals, determine success metrics,
                                 identify problems to solve and define visitors of the website. This can take place in-person or virtually.
                            </p>
                        </div>
                        <div className='right-img-wrapper'>
                            <img
                                src={timeline1}
                                alt=''
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                </div>
                <div className='timeline-item'>
                    <div className='timeline-left'>
                        <h4>UX design + content strategy</h4>
                    </div>
                    <div className='timeline-centre'>
                        <div className='timeline-circle'></div>
                    </div>
                    <div className='timeline-right'>
                        <div className='right-text-wrapper'>
                            <p>Design wireframes for the entire website to map out 
                            key customer journeys and understand what content will be 
                            needed to communicate your product or service.
                            </p>
                        </div>
                        <div className='right-img-wrapper'>
                            <img
                                src={timeline2}
                                alt=''
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                </div>
                <div className='timeline-item'>
                    <div className='timeline-left'>
                        <h4>Visual design + branding</h4>
                    </div>
                    <div className='timeline-centre'>
                        <div className='timeline-circle'></div>
                    </div>
                    <div className='timeline-right'>
                        <div className='right-text-wrapper'>
                            <p>Define visual direction of the website and translate 
                                the wireframes into high-fidelity designs that successfully 
                                communicate your company’s brand and product or service.
                            </p>
                        </div>
                        <div className='right-img-wrapper'>
                            <img
                                src={timeline3}
                                alt=''
                                width='100%'
                                height='500px'
                            />
                        </div>
                    </div>
                </div>
                <div className='timeline-item'>
                    <div className='timeline-left'>
                        <h4>development</h4>
                    </div>
                    <div className='timeline-centre'>
                        <div className='timeline-circle'></div>
                    </div>
                    <div className='timeline-right'>
                        <div className='right-text-wrapper'>
                            <p>Build out the high-fidelity designs into a custom 
                                website & build out the business logic on the backend.
                            </p>
                        </div>
                        <div className='right-img-wrapper'>
                            <img
                                src={timeline4}
                                alt=''
                                width='100%'
                                height='600px'
                            />
                        </div>
                    </div>
                </div>
                <div className='timeline-item'>
                    <div className='timeline-left'>
                        <h4>Onboarding</h4>
                    </div>
                    <div className='timeline-centre'>
                        <div className='timeline-circle'></div>
                    </div>
                    <div className='timeline-right'>
                        <div className='right-text-wrapper'>
                            <p>Provide  you with a 1-on-1 training session and getting 
                                you to be familiar with your new website.
                            </p>
                        </div>
                        <div className='right-img-wrapper'>
                            <img
                                src={timeline5}
                                alt=''
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline
