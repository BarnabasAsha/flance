import Link from "next/link";
import styled from "styled-components";
import { Button, Text } from "../atoms";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  align-items: center;
  background: ${props => props.theme.prim};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 32px;
  overflow: hidden;
  padding: 5%;

  &::after {
    content: "";
    background: url(/images/onboarding-banner.png);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  h2, button {
    z-index: 10;
  }

  button {
    margin-top: 70px;
  }
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 183.14px;
  height: 183.14px;
  background: #F9F9F9;
  box-shadow: 0px 3.20081px 3.20081px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`

const OnboardingBanner = () => (
  <Wrapper>
    <Circle>
      <svg width="89" height="92" viewBox="0 0 89 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.133301 88.1164C0.133301 64.2636 18.5221 44.927 41.2057 44.927L64.1728 44.927L64.1728 55.1808C64.1728 62.6238 58.1391 68.6575 50.6962 68.6575L41.2057 68.6575C30.9856 68.6575 22.7006 77.3695 22.7006 88.1164L0.133301 88.1164Z" fill="#FFC300" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.133301 84.6228C0.133301 54.4743 25.3926 30.0342 56.5515 30.0342L60.4782 30.0342L56.5515 46.1682L64.1728 46.1682L63.6775 51.8696L56.5515 51.8696C37.8561 51.8696 22.7006 66.5337 22.7006 84.6228L22.7006 88.1165L0.133301 88.1165L0.133301 84.6228Z" fill="#FF9900" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.133301 80.8497C0.133301 49.4951 25.8563 24.0771 57.5873 24.0771L71.6192 24.0771L71.6192 33.3096C71.6192 40.7525 65.5856 46.7862 58.1426 46.7862L57.5873 46.7862C38.5487 46.7862 23.1149 62.037 23.1149 80.8497L23.1149 88.1166L0.133301 88.1166L0.133301 80.8497Z" fill="#FF3E80" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.133301 60.8963C0.133301 29.0463 25.8563 3.22681 57.5873 3.22681L61.5861 3.22681L57.8237 21.3464L71.6192 21.3464L71.6192 26.2946L57.5873 26.2946C38.5487 26.2946 23.1149 41.7863 23.1149 60.8963L23.1149 88.1164L0.133301 88.1164L0.133301 60.8963Z" fill="#D62460" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.134766 58.2388C0.134766 26.2116 25.8808 0.248535 57.6401 0.248535L88.0029 0.248535L88.0029 9.96803C88.0029 17.411 81.9692 23.4446 74.5263 23.4446L57.6401 23.4446C38.5845 23.4446 23.1369 39.0225 23.1369 58.2388L23.1369 89.0737C23.1369 90.1902 22.2318 91.0952 21.1154 91.0952L2.15626 91.0952C1.03982 91.0952 0.134766 90.1902 0.134766 89.0737L0.134766 58.2388Z" fill="#8759F2" />
      </svg>
    </Circle>

    <Text as="h2" center xl bold white>Welcome to Flance</Text>
    <Link href="/dashboard" passHref>
      <Button md>Go to Dashboard</Button>
    </Link>
  </Wrapper>
)

export default OnboardingBanner