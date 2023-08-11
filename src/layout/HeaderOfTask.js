import { styled } from "styled-components"
import React from "react"
import { useNavigate } from "react-router-dom"

const HeaderOfTask = ()=>{
    const navigate= useNavigate()
    return(
        <Container>
            <header>
                
                    <p onClick={()=>navigate('items')}>Task 1</p>
                    <p onClick={()=>navigate('users')}> Task 2</p>
                    <p onClick={()=>navigate('reactApp')}>Task 3</p>

            
            </header>
        </Container>
    )
}

export default HeaderOfTask

const Container = styled.div`
width:100%;
display:flex;
>header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    border: 1px;
    opacity: 0.5;
    background-color: grey;
    
}
 p {
    cursor: pointer;
    color:wheat;
 }
`