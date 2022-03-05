/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Text } from "../atoms";

const Img = styled.div`
  width: 30%;
  height: 100%;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 390px;
  margin: 30px auto;
  padding: 10px;
  border: 0.5px solid #979797;
  background: ${props => props.theme.white};
  box-shadow: 0px 52px 54px rgba(65, 62, 101, 0.102519);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 29px;
  padding: 25px;
  width: 70%;
  height: 100%;

  p {
    max-width: 403px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Btn = styled.button<{ prev?: boolean }>`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.tet};
  color: ${props => props.theme.white};
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -32.5px;
  box-shadow: 0px 52px 54px rgba(65, 62, 101, 0.102519);


  ${(props) => props.prev && `
    right: 0;
    left: -32.5px;
    background: ${props.theme.white};
    color: ${props.theme.tet};
  `}

@media only screen and (max-width: 700px) {
    width: 50px;
    height: 50px;
    right: -18px;

    ${(props) => props.prev && `
    right: 0;
    left: -18px;
  `}
  }
`

const TestimonialCard = () => (
  <Wrapper>
    <Img>
      <img src="/images/man.png" alt="" />
    </Img>
    <Content>
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 20H2L6 12H0V0H12V12L8 20ZM24 20H18L22 12H16V0H28V12L24 20Z" fill="#5454D4" />
      </svg>
      <Text md center>OMG! I cannot believe how easier flance has made me manage my finance and track progress while freelancing.</Text>
      <Flex>
        <Text bold md>Jonathan Taylor</Text>
        <Text>CEO at Creativex</Text>
      </Flex>
    </Content>
    <Btn>
      <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6.5H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 1L20 7L14 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Btn>
    <Btn prev>
      <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6.5H1" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 1L1 7L7 13" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    </Btn>
  </Wrapper>
)

export default TestimonialCard