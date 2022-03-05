import styled from "styled-components";
import { Text } from "../atoms";
import { Stats } from "../molecules";
import { TestimonialCard } from "../organisms";

const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 150px 5%;
  background: ${props => props.theme.white};
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  row-gap: 99px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const statistics = [
  {
    fig: "1M+",
    info: "Customers use flanec every month to get their service done."
  },
  {
    fig: "92%",
    info: "Satisfaction rate comes from our awesome customers."
  },
  {
    fig: "4.9/5.0",
    info: "Average customer ratings we have got all over internet."
  },
]

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 66px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;

  @media only screen and (max-width: 700px) {
    h1 {
      width: 80%;
    }
  }
`

const Testimonials = () => (
  <Container>
    <Wrapper>
      <Header>
        <Text bold as="h1" center xl>Real Stories, Real People</Text>
        <Text md center>Here is what freelancers are saying about flance, How it makes life easier for work life.</Text>
      </Header>
      <TestimonialCard />
      <Flex>
        {
          statistics.map(stat => (
            <Stats key={stat.fig} {...stat} />
          ))
        }
      </Flex>
    </Wrapper>
  </Container>
)

export default Testimonials