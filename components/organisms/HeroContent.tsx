/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
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

  h1, p, button {
    position: relative;
    z-index: 550;
  }

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
  top: -15%;
  left: 66%;
  z-index: 400;

  @media only screen and (max-width: 700px) {
    top: -15%;
    left: 68%;
    width: 39px;
    height: 35px;
  }
`

const CoinTwo = styled.div`
  width: 68px;
  height: 86px;
  position: absolute;
  top: -15%;
  left: 47%;
  z-index: 400;

  @media only screen and (max-width: 700px) {
    top: -15%;
    width: 38px;
    height: 36px;
  }
`


const HeroContent = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const sphereVariants = {
    visible: { x: 0, transition: { duration: 5 } },
    hidden: { x: '-20vw' }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Wrapper>
      <div>
        <Text as={motion.h1} xxl bold center greyHeading animate={{ color: "#ffffff" }} transition={{ duration: 6, delay: 2 }}>Simplifying the administration of freelancing</Text>
        <Text center josefin lg>spend more time on the actual work and become twice as tall</Text>
      </div>
      <Link href="/signup" passHref>
        <Button primary md>Join Now</Button>
      </Link>
      <ContentImg>
        <img src="/images/home-img-1.png" alt="" />
      </ContentImg>
      <Circle ref={ref} as={motion.div} animate={controls} variants={sphereVariants} initial="hidden">
        <img src="/images/sphere.png" alt="" />
      </Circle>
      <CoinOne as={motion.div} animate={{ y: 430 }} transition={{ duration: 8 }}>
        <img src="/images/coin-one.png" alt="" />
      </CoinOne>
      <CoinTwo as={motion.div} animate={{ y: 520 }} transition={{ duration: 8 }}>
        <img src="/images/coin-two.png" alt="" />
      </CoinTwo>
    </Wrapper>
  )
}

export default HeroContent