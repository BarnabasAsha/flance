/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Text } from "../atoms";

interface Props {
  icon: any,
  title: string,
  text: string
}

const CardWrapper = styled.div`
  display: flex;
  column-gap: 40px;
  width: 350px;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

const Iconn = styled.div`
  min-width: 71.48px;
  width: 71.48px;
  height: 71.48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* mix-blend-mode: screen; */
  filter: drop-shadow(0px 30px 60px rgba(84, 84, 212, 0.6));
  background: ${(props) => props.theme.white};
`

const WhyCard = ({ icon, title, text }: Props) => (
  <CardWrapper>
    <Iconn>
      {icon}
    </Iconn>
    <Flex>
      <Text as="h3" bold lg>{title}</Text>
      <Text greyText md inter>{text}</Text>
    </Flex>
  </CardWrapper>
)

export default WhyCard