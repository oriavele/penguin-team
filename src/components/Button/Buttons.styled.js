import styled from 'styled-components';

const lightColor = '#EEF1F4'
const darkColor = '#667080'

export const ButtonContainer = styled('button')`
  border: 0;
  outline: 0;
  font-size: inherit;
  line-height: 1;
  cursor: pointer;
  padding: 0.75rem 1.125rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0,0,0,0.25);
  color: ${props => props.light ? darkColor : lightColor};
  background-color: ${props => props.light ? lightColor : darkColor}; 
`