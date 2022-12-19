import styled from "styled-components";
import { Link } from "react-router-dom";

/* #ffcccc / #ffb8b8 / #fc7979, rgb(252, 121, 121) */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #ffb8b8;
`;
const Container = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 60px 40px;
  border-radius: 10px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 40px rgba(252, 121, 121, 0.8);

  @media all and (max-width: 767px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 60px 0 80px;
`;
const Input = styled.input`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 18px;
  color: #222;

  &::placeholder {
    color: #ccc;
  }
  &:focus {
    border: 1px solid transparent;
    outline: 2px solid #fc7979;
  }
`;
const Button = styled.button`
  padding: 20px;
  border: none;
  border-radius: 15px;
  background: #fc7979;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const BottomText = styled.div`
  text-align: center;

  span {
    font-size: 16px;
    color: #aaa;
  }
  a {
    color: #fc7979;
    cursor: pointer;
  }
`;

function Login() {
  return (
    <Wrapper>
      <Container>
        <Title>LOGIN</Title>
        <Form>
          <Input type="text" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
          <Button>Submit</Button>
        </Form>
        <BottomText>
          <span>Don't have an account? </span>
          <Link to="/join">Sign Up</Link>
          <span>.</span>
        </BottomText>
      </Container>
    </Wrapper>
  );
}

export default Login;
