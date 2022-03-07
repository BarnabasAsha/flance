import React from "react";
import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Content = styled.div`
width: 40%;
min-width: 500px;
display: flex;
flex-direction: column;
row-gap: 30px;

@media only screen and (max-width: 700px) {
  width: 100%;
  min-width: 100%;
}
`

const FeaturesContent = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { x: 0, transition: { duration: 2 } },
    hidden: { x: '20vw' }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Content ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
      {children}
    </Content>
  );
}

export default FeaturesContent