import styled from "styled-components"
import { FormRadio, Text } from "../atoms"

type Option = {
  label: string,
  icon: any
}

interface Props {
  options: Option[]
  name: string
  title: string
  subtitle: string
  stepOne?: boolean
  handleChange: () => void
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`

const Flex = styled.div<{ grid: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin: 30px 0;

  ${props => props.grid && `
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 15px;

     @media only screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
  `}
`

const Header = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
  row-gap: 5px;
`

const FormStep = ({ title, subtitle, options, name, handleChange, stepOne = false }: Props) => (
  <Wrapper>
    <Header reverse={stepOne}>
      <Text greyText>{subtitle}</Text>
      <Text as="h3" lg bold>{title}</Text>
    </Header>
    <Flex grid={stepOne}>
      {
        options.map(option => (
          <FormRadio key={option.label} value={option.label} label={option.label} icon={option.icon} name={name} onChange={() => handleChange()} />
        ))
      }
    </Flex>
  </Wrapper>
)

export default FormStep