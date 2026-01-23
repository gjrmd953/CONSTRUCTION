import React from 'react'
import Container from './Container'
import MesImg from "../assets/message.png"

const Message = () => {
    return (
        <div className='py-44'>
            <Container>
                <h2>Message from CEO</h2>
                <img src={MesImg} alt="" />
            </Container>
        </div>
    )
}

export default Message