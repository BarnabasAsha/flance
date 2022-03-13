/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const CoilO = styled.div`
width: 93px;
height: 93px;
position: absolute;
right: 25%;
top: 35%;

@media only screen and (max-width: 700px) {
 width: 35px;
 height: 35px;
}
`

const Coil = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { rotate: 0, transition: { duration: 2, delay: 8 } },
    hidden: { rotate: -180 }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return <CoilO ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
    <img src="/images/coil.png" alt="" />
  </CoilO>
}

export default Coil