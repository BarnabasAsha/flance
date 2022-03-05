import styled from "styled-components";
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}


const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid #E4E6E8;
  border-radius: 16px;
  z-index: 5;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: baseline;
  width: 100%;
  max-width: 420px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid #E4E6E8;
  position: relative; 
  padding: 10px 20px;
  margin: 8px 0;

  label {
    position: absolute;
    top: 32px;
    transform: translateY(-50%);
    left: 20px;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.1px;
    color: #9A9EA7;
    font-family: 'Inter' sans-serif;
    font-weight: 600;
    transition: all .1s ease-in;
    transition: all 0.2s;
    touch-action: manipulation;
    z-index: 10;
  }


`

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  touch-action: manipulation;
  z-index: 10;
  color: #0D0A19;

  &:focus {
    margin-top: 10px;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.1px;
    color: #9A9EA7;
    font-family: 'Inter' sans-serif;
    font-weight: 600;
    transition: all .1s ease-in;
    opacity: 0;
  }

  &:focus::placeholder {
    opacity: 1;
  }

  &:focus + label {
    position: absolute;
    top: 18px;
    left: 20px;
    color: #9A9EA7;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  } 

  &:focus ~ .box {
    border: ${props => `1px solid ${props.theme.prim}`};
  }
`

const FormInput = ({ label, ...otherProps }: InputProps) => (
  <Wrapper>
    <Input id={label.trim()} {...otherProps} />
    <label htmlFor={label.trim()}>{label}</label>
    <Box className="box" />
  </Wrapper>
)

export default FormInput;