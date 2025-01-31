import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
const Desc = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    @media only screen and (max-width:380px){
        text-align:center;
    };
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    @media only screen and (max-width:380px){
        width:80%;
    };
`
const Input = styled.input`
    flex:8;
    border:none;
    padding-left:20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter