import styled from 'styled-components'
import Bakckground1 from './assets/img/bg1.svg'

export const Container = styled.div `
    background: url("${Bakckground1}") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:40px;
    height: 200vh;
   
    
    

`
export const Img = styled.img `
    margin-top:30px;
    
`
export const Containeritens = styled.div `
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    width: 414px;
    height: 100vh;
   
   
`

export const H1 = styled.h1 `
font-weight: 700;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
margin-bottom: 80px;
text-align: center;

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
export const Button = styled.button `
width: 342px;
height: 74px;
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
margin-top:100px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 14px;

&:hover{
    opacity:0.8 ;
}
&:active{
    opacity: 0.5;
}

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
