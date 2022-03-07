import styled, { keyframes } from "styled-components"
import { Header, HeroContent } from "../organisms"

const bgAnimate = keyframes`
  0% {opacity: 0.4;}
  100% {opacity: 1;}
`

const HeroWrapper = styled.div`
position: relative;
width: 100%;
height: auto;
padding: 0 5%;
margin: 0 auto;  

&::after {
  position: absolute;
  content: "";
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
background: linear-gradient(180deg, #FFFFFF 2.32%, rgba(255, 255, 255, 0) 100%), radial-gradient(74.1% 206.78% at 17.5% 29.23%, rgba(135, 0, 241, 0.96) 0%, rgba(57, 132, 244, 0.96) 51.56%, rgba(62, 232, 255, 0.75) 100%);
  transform: rotate(-180deg);
  opacity: 0.4;
  animation: ${bgAnimate};
  animation-duration: 6s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  transition: opacity ease-in 6s;
}
`



const Hero = () => (
  <HeroWrapper>
    <Header />
    <HeroContent />
  </HeroWrapper>
)

export default Hero