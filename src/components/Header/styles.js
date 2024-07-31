import styled from "styled-components";

export const Header = styled.header`
width: 100vw;
height: 90px;
display: flex;
justify-content: center;
background-color: #533D6B;
backdrop-filter: 20px;
position: fixed;
background-attachment: fixed;
box-shadow: #533D6B 0 0 20px 3px;
`

export const Container = styled.div`
width: 100%;
`

export const ContainerItens = styled.div`
max-width: 1200px;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;
margin: 0 auto;
`

export const Img = styled.img`
width: 180px;
margin: 0 auto;
display: flex;
align-items: center;
margin-left: 20px;
cursor: pointer;
`

export const ImgTwo= styled.img`
width: 30px;
background-color: #533D6B;
margin: 0 auto;
display: flex;
align-items: center;
cursor: pointer;
`

export const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
margin: 0 20px 0 0;
cursor: pointer;
`

export const UlIcones = styled.ul`

display: flex;
align-items: center;
gap: 15px;
margin: 0 30px 0 0;
cursor: pointer;
`

export const Li = styled.li`
list-style: none;
:active { color: #F37135; }
`

export const A = styled.a`
text-decoration: none;
`

export const ButtonMenuItem = styled.button`
display: flex;
align-items: center;
background-color: transparent;
border: none;
font-weight: bold;
color: white;
gap: 5px;
font-size: 15px;
cursor: pointer;
`
