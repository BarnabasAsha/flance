/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Atm = styled.div`
width: 145.01px;
height: 84.58px;
position: absolute;
right: 15%;
top: 10%;

@media only screen and (max-width: 700px) {
 width: 80px;
 height: 40px;
}
`

const AtmCard = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { rotate: 0, opacity: 1, transition: { duration: 1, delay: 8 } },
    hidden: { rotate: -90, opacity: 0 }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return <Atm ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
    <img src="/images/credit-card.png" alt="" />
  </Atm>
}

export default AtmCard