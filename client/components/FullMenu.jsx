import React from 'react'
import Deserts from './Deserts'
import Appetizers from './Appetizers'
import Grills from './Grills'
function FullMenu() {
    return (
        <div className='my-5'>
            <h1 className='text-5xl font-extrabold text-center py-4 sticky top-16 lg:top-20 backdrop-blur-md '>Our <span className='text-bordercolor'>Menu</span></h1>
            <div className='mx-auto w-11/12 mt-8 space-y-10'>
                <Deserts />
                <Appetizers />
                <Grills />
            </div>
        </div >
    )
}

export default FullMenu