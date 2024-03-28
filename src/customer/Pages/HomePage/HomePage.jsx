import React from 'react'
import Maincarosal from '../../components/HomeCarosal/Maincarosal'
import HomeSectionCarosal from '../../components/HomeSectionCarsoal/HomeSectionCarosal'

const HomePage = () => {
    return (
        <div>
            <div>
                <Maincarosal />
            </div>
            <div className='space-y-10 py-10 '>
                <HomeSectionCarosal />
                <HomeSectionCarosal />
                <HomeSectionCarosal />
                <HomeSectionCarosal />
                <HomeSectionCarosal />


            </div>

        </div>
    )
}

export default HomePage 