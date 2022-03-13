/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Text, Button, MsgOne, MsgTwo, SaveCircle } from "../atoms"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"


const Container = styled.div`
position: relative;
overflow: hidden;
width: 100%;
padding: 90px 5%;
background: ${props => props.theme.white};  
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

const Wrapper = styled.div`
  position: relative;
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
  position: relative;
  z-index: 10;
  width: 40%;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

const SaveTime = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { x: 0, transition: { duration: 1 } },
    hidden: { x: '20vw' }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container>
      <Wrapper>
        <Content>
          <Text xl as="h2" bold>Save time while we make the business of freelance easy.</Text>
          <Text md>Handle all your projects, Contracts, proposals, payment expenses ad collaboration all in one platform.</Text>
          <Button primary md>Join Now</Button>
        </Content>
        <Img ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
          <img src="/images/home-img-2.png" alt="" />
          <MsgOne />
          <MsgTwo />
        </Img>
        <SaveCircle />
      </Wrapper>
    </Container>
  )
}

export default SaveTime