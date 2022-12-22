import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../theme";
import Input from "../components/TextInput";
import Btn from "../components/Btn";
import Modal from "../components/ConfirmModal";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.pink.pink};
`;
const Container = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 60px 40px;
  border-radius: 10px;
  background: ${(props) => props.theme.white};
  box-sizing: border-box;
  box-shadow: 0 0 40px ${(props) => props.theme.pink.opacity};

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

const BottomText = styled.div`
  text-align: center;

  span {
    font-size: 16px;
    color: ${(props) => props.theme.black.veryLight};
  }
  a {
    color: ${(props) => props.theme.pink.darker};
    cursor: pointer;
  }
`;

function Login() {
  const [failModal, setFailModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (true) {
      setSuccessModal(true);
    } else {
      setFailModal(true);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>LOGIN</Title>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="E-mail"
            focusColor={theme.pink.darker}
          />
          <Input
            type="password"
            placeholder="Password"
            focusColor={theme.pink.darker}
          />
          <Btn text="Submit" btnColor={theme.pink.darker} />
        </Form>
        <BottomText>
          <span>Don't have an account? </span>
          <Link to="/join">Sign Up</Link>
          <span>.</span>
        </BottomText>
      </Container>
      {failModal && (
        <Modal
          title="Login Fail"
          desc="Please check E-mail or Password."
          btnText="Confirm"
          onClick={() => setFailModal(false)}
        />
      )}
      {successModal && (
        <Modal
          title="Login"
          desc="Login is Complete."
          btnText="Confirm"
          onClick={() => setSuccessModal(false)}
        />
      )}
    </Wrapper>
  );
}

export default Login;
