import React from 'react'
import Container from './Container'
import WhyImg from "../assets/whyimg.png"

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
                            <div className="flex gap-3.5 py-36">
                                <div className="">
                                    <h2>01</h2>
                                </div>
                                <div className="">
                                    <h2>
                                        And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
                                    </h2>
                                </div>
                            </div>
                            <div className="flex gap-3.5 py-36">
                                <div className="">
                                    <h2>01</h2>
                                </div>
                                <div className="">
                                    <h2>
                                        And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
                                    </h2>
                                </div>
                            </div>
                            <div className="flex gap-3.5 py-36">
                                <div className="">
                                    <h2>01</h2>
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