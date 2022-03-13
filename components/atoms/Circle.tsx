import styled from "styled-components";
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Circle0 = styled.div`
  width: 984px;
  height: 1041.81px;
  background: #FEDC5A;
  position: absolute;
  top: -900px;
  right: -400px;
  border-radius: 50%;
  overflow: hidden;

  @media only screen and (max-width: 700px) {
    top: -940px;
  right: -550px;
  }
`

const Circle = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { scale: 1, transition: { duration: 1 } },
    hidden: { scale: .8 }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return <Circle0 ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden" />
}

export default Circle