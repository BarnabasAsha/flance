/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { ClientsSvg, ContractSvg, EarningsSvg, JobsSvg, LogoSvg, NavLink, OverviewSvg, PayoutSvg, ProjectsSvg, ProposalsSvg, SchedulesSvg, Text } from "../atoms"
import SettingsSvg from "../atoms/icons/settings-svg"

const Container = styled.header`
   width: 30%;
  max-width: 256px;
  overflow-y: auto;
  background: #ffffff;
  

  .menu {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    width: auto;
  max-width: 100%;
    display: flex;
  justify-content: flex-end;
  border-right: 1px solid #E4E4E4;

        .menu {
          margin-top: 8px;
          margin-right: 20px;
          display: flex;
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
            background: #000000;
          }

          span:last-child {
            width: 80%
          }
        }
    }
`

const Wrapper = styled.div<{ show?: boolean }>`
  width: auto;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  background: #ffffff;
  border-right: 1px solid #E4E4E4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  -ms-overflow-style: none;
  scrollbar-width: none; 
  transition: all .3s;

  &::-webkit-scrollbar {
  display: none;
  }

  @media only screen and (max-width: 700px) {
    width: 30%;
  max-width: 256px;
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    z-index: 100;
    display: none;

    ${props => props.show && `
      display: flex;
    `}
  }
`

const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  column-gap: 5px;

  svg {
    width: 40px;
  }

  p {
    font-size: 26px;
    line-height: 36px;
    color: #5454D4;  
    font-weight: bold;
  }
`

const MainNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #E4E4E4;
`

const Tools = styled(MainNav)`
  border-bottom: none;
  margin-top: 10px;
  p {
    width: 100%;
    padding: 20px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #808191;
  }
`

const links = {
  main: [
    {
      name: "Overview",
      icon: <OverviewSvg />
    },
    {
      name: "Projects",
      icon: <ProjectsSvg />
    },
    {
      name: "Clients",
      icon: <ClientsSvg />
    },
    {
      name: "Jobs",
      icon: <JobsSvg />
    }
  ],
  tools: [
    {
      name: "Schedules",
      icon: <SchedulesSvg />
    },
    {
      name: "Proposals",
      icon: <ProposalsSvg />
    },
    {
      name: "Contract",
      icon: <ContractSvg />
    },
    {
      name: "Payout",
      icon: <PayoutSvg />
    },
    {
      name: "Earnings",
      icon: <EarningsSvg />
    },
    {
      name: "Settings",
      icon: <SettingsSvg />
    },
  ]
}

const DashboardHeader = () => {
  const [showHeader, setShowHeader] = useState(false)

  return (
    <Container>
      <button onClick={() => setShowHeader(state => !state)} className="menu">
        <span></span>
        <span></span>
      </button>
      <Wrapper show={showHeader}>
        <Logo>
          <LogoSvg />
          <Text josefin>Flance</Text>
        </Logo>
        <MainNav>
          {
            links.main.map(linkItem => (
              <Link href="" key={linkItem.name} passHref>
                <NavLink active={linkItem.name === 'Overview'}>
                  {linkItem.icon}
                  <span>{linkItem.name}</span>
                </NavLink>
              </Link>
            ))
          }
        </MainNav>
        <Tools>
          <Text>Tools</Text>
          {
            links.tools.map(linkItem => (
              <Link href="" key={linkItem.name} passHref>
                <NavLink>
                  {linkItem.icon}
                  <span>{linkItem.name}</span>
                </NavLink>
              </Link>
            ))
          }
        </Tools>
      </Wrapper>
    </Container>
  )
}
export default DashboardHeader