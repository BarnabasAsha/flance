import styled from "styled-components";

interface Props {
  inter?: boolean
  bold?: boolean
  medium?: boolean
  grey?: boolean
  white?: boolean
  greyText?: boolean
  blue?: boolean
  greyHeading?: boolean
  prim?: boolean
  xxl?: boolean
  xl?: boolean
  lg?: boolean
  md?: boolean
  center?: boolean
  josefin?: boolean
}
const Text = styled.p<Props>`
  font-family: ${(props) => props.inter ? `'Inter', sans-serif` : props.josefin ? `'Josefin Sans', sans-serif;` : `'Circular Std', sans-serif`};
  font-weight: ${(props) => props.bold ? '700' : props.medium ? '500' : '400'};
  color: ${(props) => props.grey ? props.theme.mainGrey : props.white ? props.theme.white : props.greyText ? props.theme.textGrey : props.greyHeading ? props.theme.headingGrey : props.blue ? props.theme.tet : props.prim ? props.theme.prim : props.theme.textBlack};
  text-align: ${(props) => props.center ? 'center' : 'left'};
  ${(props) => props.xxl ? `
    font-size: 80px;
    line-height: 96px;
  `: props.xl ? `
    font-size: 60px;
    line-height: 70px;
  ` : props.lg ? `
    font-size: 24px;
    line-height: 30.36px;
  ` :
    props.md ? `
    font-size: 21px;
    line-height: 39px;
  `: `
    font-size: 1rem;
    line-height: 28px;
  `}

  @media only screen and (max-width: 700px) {
    ${(props) => props.xxl ? `
    font-size: 45px;
    line-height: 60px;
  `: props.xl ? `
    font-size: 40px;
    line-height: 50px;
  ` : props.lg ? `
    font-size: 24px;
    line-height: 30.36px;
  ` :
    props.md ? `
    font-size: 21px;
    line-height: 39px;
  `: `
    font-size: 1rem;
    line-height: 28px;
  `}
  }
`

export default Text;