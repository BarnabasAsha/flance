/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Circle = styled.div`
width: 82px;
height: 82px;
position: absolute;
bottom: 25px;
right: 14%;
z-index: 2;

@media only screen and (max-width: 700px) {
  bottom: 69%;
  width: 50px;
  height: 50px;
}
`

const SaveCircle = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const sphereVariants = {
    visible: { x: 0, transition: { duration: 5 } },
    hidden: { x: '20vw' }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Circle ref={ref} as={motion.div} animate={controls} variants={sphereVariants} initial="hidden">
      <img src="/images/savetime-sphere.png" alt="" />
    </Circle>
  )
}

export default SaveCircle