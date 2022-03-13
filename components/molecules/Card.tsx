import styled from "styled-components";
import { Text } from "../atoms";
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface Props {
  icon: any,
  title: string,
  text: string,
  index: number
}

const CardWrapper = styled.div`
  width: 260px;
  height: 280px;
  background: ${(props) => props.theme.white};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  box-shadow: 0px 52px 54px rgba(65, 62, 101, 0.296766);  
  overflow: hidden;

  svg {
    width: 69px;
    height: 69px;
    min-width: 69px;
    min-height: 69px;
  }


  h3 {
    margin-bottom: 13px;
    margin-top: 23px;
  }
`

const Card = ({ icon, title, text, index }: Props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { scale: 1, transition: { duration: 1, delay: index } },
    hidden: { scale: 0 }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <CardWrapper ref={ref} as={motion.div} animate={controls} variants={variants} initial="hidden">
      {icon}
      <Text as="h3" lg bold>
        {title}
      </Text>
      <Text greyText>
        {text}
      </Text>
    </CardWrapper>
  )
}

export default Card;