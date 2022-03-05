import styled from "styled-components";
import { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: any;
}

const Wrapper = styled.label`
  position: relative;
  width: 100%;
  max-width: 556px;
  height: 61px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 17px;
  border: 1px solid #E0E0E0;
  border-radius: 16px;
  padding: 18px 15px;

  .radio {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid #E0E0E0;
    border-radius: 16px;
    z-index: 5;
  }

  input[type=radio] {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;

    &:checked + .radio {
    border: 1px solid ${props => props.theme.prim};
    }
  }

  .label {
    font-family: 'Inter' sans-serif;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.1px;
    color: #4F4F4F;
  }
`

const FormRadio = ({ label, icon, ...otherProps }: InputProps) => (
  <Wrapper htmlFor={label.trim()}>
    <input type="radio" id={label.trim()} {...otherProps} />
    <div className="radio"></div>
    {icon}
    <div className="label">{label}</div>
  </Wrapper>
)

export default FormRadio