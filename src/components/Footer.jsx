import { Facebook, Instagram, MailOutline, MailOutlineOutlined, PaymentOutlined, Phone, PhoneAndroidOutlined, Pinterest, Room, RoomOutlined, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    @media only screen and (max-width:380px){
        flex-direction:column;
    };
`
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`

const Center = styled.div`
    flex: 1;
    padding:20px;
    @media only screen and (max-width:380px){
        display:none;
    };
`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`
const Right = styled.div`
    flex: 1;
    padding:20px;
    @media only screen and (max-width:380px){
        background-color:#fff8f8;
    };
`
const ContactItem = styled.div`
    display:flex;
    align:item:center;
    margin-bottom:20px;
`

const Payment = styled.div`
    margin-top:-10px;
    padding:0;
`
const PaymentLogo = styled.img`
    width:40px;
    margin-right:10px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero nisi, scelerisque eget neque et, 
            cursus ultricies metus. Cras pulvinar dictum hendrerit. Cras nec hendrerit nisl, sit amet placerat 
            ipsum.
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>

        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><RoomOutlined style={{marginRight:"10px"}}/>Hinjewadi, Pune, India</ContactItem>
            <ContactItem><PhoneAndroidOutlined style={{marginRight:"10px"}}/>+91 1234567890</ContactItem>
            <ContactItem><MailOutlineOutlined style={{marginRight:"10px"}}/>piyush9211vaibhav@gmail.com</ContactItem>
            <Payment>
                <PaymentLogo src="src\Assets\paypal.png"/>
                <PaymentLogo src="src\Assets\visa.png"/>
                <PaymentLogo src="src\Assets\card.png"/>
            </Payment>
        </Right>
    </Container>
  )
}

export default Footer