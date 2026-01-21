import React from 'react'
import Container from './Container'

const Why = () => {
    return (
        <div>
            <Container>
                <div className="">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2">
                        <p className='font-pop text-[18px] text-primary pb-7 '>
                            Blessing welcomed ladyship she met humoured sir <br /> breeding her. Six curiosity day assurance bed necessary.
                        </p>

                        <button className='py-6 px-19.5 rounded-br-[45px] rounded-tl-[45px]  bg-tertiary text-white hover:font-bold cursor-pointer'>
                            Explore
                        </button>
                        </div>
                        <div className="w-1/2">
                         <h2 className='font-pop text-[54px] text-secondary font-medium'>
                            Why Choose us for best construction experience
                        </h2>
                        </div>
                       
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Why