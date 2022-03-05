/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { Text } from "../atoms"

const images = [
  {
    url: '/images/geekwire.png',
    title: 'geekwire'
  },
  {
    url: '/images/slack.png',
    title: 'slack'
  },
  {
    url: '/images/envato.png',
    title: 'envato'
  },
  {
    url: '/images/usa-today.png',
    title: 'usatoday'
  },
  {
    url: '/images/forbes.png',
    title: 'forbes'
  }
]

const Wrapper = styled.div`
  margin: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FlexWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 133px;
  row-gap: 20px;

  @media only screen and (max-width: 700px) {
    column-gap: 50px;
  }
`

const ImgWrapper = styled.div`
  width: auto;
`

const Trust = () => (
  <Wrapper>
    <Text grey lg inter center josefin>Trusted by 2M+ teams and freelancers</Text>
    <FlexWrapper>
      {
        images.map(image => (
          <ImgWrapper key={image.title}>
            <img src={image.url} alt={image.title} />
          </ImgWrapper>
        ))
      }
    </FlexWrapper>
  </Wrapper>
)

export default Trust