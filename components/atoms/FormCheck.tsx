import styled from "styled-components";
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.theme.aux};
  display: flex;
  justify-content: center;
  align-items: center;

  .check {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.theme.white};
    opacity: 0;
  }

  input[type=checkbox] {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  input[type=checkbox]:checked + .check {
    opacity: 1;
  }
`

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  column-gap: 5px;

  .label {
    font-size: 14px;
    font-weight: 600;
    font-family: 'Inter' sans-serif;
    color: #9A9EA7;
    margin-left: 3px;
  }
`

const FormCheck = ({ label, ...otherProps }: InputProps) => (
  <Wrapper htmlFor={label.trim()}>
    <CheckBox>
      <input type="checkbox" id={label.trim()} {...otherProps} />
      <div className="check"></div>
    </CheckBox>
    <div className="label">{label}</div>
  </Wrapper>
)

export default FormCheck