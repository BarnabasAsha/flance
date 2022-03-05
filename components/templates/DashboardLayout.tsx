import styled from "styled-components";

const DashboardLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`

export default DashboardLayout