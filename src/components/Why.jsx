import React from 'react'
import Container from './Container'
import WhyImg from "../assets/whyimg.png"
import ReImgOne from "../assets/reone.png"

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

                    <div className="py-24 flex justify-between items-center">
                        <div className="w-1/2">
                            <img src={WhyImg} alt="" />
                        </div>

                        <div className="w-1/2">
                            <div className="flex gap-3.5 py-18 items-center ">
                                <div className="relative pr-5">
                                    <h2 className='font-pop font-semibold text-7xl text-primary absolute -top-6 left-6 '>01</h2>
                                    <img src={ReImgOne} alt="" className='' />


                                </div>
                                <div className="">
                                    <h2 className='pl-9 font-pop text-[18px] text-secondary'>
                                        And residence for met the estimable <br /> disposing. Mean if he they been no hold <br /> mr. Is at much do made took held help.
                                    </h2>
                                </div>
                            </div>
                            <div className="flex gap-3.5 py-18">
                                <div className="">
                                    <h2 className='font-pop font-semibold text-7xl text-primary pr-9'>02</h2>
                                </div>
                                <div className="">
                                    <h2>
                                        And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
                                    </h2>
                                </div>
                            </div>
                            <div className="flex gap-3.5 py-18">
                                <div className="">
                                    <h2 className='font-pop font-semibold text-7xl text-primary pr-9'>03</h2>
                                </div>
                                <div className="">
                                    <h2>
                                        And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
                                    </h2>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Why