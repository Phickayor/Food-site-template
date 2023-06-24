import React from 'react'

function Goals() {
    return (
        <div className='py-5 space-y-10 lg:space-y-20'>
            <div className='space-y-4'>
                <p className=' px-2 w-fit py-1 border-l-4 bg-slate-200 border-bordercolor'>Our Goals</p>
                <h1 className='text-3xl leading-10 md:text-4xl font-semibold'>Our <b className='text-bordercolor'>Mission</b> & <b className='text-bordercolor'>Vision</b></h1>
            </div>
            <div className='lg:flex lg:space-y-0 space-y-10'>
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className=' lg:px-10 px-2 text-center mx-auto lg:w-8/12'>
                    <h1 className="md:text-5xl text-3xl mb-5 font-semibold text-slate-700">Our <b className='text-bordercolor'>Mission</b></h1>
                    <p className=' lg:text-lg '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit illo saepe similique ad tenetur amet. Vel ex aperiam saepe nulla hic? Eveniet distinctio illum quos officiis expedita molestiae perferendis harum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit illo saepe similique ad tenetur amet.
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className=' lg:px-10 px-2 lg:border-l-2 text-center mx-auto lg:w-8/12'>
                    <h1 className="md:text-5xl text-3xl mb-5 font-semibold text-slate-700">Our <b className='text-bordercolor'>Vision</b></h1>
                    <p className='lg:text-lg'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit illo saepe similique ad tenetur amet. Vel ex aperiam saepe nulla hic? Eveniet distinctio illum quos officiis expedita molestiae perferendis harum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit illo saepe similique ad tenetur amet.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Goals
