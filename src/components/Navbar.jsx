import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height:60px;
    @media only screen and (max-width:380px){
        height:50px;
    };
   
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media only screen and (max-width:380px){
        padding:10px 0px;
    };
    
`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Language = styled.span`
    font-size:14px;
    cursor: pointer;
    @media only screen and (max-width:380px){
        display:none;
    };
`
const SearchContainer = styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
  border:none;
  @media only screen and (max-width:380px){
        width:50px;
    };  
`

const Center = styled.div`
    flex:1;
    text-align:center;
`;

const Logo = styled.h1`
    font-weight:bold;
    @media only screen and (max-width:380px){
        font-size:24px;
    };
`


const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media only screen and (max-width:380px){
        justify-content:center;
        flex:2;
        margin-left:-5px;
    };
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    @media only screen and (max-width:380px){
        font-size:12px;
        margin-left:10px;
    };
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="search" />
                    <Search style={{color:"grey", fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center><Logo>LAMA.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>

                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
   
  )
}

export default Navbar