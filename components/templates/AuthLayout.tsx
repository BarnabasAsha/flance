/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import { Text } from "../atoms"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: ${props => props.theme.white};

  @media only screen and (max-width: 700px) {
    height: auto;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #C4C4C4;
  padding: 20px;
  border-radius: 24px;
`

const Content = styled.div`
  width: 50%;
  height: 100%;
  background: ${props => props.theme.prim};
  border-radius: 24px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  padding: 20px;

  p {
    color: #FFF960;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const Img = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
`

const Form = styled.div`
  width: 50%;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

interface Props {
  login?: boolean,
  children: any
}

const AuthLayout = ({ login, children }: Props) => (
  <Container>
    <Wrapper>
      <Content>
        <Img>
          <img src={`${login ? '/images/login-img.png' : '/images/signup-img.png'}`} alt="" />
        </Img>
        <Text lg bold center>Never lose track of your projects progress</Text>
      </Content>
      <Form>
        {children}
      </Form>
    </Wrapper>
  </Container>
)

export default AuthLayout