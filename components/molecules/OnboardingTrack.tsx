import styled from "styled-components";

interface Props {
  active?: boolean
}

const Track = styled.div<Props>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #8761F5;
  opacity: 0.4;

  ${props => props.active &&
    `opacity: 1;`
  }
`

const Flex = styled.div`
  width: 100%;
  justify-content: flex-end;
  display: flex;
  column-gap: 8px;
  align-items: center;
  margin-top: 10px;
`

const OnboardingTrack = ({ step }: { step: number }) => {
  return (
    <Flex>
      <Track active={step >= 0} />
      <Track active={step >= 1} />
      <Track active={step >= 2} />
      <Track active={step >= 3} />
      <Track active={step >= 4} />
    </Flex>
  )
}

export default OnboardingTrack