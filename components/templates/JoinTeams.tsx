/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Text, Button, CurveSvg } from "../atoms"


const Container = styled.div`
position: relative;
overflow: hidden;
width: 100%;
padding: 180px 5%;;

@media only screen and (max-width: 1200px) {
    padding: 80px 5%;
}

@media only screen and (max-width: 900px) {
    padding: 0px 5%;
}
`

const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
  z-index: 60;


  @media only screen and (max-width: 700px) {
    width: 100%;
    min-width: 100%;
  }
`

const Img = styled.div`
  width: 40%;
  z-index: 60;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

const Teams = styled.div`
  margin-top: 100px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 700px) {
    margin-top: 100px;
  }
`

const Curve = styled.div`
  width: 100%;
  position: absolute;
  top: -20%;
  left: 0;

  svg {
    width: 100%;
  }
`

const JoinTeams = () => (
  <Teams>
    <Curve>
      <CurveSvg />
    </Curve>
    <Container>
      <Wrapper>
        <Img>
          <img src="/images/home-img-3.png" alt="" />
        </Img>
        <Content>
          <Text xl as="h2" bold>Join teams and develope Kickass Products</Text>
          <Text md>Handle all your projects, Contracts, proposals, payment expenses ad collaboration all in one platform.</Text>
          <Button primary md>Join Now</Button>
        </Content>
      </Wrapper>
    </Container>
  </Teams>
)

export default JoinTeams