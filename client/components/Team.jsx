import React from 'react'
import team from '../utils/team.json'
function Team() {
    return (
        <div className='py-10 space-y-10'>
            <div className='space-y-4'>
                <div className='lg:flex justify-around'>
                    <div className='flex flex-col justify-center space-y-4'>
                        <p className=' px-2 w-fit py-1 border-l-4 bg-slate-200 border-bordercolor'>The Team</p>
                        <h1 className='text-5xl  font-semibold'>Meet the <b className='text-bordercolor'>Team</b></h1>
                        <p className='text-lg leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquam voluptatibus cupiditate sunt minus accusantium molestias.
                        </p>
                    </div>
                    <div className='w-full grid py-10 grid-cols-2 md:grid-cols-3 gap-8'>
                        {team.map((member, index) => (
                            < div key={index} className='bg-gradient-to-br text-white  from-[#651549] via-[#961b0d] to-bordercolor text-center  p-4 rounded-3xl space-y-3 hover:scale-110 cursor-pointer'  >
                                <img src={member.image} alt={member.name} className='rounded-3xl self-center' />
                                <div>
                                    <h1 className='text-xl font-semibold'>{member.name}</h1>
                                    <h1 className='text-md font-extralight text-slate-100'>{member.role}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Team