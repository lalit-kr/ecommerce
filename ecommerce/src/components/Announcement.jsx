import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weigth: 100;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free shipping on orders over 500 Rupees
    </Container>
  )
}

export default Announcement