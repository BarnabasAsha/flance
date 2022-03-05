/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { Button, CreateContractSvg, DraftProposalSvg, FindJobSvg, SearchBar, StartTimerSvg, Text } from "../atoms"

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  row-gap: 30px;

  .large {
    font-size: 48px;
    line-height: 61px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 48px 38px;
`

const Hero = styled.div`
  width: 100%;
  min-height: 280px;
  background-color: ${props => props.theme.aux};
  background: url('/images/dashboard-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  padding: 54px;
  border-radius: 24px;
  margin-top: 50px;

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
  }

  button {
    margin-top: 24px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.250929);
    width: 173px;
    height: 56px;
    border-radius: 16px;
    color: #000000;
  }

  @media only screen and (max-width: 700px) {
        padding: 25px;

        h2 {
          line-height: 45px;
          margin-bottom: 10px;
        }
    }
`

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 29px;
  background: #ffffff;
  z-index: 10;
  border-radius: 24px;
`

const Card = styled.div`
  position: relative;
  width: 230px;
  height: 257px;
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  &::after {
    content: "";
    position: absolute;
    top: 21px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #E3E6EC;
    mix-blend-mode: multiply;
    opacity: 0.91;
    filter: blur(86.985px);
    border-radius: 24px;
    z-index: 5;
  }

  p {
    font-size: 18px;
  }
`

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 42px;
  margin-top: 50px;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
        justify-content: center;
    }
`

const HeadFlex = styled.div`
  display: flex;
  align-items: flex-start;
  height: auto;
  justify-content: space-between;
  column-gap: 10px;
  align-items: center;

  @media only screen and (max-width: 700px) {
        width: 100%;
    }
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const contents = [
  {
    text: "Draft a proposal",
    icon: <DraftProposalSvg />
  },
  {
    text: "Create a contract",
    icon: <CreateContractSvg />
  },
  {
    text: "Start a timer",
    icon: <StartTimerSvg />
  },
  {
    text: "Find a job",
    icon: <FindJobSvg />
  }
]

const DashboardContent = () => (
  <Wrapper>
    <Header>
      <div>
        <Text bold inter md>Hi Tony,</Text>
        <Text className="large" bold>Welcome  🎉</Text>
      </div>
      <HeadFlex>
        <SearchBar />
        <Avatar>
          <img src="/images/avatar.png" alt="" />
        </Avatar>
      </HeadFlex>
    </Header>
    <Hero>
      <Text as="h2" prim>Your new freelancing workspace</Text>
      <Text prim>Get started by selecting an option below</Text>
      <Button>Get Started</Button>
    </Hero>
    <Flex>
      {
        contents.map(content => (
          <Card key={content.text}>
            <CardContent>
              {content.icon}
              <Text prim greyText>{content.text}</Text>
            </CardContent>
          </Card>
        ))
      }
    </Flex>
  </Wrapper>
)

export default DashboardContent