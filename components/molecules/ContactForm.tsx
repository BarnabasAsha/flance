import styled from "styled-components";
import { Button } from "../atoms";

const Wrapper = styled.form`
  width: 100%;
  max-width: 445px;
  display: flex;
  flex-direction: column;
  row-gap: 21px;
`
const Input = styled.div`
  width: 100%;
  height: 70px;
  background: ${props => props.theme.white};
  border: 1px solid #EAE9F2;
  border-radius: 16px;  
  display: flex;
  align-items: center;
  padding: 20px;

  input {
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
    margin-left: 10px;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.562737px;
    color: ${props => props.theme.textGrey};

    &:focus {
      outline: none;
    }

  }
`

const ContactForm = () => (
  <Wrapper>
    <Input>
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L11.5 10L21 2" stroke="#CDCCD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="1" y="1" width="20" height="16" rx="2" stroke="#CDCCD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input type="text" placeholder="Email Address" />
    </Input>
    <Button primary lg>Find Talent</Button>
  </Wrapper>
)

export default ContactForm