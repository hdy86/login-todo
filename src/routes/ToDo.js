import styled from "styled-components";
import { useEffect, useState } from "react";
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
  max-height: 90vh;
  padding: 60px 40px;
  border-radius: 10px;
  background: ${(props) => props.theme.white};
  box-sizing: border-box;
  box-shadow: 0 0 40px ${(props) => props.theme.blue.opacity};
  overflow-y: auto;

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
  text-decoration: ${(props) => props.checked && "line-through"};
`;
const Btns = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

function ToDo() {
  const [toDos, setToDos] = useState([]);
  const [toDoValue, setToDoValue] = useState("");

  const addToDo = (e) => {
    e.preventDefault();

    if (toDoValue.length !== 0) {
      const newToDo = { id: Date.now(), text: toDoValue, checked: false };
      setToDos((state) => [...state, newToDo]);
      setToDoValue("");
    }
  };
  const deleteToDo = (id) => {
    setToDos((state) => {
      return state.filter((item) => item.id !== id);
    });
  };
  const checkToDo = (id) => {
    setToDos((state) => {
      const newToDo = state.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      return newToDo;
    });
  };

  return (
    <Wrapper>
      <Container>
        <Title>ToDo List</Title>
        <Form onSubmit={addToDo}>
          <Input
            type="text"
            placeholder="Add Todo..."
            value={toDoValue}
            onChange={(e) => setToDoValue(e.target.value)}
            focusColor={theme.blue.darker}
          />
          <PlusBtn>+</PlusBtn>
        </Form>
        <Ul>
          {toDos.map(({ id, text, checked }) => (
            <Li key={id}>
              <CheckBox onClick={() => checkToDo(id)}>
                {checked && <CheckTrue />}
              </CheckBox>
              <Text checked={checked}>{text}</Text>
              <Btns onClick={() => deleteToDo(id)}>🗑️</Btns>
            </Li>
          ))}
        </Ul>
      </Container>
    </Wrapper>
  );
}

export default ToDo;
