import React from 'react'
import Container from './Container'

const Navbar = () => {
    return (
        <div className='py-4 bg-[#18A7B9]'>
            <Container>
                <div className='flex'>
                    <div className="w-1/2">
                        <h2>CONSTRUCTION</h2>
                    </div>
                    <div className="w-1/2">
                        <ul className='flex justify-end gap-5'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar