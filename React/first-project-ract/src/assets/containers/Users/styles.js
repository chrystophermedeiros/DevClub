import styled from 'styled-components'
import Bakckground2 from '../../img/bg2.svg'


export const Container = styled.div `
    background: url("${Bakckground2}") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:40px;
    height: 100%;
    min-height: 100vh;
`
export const Img = styled.img `
    margin-top:30px;
    
`


export const InputLabel = styled.p `
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
padding-left:15PX;
color: #EEEEEE;
margin-bottom: 5px;
`



export const User = styled.li `
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
margin-bottom: 20PX;
padding-left:15PX;
margin-top: 20px;


p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
}
button {
    background: none;
    border: none;
    cursor: pointer;
}

`
