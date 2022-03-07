/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Text } from '../atoms'
import Button from '../atoms/Button'

const menuAnimate = keyframes`
  0% {transform: translateX(50px)}
  100% {transform: translateX(0)}
`

const HeaderWrapper = styled.header`
position: relative;
z-index: 1000;
height: 80px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const ImgWrapper = styled.div`
  width: 135px;
`

const CtaWrapper = styled.nav<{ show: boolean }>`
  div {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 30px;
  }

  @media only screen and (max-width: 700px) {
    div {
      display: ${props => props.show ? 'flex' : 'none'};
      position: fixed;
      top: 60px;
      width: 200px;
      height: 200px;
      right: 20px;
      background: ${props => props.theme.prim};
      padding: 10px;
      flex-direction: column;
      justify-content: center;
      row-gap: 20px;
      border-radius: 24px;
      box-shadow: 0px 52px 54px rgba(65, 62, 101, 0.102519);
      animation: ${menuAnimate};
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
  }
`

const Menu = styled.button`
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          row-gap: 8px;
          width: 40px;
          height: 50px;
          padding: 5px;
          background: none;
          border: none;

          span {
            display: block;
            height: 1.5px;
            width: 100%;
            background: #ffffff;
          }

          span:last-child {
            width: 80%
          }

        @media only screen and (max-width: 700px) {
          display: flex;
        }
`

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <HeaderWrapper>
      <ImgWrapper>
        <img src="/images/logo.svg" alt="" />
      </ImgWrapper>
      <CtaWrapper show={showMenu}>
        <Menu onClick={() => setShowMenu(state => !state)}>
          <span></span>
          <span></span>
        </Menu>
        <div>
          <Text as="a" href="#" white medium>How it works</Text>
          <Link href="/login" passHref>
            <Button as="a" href="#">Login</Button>
          </Link>
        </div>
      </CtaWrapper>
    </HeaderWrapper>
  )
}

export default Header