import styled from "styled-components"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const List = styled.div`
width: auto;
max-width: 600px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 36px;

@media only screen and (max-width: 700px) {
  width: 100%;
}
`

const FeaturesList = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { x: 0, transition: { duration: 1 } },
    hidden: { x: '-20vw' }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <List ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
      {children}
    </List>
  );
}

export default FeaturesList