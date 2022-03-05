import styled from "styled-components";

const AltButton = styled.button`
  width: 100%;
  height: 54px;
  background: #FFFFFF;
  cursor: pointer;
  border: 1px solid #EDE8E9;
  margin: 6px 0;
  display: flex;
  padding: 18px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #9A9EA7;
  border-radius: 10px;
  position: relative;

  .absolute {
    position: absolute;
    top: 27px;
    left: 18px;
    transform: translateY(-50%);
  }
`

export default AltButton