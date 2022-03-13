/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { ContactBulbs, Text } from "../atoms";
import { ContactForm } from "../molecules";

const Container = styled.section`
  position: relative;
overflow: hidden;
  width: 100%;
  padding: 120px 5%;
  background: ${props => props.theme.textBlack};
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 70px;

  .contact-header {
    font-size: 36px;
  }
`

const ContactFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 5%;
  row-gap: 50px;
`

const Img = styled.div`
  width: 50%;
  max-width: 615px;
  position: relative;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  max-width: 550px;
  row-gap: 20px;

  p {
    max-width: 483px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

const Circle = styled.div`
  width: 984px;
  height: 1041.81px;
  background: ${props => props.theme.prim};
  position: absolute;
  top: -900px;
  left: -400px;
  border-radius: 50%;

  @media only screen and (max-width: 700px) {
    top: -940px;
  left: -550px;
  }
`

const CurveContainer = styled.div`
  position: relative;
  width: 100%;
`

const Curve = styled.div`
  position: absolute;
  width: 100%;
  top: -5px;
  left: 0;
  z-index: 1000;

  svg {
    width: 100%;
  }
`

const Contact = () => (
  <CurveContainer>
    <Curve>
      <svg viewBox="0 0 1440 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.32417 29.1764C1.32417 29.1764 1047.99 -1.12502 1440 109.486V-2.32011e-05H0" fill="white" />
      </svg>
    </Curve>
    <Container>
      <Wrapper>
        <Text white bold className="contact-header">For Recruiters</Text>
        <ContactFlex>
          <Img>
            <img src="/images/cta-img.png" alt="" />
            <ContactBulbs />
          </Img>
          <Content>
            <Text white bold xl as="h2">Get your Ideas live</Text>
            <Text white md inter>Develop trusted relationships and build your own virtual talent bench for quick project turn arounds or big transformations.</Text>
            <ul>
              <Text as="li" greyText md>Post a Job and Hire a pro</Text>
              <Text as="li" greyText md>Buy Projects instantly</Text>
              <Text as="li" greyText md>Let us find the right talent</Text>
            </ul>
            <ContactForm />
          </Content>
        </ContactFlex>
      </Wrapper>
      <Circle />
    </Container>
  </CurveContainer>
)

export default Contact