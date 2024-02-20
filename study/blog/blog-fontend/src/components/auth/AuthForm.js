import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../lib/styles/theme';
import Button from '../common/Button';

const textMap = {
  login: '로그인',
  register: '회원가입'
};

// 회원가입 또는 로그인 폼을 보여 줍니다.
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${theme.colors.gray[800]};
    margin-bottom: 1rem;
  }
`;

// 스타일된 input
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${theme.colors.gray[500]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${theme.colors.teal[700]};
    border-bottom: 1px solid ${theme.colors.gray[700]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

// 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${theme.colors.gray[600]};
    text-decoration: underline;
    &:hover {
      color: ${theme.colors.gray[900]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        ></StyledInput>
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        ></StyledInput>
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          ></StyledInput>
        )}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/register">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
