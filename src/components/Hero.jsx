import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET IN</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Beast<span className='text-blue-400'>Mode</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I acknowledge that by using the <span className='text-blue-400 font-medium'>Beastmode</span>  Workout App, I risk becoming an <span className='text-blue-400 font-medium'>unstoppable powerhouse</span>, obliterating limits and possibly doorframes.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}