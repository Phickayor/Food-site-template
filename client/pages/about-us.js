import AboutBanner from '@/components/AboutBanner'
import Goals from '@/components/Goals'
import OurStory from '@/components/OurStory'
// import Ratings from '@/components/Ratings'
import Team from '@/components/Team'
import Services from '@/components/WhyChooseUs'
import React from 'react'
function AboutUs() {
    return (
        <div>
            <AboutBanner />
            <div className='mx-auto w-11/12'>
                <OurStory />
                <Goals />
                <Team />
                <Services />
            </div>
            {/* <Ratings /> */}
        </div>
    )
}

export default AboutUs