import styled from "styled-components";
import { useState } from "react";
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
  margin-top: 60px;

  button {
    margin-top: 40px;
  }
`;
const ErrMsg = styled.p`
  color: ${(props) => props.theme.red};
`;

function Join() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwConfirmValue, setPwConfirmValue] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [modal, setModal] = useState(false);

  let disabledBtn = false;
  nameValue.length !== 0 &&
  emailValue.length !== 0 &&
  pwValue.length !== 0 &&
  pwConfirmValue.length !== 0
    ? (disabledBtn = true)
    : (disabledBtn = false);

  const onValid = (e) => {
    e.preventDefault();

    // 회원가입 조건
    if (emailValue.includes("@")) {
      setEmailMsg("");
      if (pwValue === pwConfirmValue) {
        if (pwValue.length >= 8) {
          setPwMsg("");
          setModal(true);
        } else {
          setPwMsg("비밀번호가 너무 짧습니다.");
        }
      } else {
        setPwMsg("비밀번호가 일치하지 않습니다.");
      }
    } else {
      setEmailMsg("올바른 이메일 주소를 입력해주세요.");
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>JOIN</Title>
        <Form onSubmit={onValid}>
          <Input
            type="text"
            placeholder="Name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            focusColor={theme.pink.darker}
          />
          <Input
            type="text"
            placeholder="E-mail"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
              setEmailMsg("");
            }}
            focusColor={theme.pink.darker}
          />
          {emailMsg.length !== 0 && <ErrMsg>➔ {emailMsg}</ErrMsg>}
          <Input
            type="password"
            placeholder="Password (8 characters more)"
            value={pwValue}
            onChange={(e) => {
              setPwValue(e.target.value);
              setPwMsg("");
            }}
            focusColor={theme.pink.darker}
          />
          <Input
            type="password"
            placeholder="Password Confirm"
            value={pwConfirmValue}
            onChange={(e) => {
              setPwConfirmValue(e.target.value);
              setPwMsg("");
            }}
            focusColor={theme.pink.darker}
          />
          {pwMsg.length !== 0 && <ErrMsg>➔ {pwMsg}</ErrMsg>}
          {disabledBtn ? (
            <Btn text="Submit" btnColor={theme.pink.darker} />
          ) : (
            <Btn text="Submit" btnColor={theme.black.lighter} disabled={true} />
          )}
        </Form>
      </Container>
      {modal && (
        <Modal
          title="SignUp"
          desc="Sign up is Complete."
          btnText="Confirm"
          onClick={() => setModal(false)}
        />
      )}
    </Wrapper>
  );
}

export default Join;
