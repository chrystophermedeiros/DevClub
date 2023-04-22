import styled from 'styled-components'

export const Button = styled.button `
border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
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

img {
    transform: ${props => props.isBack && 'rotateY(180deg)' } ;
}


${props => props.isBack && `

    margin-top:10px;
    background: transparent;
  
        
    `}
`
