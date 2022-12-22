import styled from "styled-components";
import { useState } from "react";
import { theme } from "../theme";
import Input from "../components/TextInput";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.blue.blue};
`;
const Container = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 60px 40px;
  border-radius: 10px;
  background: ${(props) => props.theme.white};
  box-sizing: border-box;
  box-shadow: 0 0 40px ${(props) => props.theme.blue.opacity};

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
  gap: 10px;
  margin-top: 40px;
`;
const PlusBtn = styled.button`
  padding: 20px 30px;
  border: none;
  border-radius: 15px;
  background: ${(props) => props.theme.blue.darker};
  font-size: 20px;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  cursor: pointer;
`;

const Ul = styled.ul`
  margin-top: 40px;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 0 20px;
  box-sizing: border-box;
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => props.theme.black.lighter};
  border-radius: 4px;
  cursor: pointer;
`;
const CheckTrue = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${(props) => props.theme.blue.darker};
`;
const Text = styled.p`
  flex: 1;
  font-size: 20px;
`;
const DelBtn = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;
const todo = [
  { id: 1, text: "이름", checked: false },
  { id: 2, text: "이름", checked: false },
  { id: 3, text: "이름", checked: false },
];

function ToDo() {
  const [toDos, setToDos] = useState(todo);

  return (
    <Wrapper>
      <Container>
        <Title>ToDo List</Title>
        <Form>
          <Input
            type="text"
            placeholder="Add Todo..."
            focusColor={theme.blue.darker}
          />
          <PlusBtn>+</PlusBtn>
        </Form>
        <Ul>
          {toDos.map(({ id, text, checked }) => (
            <Li key={id}>
              <CheckBox>{checked && <CheckTrue />}</CheckBox>
              <Text>{text}</Text>
              <DelBtn>🗑️</DelBtn>
            </Li>
          ))}
        </Ul>
      </Container>
    </Wrapper>
  );
}

export default ToDo;
