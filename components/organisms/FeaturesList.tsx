import styled from "styled-components"

const List = styled.div`
width: auto;
max-width: 600px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 36px;

@media only screen and (max-width: 700px) {
  width: 100%;
}
`

const FeaturesList = ({ children }: { children: React.ReactNode }) => {

  return (
    <List>
      {children}
    </List>
  );
}

export default FeaturesList