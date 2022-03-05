import styled from "styled-components"
import { EarningSvg, FreeSvg, JobPoolSvg, OndemandSvg, OnlineSvg, Text, TransfersSvg } from "../atoms"
import { WhyCard } from "../molecules"

const reasons = [
  {
    icon: <FreeSvg />,
    title: 'Free for Freelancers',
    text: 'Flance is 100% free for freelancers. You can recieve offers with increased financial flexibility with no cost their bottom line.'
  },
  {
    icon: <OndemandSvg />,
    title: 'On-demand Pay',
    text: 'Freelancers can access their earnings before project completion. They simply log into the app. View the available earnings from shifts/ Proect landmarks and advace the amount they need. '
  },
  {
    icon: <JobPoolSvg />,
    title: 'Large Job Pool',
    text: 'Freelancers can access their earnings before project completion. They simply log into the app. View the available earnings from shifts/ Proect landmarks and advace the amount they need. '
  },
  {
    icon: <TransfersSvg />,
    title: 'Instant Transfers',
    text: 'Flance is 100% free for freelancers. You can recieve offers with increased financial flexibility with no cost their bottom line.'
  },
  {
    icon: <OnlineSvg />,
    title: '100% Online',
    text: 'Flance is 100% free for freelancers. You can recieve offers with increased financial flexibility with no cost their bottom line.'
  },
  {
    icon: <EarningSvg />,
    title: 'Earning Tracker',
    text: 'Flance is 100% free for freelancers. You can recieve offers with increased financial flexibility with no cost their bottom line.'
  },
]

const Container = styled.section`
position: relative;
overflow: hidden;
width: 100%;
padding: 120px 5%;
background: ${props => props.theme.white};
`
const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  justify-content: center;  

  p {
    max-width: 862px;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;  
`

const WhyFlance = () => (
  <Container>
    <Wrapper>
      <Flex>
        <Text as="h2" bold xl>Why Flance?</Text>
        <Text greyText md center>it’s a win-win. Our digital payroll advance benefit improves freelance financial wellness and boast business productivity</Text>
      </Flex>
      <List>
        {
          reasons.map(reason => <WhyCard key={reason.title} {...reason} />)
        }
      </List>
    </Wrapper>
  </Container>
)

export default WhyFlance