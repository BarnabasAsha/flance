import styled from "styled-components";
import { Text, FormInput, FormCheck, Button } from "../atoms";

const Wrapper = styled.div`
width: 100%;
max-width: 420px;
margin: 0 auto;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 40px;

.w-full {
  width: 100%;

  .mt-4 {
  margin-top: 20px;
  }
}
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 48px;
    line-height: 48px;
  }

  p {
    font-size: 14px;
    color: #9A9EA7;
  }
`

const SignUpForm = ({ showOnboarding }: { showOnboarding: () => void }) => (
  <Wrapper>
    <Header>
      <Text as="h2" bold center>Tell us about
        your business</Text>
      <Text greyText center inter>Enter your details to proceed further</Text>
    </Header>
    <div className="w-full">
      <FormInput label="Email" type="email" placeholder="bee@flance.com" required />
      <FormInput label="Company/Username" type="text" placeholder="GetEquity" required />
      <FormInput label="Password" type="password" placeholder="" required />
      <FormInput label="Confirm Password" type="password" placeholder="" required />
      <div className="mt-4">
        <FormCheck label="I agree with terms &amp; conditions" />
      </div>
    </div>
    <Button onClick={showOnboarding} primary lg>Continue</Button>
  </Wrapper>
)

export default SignUpForm