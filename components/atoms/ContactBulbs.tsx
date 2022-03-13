/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Box = styled.div`
width: 267px;
position: absolute;
right: 14%;
top: -20%;

@media only screen and (max-width: 700px) {
 width: 150px;
}
`

const ContactBulbs = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { rotate: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { rotate: -45, opacity: 0 }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return <Box ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
    <img src="/images/bulb-cursor.png" alt="" />
  </Box>
}

export default ContactBulbs