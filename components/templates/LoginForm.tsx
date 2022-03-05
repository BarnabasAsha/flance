import { useRouter } from "next/router";
import styled from "styled-components";
import { AltButton, Button, FbSvg, FormCheck, FormInput, GoogleSvg, Text, TwitterSvg } from "../atoms";

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .w-full {
    width: 100%;
  }

  .mb-4 {
    margin-bottom: 20px;
  }
`

const Forget = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0;

  a {
    font-size: 14px;
    color: ${props => props.theme.prim}
  }
`

const Or = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;

  p {
    font-size: 14px;
    color: #9A9EA7;
  }

  div {
    width: 45%;
    height: 1px;
    background: #ECECF2;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 42px;

  h2 {
    font-size: 48px;
    line-height: 48px;
  }

  p {
    font-size: 14px;
    color: #9A9EA7;
  }
`

const LoginForm = () => {
  const router = useRouter()

  const toDashboard = () => {
    router.push('/dashboard')
  }
  return (
    <Wrapper>
      <Header>
        <Text as="h2" bold center>Welcome back</Text>
        <Text greyText center inter>Enter your details to proceed further</Text>
      </Header>
      <div className="w-full">
        <FormInput label="Email" type="email" placeholder="bee@flance.com" required />
        <FormInput label="Password" type="password" placeholder="" required />
      </div>
      <Forget>
        <FormCheck label="Remember me" />
        <Text as="a">Recover password</Text>
      </Forget>
      <Or>
        <div></div>
        <Text>Or</Text>
        <div></div>
      </Or>
      <div className="w-full mb-4">
        <AltButton>
          <div className="absolute">
            <GoogleSvg />
          </div>

          Sign Up with Google
        </AltButton>
        <AltButton>
          <div className="absolute">
            <FbSvg />
          </div>
          Sign Up with Facebook
        </AltButton>
        <AltButton>
          <div className="absolute">
            <TwitterSvg />
          </div>
          Sign Up with Twitter
        </AltButton>
      </div>
      <Button onClick={toDashboard} lg primary>Sign In</Button>
    </Wrapper>
  )
}

export default LoginForm