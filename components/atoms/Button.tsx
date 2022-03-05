import styled from "styled-components";

interface Props {
  md?: boolean
  lg?: boolean
  primary?: boolean
  outline?: boolean
  secondary?: boolean
}

const Button = styled.button<Props>`
  border: none;
  outline: none;
  width: 114px;
  height: 44px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 20.24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #ffffff;
  color: #8761F5;

  ${(props) => props.md && `
    width: 201px;
    height: 60px;
    font-size: 21px;
    border-radius: 16px;
    font-weight: 500;
  ` }
  ${(props) => props.lg && `
    width: 100%;
    height: 60px;
    border-radius: 16px;
    font-weight: 600;
  ` }
  ${(props) => props.primary && `
   background: #F04037;
    color: #ffffff;
  ` }
  ${(props) => props.secondary && `
   background: #5454D4;
    color: #ffffff;
  ` }
  ${(props) => props.outline && `
   background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  ` }
`

export default Button