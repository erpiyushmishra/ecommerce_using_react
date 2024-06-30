import styled from "styled-components"
import {categories} from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    @media only screen and (max-width:380px){
        flex-direction:column;
        padding:0px;
    };
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories