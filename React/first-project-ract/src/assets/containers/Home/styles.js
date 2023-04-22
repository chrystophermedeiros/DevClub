import styled from 'styled-components'
import Bakckground1 from '../../img/bg1.svg'

export const Container = styled.div `
    background: url("${Bakckground1}") no-repeat;
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

export const Input = styled.input `
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
margin-bottom: 20PX;
padding-left:15PX;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
color: #FFFFFF;
`

