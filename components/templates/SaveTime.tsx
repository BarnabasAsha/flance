/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Text, Button } from "../atoms"


const Container = styled.div`
position: relative;
overflow: hidden;
width: 100%;
padding: 90px 5%;
background: ${props => props.theme.white};  
`

const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 50px;
  align-items: center;
  justify-content: center;  
`

const Content = styled.div`
  width: 45%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media only screen and (max-width: 700px) {
    width: 100%;
    min-width: 100%;
  }
`

const Img = styled.div`
  width: 40%;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

const SaveTime = () => (
  <Container>
    <Wrapper>
      <Content>
        <Text xl as="h2" bold>Save time while we make the business of freelance easy.</Text>
        <Text md>Handle all your projects, Contracts, proposals, payment expenses ad collaboration all in one platform.</Text>
        <Button primary md>Join Now</Button>
      </Content>
      <Img>
        <img src="/images/home-img-2.png" alt="" />
      </Img>
    </Wrapper>
  </Container>
)

export default SaveTime