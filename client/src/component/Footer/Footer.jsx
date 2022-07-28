import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const FooterContainer = styled.div`
    background-color: #fff;
    padding: 0.1rem;
`
const FooterParagraph = styled.p`
    color: #000000;
`

export default function Footer() {
    return (
        <FooterContainer>
            <FooterParagraph>
                &copy;{new Date().getFullYear()} All rights Reversed. <Link className='rights' to="/">WordPortraits</Link>
            </FooterParagraph>
        </FooterContainer>
    )
}
