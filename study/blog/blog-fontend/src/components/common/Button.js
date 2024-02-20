import styled from 'styled-components';
import theme from '../../lib/styles/theme';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${theme.colors.gray[800]};
  &:hover {
    background: ${theme.colors.red[600]};
  }
`;

const Button = (props) => <StyledButton {...props}></StyledButton>;

export default Button;
