import React from 'react'
import BanImg from "../assets/banner.png"
import Container from './Container'

const Banner = () => {
    return (
        <Container>
            <div>
                <div className="flex">
                    <div className="">
                        <h1 className='pt-29.5 pb-10 font-pop font-bold text-[64px] w-170.5 '>
                            Masters of
                            Consistency and
                            Quality.
                        </h1>
                        <p className='font-pop text-[18px] text-secondary w-135.25 pb-10'>
                            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
                        </p>

                        <div className="flex gap-20">
                            <div className="">
                                <h2 className='py-6 px-19.5 rounded-br-[45px] rounded-tl-[45px]  bg-tertiary text-white hover:font-bold cursor-pointer'>Explore</h2>
                            </div>
                            <div className="">
                                <h2 className='py-6 px-19.5 border-2 border-tertiary rounded-br-[45px] rounded-tl-[45px]  text-tertiary hover:font-bold cursor-pointer'>Contact Us</h2>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <img src={BanImg} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Banner