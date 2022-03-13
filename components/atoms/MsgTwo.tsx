/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Msg = styled.div`
width: 124px;
position: absolute;
right: 38%;
top: 15%;

@media only screen and (max-width: 700px) {
 width: 70px;
}
`

const MsgTwo = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { scale: 1, transition: { duration: 1, delay: 1.5 } },
    hidden: { scale: 0 }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return <Msg ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
    <img src="/images/home-img-2-msg-2.png" alt="" />
  </Msg>
}

export default MsgTwo