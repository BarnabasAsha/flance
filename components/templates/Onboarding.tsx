/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styled from "styled-components";
import ClickAwayListener from 'react-click-away-listener';
import { OnboardingBanner } from ".";
import OnboardingTrack from "../molecules/OnboardingTrack";
import { FormStep } from "../organisms";
import { steps } from "./steps";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(27, 29, 33, 0.700);
  mix-blend-mode: normal;
  padding: 4% 5%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 700px) {
    padding: 2% 5%;
  }
`

const Img = styled.div`
  width: 35%;
  height: 100%;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 65%;
  height: 100%;
  background: ${props => props.theme.white};
  padding: 3% 5%;
  overflow: auto;

  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 5% 7%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 32px;
  overflow: hidden;

  @media only screen and (max-width: 700px) {
    border-radius: 16px;
    height: 92%;
  }
`

const Btn = styled.div`
  color: ${props => props.theme.prim};
  background: none;
  border: none;
  display: flex;
  column-gap: 10px;
  align-items: center;
  cursor: pointer;
`

const Onboarding = ({ closeOnboarding }: { closeOnboarding: () => void }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [showBanner, setShowBanner] = useState(false)

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setShowBanner(true)
    } else {
      setActiveStep(val => val + 1)
    }
  }

  const handlePrev = () => {
    if (activeStep === 0) {
      return
    } else {
      setActiveStep(val => val - 1)
    }
  }

  return (
    <Container>
      {
        showBanner ? (
          <OnboardingBanner />
        ) : (
          <ClickAwayListener onClickAway={closeOnboarding}>
            <Wrapper>
              <Img>
                <img src="/images/onboarding-img.png" alt="" />
              </Img>
              <Content>
                <div>
                  <OnboardingTrack step={activeStep} />
                  <FormStep handleChange={handleNext} {...steps[activeStep]} />
                </div>
                {activeStep !== 0 && (
                  <Btn onClick={handlePrev}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="#8761F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    Go Back
                  </Btn>
                )}
              </Content>
            </Wrapper>
          </ClickAwayListener>
        )
      }
    </Container>
  )
}

export default Onboarding;