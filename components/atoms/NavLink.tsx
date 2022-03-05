import styled from "styled-components"

interface Props {
  active?: boolean
}

const NavLink = styled.a<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  column-gap: 18px;
  
  ${props => props.active ? `
    background: #8761F5;
    color: #ffffff;

    svg {
      stroke:#F2F2F2;
    }

  `: `
    background: transparent;
    color: #808191;

    svg {
      stroke:#808191;
    }
  `}
`

export default NavLink