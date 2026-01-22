import React from 'react'
import BanImg from "../assets/banner.png"
import FirstImg from "../assets/first.png"
import SecendImg from "../assets/secend.png"
import ThirdImg from "../assets/third.png"
import OneImg from "../assets/one.png"
import TwoImg from "../assets/two.png"
import ThreeImg from "../assets/three.png"
import FourImg from "../assets/four.png"
import FiveImg from "../assets/five.png"
import Container from './Container'

const Banner = () => {
    return (
        <Container>
            <div>
                <div className="flex">
                    <div className="w-1/2">
                        <h1 className='pt-29.5 pb-10 font-pop font-bold text-[64px]'>
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

                        <div className="flex pt-28 gap-10">
                            <div className="font-pop">
                                <div className="absolute">
                                    <img src={FirstImg} alt="" />
                                </div>
                                <h2 className='text-[40px] text-primary relative'>25,356</h2>
                                <h3 className='text-2xl text-secondary'>Projects Done</h3>
                            </div>
                            <div className="font-pop">
                                <div className="absolute">
                                    <img src={SecendImg} alt="" />
                                </div>
                                <h2 className='text-[40px] text-primary relative'>15,200</h2>
                                <h3 className='text-2xl text-secondary'>Buildings Done</h3>
                            </div>
                            <div className="font-pop">
                                <div className="absolute">
                                    <img src={ThirdImg} alt="" />
                                </div>
                                <h2 className='text-[40px] text-primary relative'>350+</h2>
                                <h3 className='text-2xl text-secondary'>Total Employees</h3>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <img className='w-full' src={BanImg} alt="" />
                    </div>
                </div>

                <div className="py-43.5 flex justify-between">
                        <div className="">
                            <img src={OneImg} alt="" />
                        </div>
                        <div className="">
                            <img src={TwoImg} alt="" />
                        </div>
                        <div className="">
                            <img src={ThreeImg} alt="" />
                        </div>
                        <div className="">
                            <img src={FourImg} alt="" />
                        </div>
                        <div className="">
                            <img src={FiveImg} alt="" />
                        </div>
                </div>
            </div>
        </Container>
    )
}

export default Banner