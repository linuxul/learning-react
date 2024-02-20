import styled, { css } from 'styled-components';
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

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${theme.colors.cyan[400]};
    `}
`;

const Button = ({ cyan, fullWidth, ...props }) => (
  <StyledButton cyan={cyan ? 1 : 0} fullWidth={fullWidth ? 1 : 0} {...props} />
);

export default Button;
