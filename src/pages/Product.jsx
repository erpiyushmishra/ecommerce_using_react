import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove, RemoveCircle } from "@mui/icons-material"

const Container = styled.div``

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    @media only screen and (max-width:380px){
        padding:10px;
        flex-direction:column;
    };
`

const ImgContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    @media only screen and (max-width:380px){
        height:40vh;
    };
`

const InfoContainer = styled.div`
    flex:1;
    padding:0 50px;
    @media only screen and (max-width:380px){
        padding:10px;
    };
`

const Title = styled.h1`
    font-weight:200;
`

const Desc = styled.p`
    margin:20px 0;
`

const Price = styled.span`
    font-weight:100;
    font-size:40px;
`

const FilterContainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    @media only screen and (max-width:380px){
        width:100%;
    };
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option`
    display:flex;
    align-items:center;
`
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media only screen and (max-width:380px){
        width:100%;
    };
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;
    &:hover{
        background-color:#f8f4f4;
    }
`


const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="src\Assets\image_watch.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Rolex Watch (Limited Edition)</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero nisi, scelerisque eget neque et, cursus ultricies metus. Cras pulvinar dictum hendrerit. Cras nec hendrerit nisl, sit amet placerat ipsum. Integer elit orci, aliquam et ornare quis, blandit pulvinar diam. Ut sodales, odio id viverra finibus, neque mauris mattis urna, ac commodo libero arcu eget ligula.</Desc>
                <Price>$ 2000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>Xs</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product