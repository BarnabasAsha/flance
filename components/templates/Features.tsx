import styled from "styled-components"
import { ApplySvg, TrackSvg, SignSvg, CollaborateSvg, Text, Button } from "../atoms"
import { Card } from "../molecules"

const list = [
  {
    icon: <ApplySvg />,
    title: 'Apply for Jobs',
    text: 'Find the best jobs from a job pool that best suites your skills and profession.'
  },
  {
    icon: <TrackSvg />,
    title: 'Track Profits',
    text: 'Find the best jobs from a job pool that best suites your skills and profession.'
  },
  {
    icon: <SignSvg />,
    title: 'Sign E-Contracts',
    text: 'Find the best jobs from a job pool that best suites your skills and profession.'
  },
  {
    icon: <CollaborateSvg />,
    title: 'Collaborate',
    text: 'Find the best jobs from a job pool that best suites your skills and profession.'
  },
]

const FeaturesWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  column-gap: 50px;
  row-gap: 50px;
  align-items: center;
  justify-content: center;
`

const Container = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 120px 5%;
  background: ${props => props.theme.prim};
`

const FeaturesContent = styled.div`
  width: 40%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media only screen and (max-width: 700px) {
    width: 100%;
    min-width: 100%;
  }
`

const Circle = styled.div`
  width: 984px;
  height: 1041.81px;
  background: #FEDC5A;
  position: absolute;
  top: -900px;
  right: -400px;
  border-radius: 50%;

  @media only screen and (max-width: 700px) {
    top: -940px;
  right: -550px;
  }
`

const FeaturesList = styled.div`
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
const Features = () => (
  <Container>
    <FeaturesWrapper>
      <FeaturesList>
        {
          list.map(feature => <Card key={feature.title} {...feature} />)
        }
      </FeaturesList>
      <FeaturesContent>
        <Text white xl as="h2" bold>Its everything<br /> you&#39;ll ever need.</Text>
        <Text white md>All the freelance business in one place and save time as your handle all your projects, contracts, proposals, payment expenses and  with easy, all in one platform.</Text>
        <Button outline md>View all features</Button>
      </FeaturesContent>
    </FeaturesWrapper>
    <Circle />
  </Container>
)

export default Features