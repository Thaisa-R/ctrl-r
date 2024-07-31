import styled from "styled-components";

import Background from "../../assets/img-hero.png";



export const Section = styled.section`
background-image: url(${Background});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100vw;
height: 720px;
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 1000px;
padding: 0 100px;
margin: 0 auto; 
`

export const DivRight = styled.div`
flex: 1;
max-width: 500px;
margin-top: 200px;
`

export const H1 = styled.div`
color: #533D6B;
font-size: 25px;
font-weight: bold;
margin-bottom: 15px;
font-style: italic;
`

export const P = styled.div`
color: #F77336;
font-size: 18px;
max-width: 400px;
margin-bottom: 30px;
font-weight: bold;
letter-spacing: 2.5px;
`

export const ImageLeft = styled.img`
width: 250px;
margin-top: 200px;
background-color: transparent;

`
