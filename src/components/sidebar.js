import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Sidebar = ({toggleMenu, setToggleMenu}) => {
  return (
    <>
        <AnimatePresence>\
            {toggleMenu && (
                <motion.div className='menu'
                    initial={{x: '+250%'}}
                    exit={{x: '+250%'}}
                    animate={{x: toggleMenu ? '150%' : 0 }}
                    transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                >
                  <div className='menuContainer'>
                    <div className='close-button' onClick={() => setToggleMenu(!toggleMenu)}>
                        <span />
                    </div>
                    <div className='menu-wrap'>
                        <h3>Hello there</h3>
                        <p>I have been expecting you</p>
                        <p>Fill in the form below, or if you prefer send me an email</p>
                        <div className='form-block'>
                            <form id='email-form' method='GET'>
                                <label for="Name" className='name-field'>your name</label>
                                <input type="text" name="name" id="Name" placeholder="Your Name" className='name-textfield'/>
                                <label for="Email" className='name-field'>your email</label>
                                <input type="email" name="email" id="Email" placeholder="Your Email" className='name-textfield'/>
                                <label for="Email" className='name-field'>What's your budget ($USD)</label>
                                <div className='checkbox-wrap'>
                                    <label className='checkbox-field'>
                                        {/* <div className='form-radioinput'></div> */}
                                        <input type="radio" id="5" value="5-10" name="budget"/>
                                        <span className='checkbox-label'>$5k - $10k</span>
                                    </label>
                                    <label className='checkbox-field'>
                                        <div className='form-radioinput'></div>
                                        <input type="radio" id="10" value="10-15" name="budget"/>
                                        <span className='checkbox-label'>$10k - $15k</span>
                                    </label>
                                    <label className='checkbox-field'>
                                        <div className='form-radioinput'></div>
                                        <input type="radio" id="15" value="15-20" name="budget"/>
                                        <span className='checkbox-label'>$15k - $20k</span>
                                    </label>
                                    <label className='checkbox-field'>
                                        <div className='form-radioinput'></div>
                                        <input type="radio" id="20" value="20-30" name="budget"/>
                                        <span className='checkbox-label'>$20k - $30k</span>
                                    </label>
                                    <label className='checkbox-field'>
                                        <div className='form-radioinput'></div>
                                        <input type="radio" id="30" value="30-50" name="budget"/>
                                        <span className='checkbox-label'>$30k - $50k</span>
                                    </label>
                                    <label className='checkbox-field'>
                                        <div className='form-radioinput'></div>
                                        <input type="radio" id="50" value="50+" name="budget"/>
                                        <span className='checkbox-label'>$50k+</span>
                                    </label>
                                </div>
                                <label for="project-details" className='fiels-label'>Project summary</label>
                                <textarea placeholder="Tell me about your website..." name='website-details' className='text-area'></textarea>
                                <input type="submit" value="send" className='submit-btn'/>
                            </form>
                        </div>
                    </div>
                  </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}

export default Sidebar
