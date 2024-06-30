import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/footer"



const Container = styled.div``
const Title = styled.h1`
    margin: 20px
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    @media only screen and (max-width:380px){
        margin:0px 20px;
        display:flex;
        flex-direction:column;
    };
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    @media only screen and (max-width:380px){
        margin-right:0px;
    };
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    @media only screen and (max-width:380px){
        margin:10px 0px;
    };
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Products</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                        <option disabled selected>Color</option>
                        <option>Black</option>
                        <option>Blue</option>
                        <option>Pink</option>
                        <option>Green</option>
                        <option>Yellow</option>
                    </Select>
                    <Select>
                        <option disabled selected>Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <option>Newest</option>
                    <option>Highest Price</option>
                    <option>Lowest Price</option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList