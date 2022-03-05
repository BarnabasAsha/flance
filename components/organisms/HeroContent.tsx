/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styled from "styled-components"
import { Text } from "../atoms"
import Button from "../atoms/Button"

const Wrapper = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;

  @media only screen and (max-width: 700px) {
    h1 {
      line-height: 48px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      line-height: 20px;
    }
  }
`

const ContentImg = styled.div`
  max-width: 800px;
  width: 100%;
  z-index: 10;
`

const Circle = styled.div`
  width: 102px;
  height: 102px;
  position: absolute;
  bottom: 10px;
  left: 17%;
  z-index: 5;

  @media only screen and (max-width: 700px) {
    left: 5%;
    width: 50px;
    height: 50px;
  }
`

const CoinOne = styled.div`
  width: 69px;
  height: 65px;
  position: absolute;
  top: 36%;
  left: 66%;
  z-index: 500;

  @media only screen and (max-width: 700px) {
    top: 54%;
    left: 68%;
    width: 39px;
    height: 35px;
  }
`

const CoinTwo = styled.div`
  width: 68px;
  height: 86px;
  position: absolute;
  top: 49%;
  left: 47%;
  z-index: 500;

  @media only screen and (max-width: 700px) {
    top: 65%;
    width: 38px;
    height: 36px;
  }
`


const HeroContent = () => (
  <Wrapper>
    <div>
      <Text xxl bold center greyHeading as="h1">Simplifying the administration of freelancing</Text>
      <Text center josefin lg>spend more time on the actual work and become twice as tall</Text>
    </div>
    <Link href="/signup" passHref>
      <Button primary md>Join Now</Button>
    </Link>
    <ContentImg>
      <img src="/images/home-img-1.png" alt="" />
    </ContentImg>
    <Circle>
      <img src="/images/sphere.png" alt="" />
    </Circle>
    <CoinOne>
      <img src="/images/coin-one.png" alt="" />
    </CoinOne>
    <CoinTwo>
      <img src="/images/coin-two.png" alt="" />
    </CoinTwo>
  </Wrapper>
)

export default HeroContent