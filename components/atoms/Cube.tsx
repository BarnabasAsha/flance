/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Box = styled.div`
width: 72px;
position: absolute;
left: 10%;
top: 0;

@media only screen and (max-width: 700px) {
 width: 40px;
}
`

const Cube = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { y: -10, transition: { duration: 1, delay: 1 } },
    hidden: { y: -50 }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return <Box ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
    <img src="images/Cube.png" alt="" />
  </Box>
}

export default Cube