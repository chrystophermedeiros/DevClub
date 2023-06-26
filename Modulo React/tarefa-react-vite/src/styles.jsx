import styled from 'styled-components'
import { FcFullTrash } from "react-icons/fc";




export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    background: linear-gradient(90deg, #383838 0%, #000 98.25%);
    width: 100vw;
    height: 100vh;
    
`

export const ContainerItens = styled.div`
    border-radius: 5px;
    background: black;
    width: 80%;
    height: 80%;
    padding: 30px 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        
    
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8052EC;
    border-radius: 4px;
    /* Ajuste o tamanho da rolagem interna aqui */
    width: 6px; /* Largura da rolagem interna */
    height: 10px; /* Altura da rolagem interna */
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;
  }

    ul{
        color: #ffffff;
    }
    
    

`

export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid rgba(122, 122, 122, 0.4);
    margin-bottom: 5%;
    width: 60%;
    margin-right: 5%;
    height: 30px;
    padding: 10px;
   
`

export const Button = styled.button`
    border-radius: 5px;
    background: #8052EC;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-weight: 900;
    line-height: 2.5px;
    width: 15%;
    height: 35px;
    border: none;
    margin-right: 1%;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }
    
`

export const ListItens = styled.div`
    border-radius: 5px;
    background: black;
    box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.20);
    height: 100%;
    cursor: pointer;
    gap: 20px;
    padding: 0 20px;
    width: 100%;
    color: #ff0404;



  

  
    li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        color: #ffffff;
        font-size: 20px;
        text-decoration: ${props => props.Concluido ? 'line-through' : 'none'};
        margin-bottom: 10px;
        background: rgba(54, 53, 53, 0.2);

        
    }
    
`

export const Deletar = styled(FcFullTrash)`
    color: #ec5252 ;
    cursor: pointer;
`




