import styled from "styled-components";
import { Text } from "../atoms";

const Flex = styled.div`
  width: 100%;
  max-width: 314px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 18px;
`

const Stats = ({ fig, info }: { fig: string, info: string }) => (
  <Flex>
    <Text xl bold blue>{fig}</Text>
    <Text md inter center>{info}</Text>
  </Flex>
)

export default Stats

