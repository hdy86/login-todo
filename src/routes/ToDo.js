import styled from "styled-components";
import { useEffect, useState } from "react";
import { theme } from "../theme";
import Input from "../components/TextInput";
import Modal from "../components/ConfirmModal";

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
const InputWrap = styled.div`
  flex: 1;
`;
const PlusBtn = styled.button`
  padding: 20px;
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

  @media all and (max-width: 767px) {
    gap: 5px;
    padding: 0 10px;
  }

  input {
    padding: 10px;
    border-radius: 5px;
  }
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
  padding: 11px 0;
`;
const Btns = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

const TODOS = "toDos";

function ToDo() {
  const [toDos, setToDos] = useState([]);
  const [toDoValue, setToDoValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editing, setEditing] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const savedToDos = localStorage.getItem(TODOS);

    if (savedToDos !== null) {
      setToDos(JSON.parse(savedToDos));
    }
  }, []);
  useEffect(() => {
    saveToDos();
  }, [toDos]);

  const addToDo = (e) => {
    e.preventDefault();

    if (toDoValue.length !== 0) {
      const newToDo = {
        id: Date.now(),
        text: toDoValue,
        checked: false,
        editable: false,
      };
      setToDos((state) => [...state, newToDo]);
      setToDoValue("");
    }
  };
  const deleteToDo = (id) => {
    setToDos((state) => {
      return state.filter((item) => item.id !== id);
    });
  };
  const editToDo = (type, id, text) => {
    const editChange = () => {
      setToDos((state) => {
        return state.map((item) =>
          item.id === id ? { ...item, editable: !item.editable } : item
        );
      });
    };

    if (type === 0) {
      // 수정
      setEditValue(text);
      setEditing(true);
      editChange();
    } else if (type === 1) {
      // 수정 완료
      setEditing(false);
      setToDos((state) => {
        return state.map((item) =>
          item.id === id
            ? { ...item, text: editValue, editable: !item.editable }
            : item
        );
      });
    } else if (type === 2) {
      // 수정 취소
      if (text === editValue) {
        setEditing(false);
        editChange();
      } else {
        setModal(true);
      }
    }
  };
  const checkToDo = (id) => {
    setToDos((state) => {
      return state.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
    });
  };
  const saveToDos = () => {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
  };

  return (
    <Wrapper>
      <Container>
        <Title>ToDo List</Title>
        <Form onSubmit={addToDo}>
          <InputWrap>
            <Input
              type="text"
              placeholder="Add Todo..."
              value={toDoValue}
              onChange={(e) => setToDoValue(e.target.value)}
              focusColor={theme.blue.darker}
            />
          </InputWrap>
          <PlusBtn>+</PlusBtn>
        </Form>
        <Ul>
          {toDos.map(({ id, text, checked, editable }) => (
            <Li key={id}>
              <CheckBox onClick={() => checkToDo(id)}>
                {checked && <CheckTrue />}
              </CheckBox>
              {!editable ? (
                <>
                  <Text checked={checked}>{text}</Text>
                  <Btns onClick={() => !editing && editToDo(0, id, text)}>
                    ✏️
                  </Btns>
                </>
              ) : (
                <>
                  <InputWrap>
                    <Input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      focusColor={theme.blue.darker}
                    />
                  </InputWrap>
                  <Btns onClick={() => editToDo(1, id, text)}>💾</Btns>
                  <Btns onClick={() => editToDo(2, id, text)}>❌</Btns>
                </>
              )}
              <Btns onClick={() => deleteToDo(id)}>🗑️</Btns>
            </Li>
          ))}
        </Ul>
      </Container>
      {modal && (
        <Modal
          title="Check"
          desc={"You were Editing. Are you want to cancel?"}
          btnText="Confirm"
          onClick={() => {
            setToDos((state) => {
              return state.map((item) =>
                item.editable === true
                  ? { ...item, editable: !item.editable }
                  : item
              );
            });
            setEditing(false);
            setModal(false);
          }}
          btnText2="Cancel"
          onClick2={() => setModal(false)}
        />
      )}
    </Wrapper>
  );
}

export default ToDo;
