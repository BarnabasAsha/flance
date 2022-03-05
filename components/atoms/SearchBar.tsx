import styled from "styled-components"

const Wrapper = styled.div`
  min-width: 100px;
  height: 30px;
  background: transparent;
  display: flex;
  align-items: center;
  column-gap: 15px;

  input {
    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 20px;
    color: #808191;
    font-weight: 500;

    &:focus {
      outline: none
    }
  }
`
const SearchBar = () => (
  <Wrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.61154 0C4.30323 0 0 4.20819 0 9.39926C0 14.5903 4.30323 18.7985 9.61154 18.7985C11.8819 18.7985 13.9684 18.0287 15.613 16.7415L18.7371 19.7886L18.8202 19.8586C19.1102 20.0685 19.5214 20.0446 19.7839 19.7873C20.0726 19.5043 20.072 19.0459 19.7825 18.7636L16.6952 15.7523C18.2649 14.0794 19.2231 11.8487 19.2231 9.39926C19.2231 4.20819 14.9198 0 9.61154 0ZM9.61154 1.44774C14.1022 1.44774 17.7426 5.00776 17.7426 9.39926C17.7426 13.7908 14.1022 17.3508 9.61154 17.3508C5.12086 17.3508 1.48044 13.7908 1.48044 9.39926C1.48044 5.00776 5.12086 1.44774 9.61154 1.44774Z" fill="#11142D" />
    </svg>
    <input type="text" placeholder="Search" />
  </Wrapper>
)

export default SearchBar