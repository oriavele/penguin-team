import { ButtonContainer } from './Buttons.styled'
import plusDark from '../../utils/plus_dark.svg'
import plusLight from '../../utils/plus_light.svg'

const Button = ({ label, onClick, light }) => {
  return (
    <ButtonContainer onClick={onClick} light={light || false}>
      {light ? (
        <img src={plusDark} alt="dark plus icon" />
      ) : (
        <img src={plusLight} alt="light plus icon" />
      )}

      <span>{label}</span>
    </ButtonContainer>
  )
}

export default Button
