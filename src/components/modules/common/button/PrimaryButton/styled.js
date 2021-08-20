import styled from 'styled-components';

export const Button = styled.button `
  background-color: ${props => props.theme.colors.blue};
  color: white;
  padding: 12px 24px;
  border-radius:40px;
  border: none;
  font-size: 16px; 
  font-family: ${props => props.theme.fonts.boldFont};
`;