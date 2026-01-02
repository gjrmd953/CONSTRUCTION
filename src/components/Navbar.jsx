import React from 'react'
import Container from './Container'

const Navbar = () => {
    return (
        <div className='py-4'>
            <Container>
                <div className='flex'>
                    <div className="w-1/2">
                        <h2 className='font-pop font-bold text-2xl text-[#18A7B9] uppercase cursor-pointer'>CONSTRUCTION</h2>
                    </div>
                    <div className="w-1/2">
                        <ul className='flex justify-end gap-7'>
                            <li className='font-pop text-[18px] text-parimary hover:font-bold cursor-pointer'>Home</li>
                            <li className='font-pop text-[18px] text-parimary hover:font-bold cursor-pointer'>About Us</li>
                            <li className='font-pop text-[18px] text-parimary hover:font-bold cursor-pointer'>Services</li>
                            <li className='font-pop text-[18px] text-parimary hover:font-bold cursor-pointer'>Project</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar