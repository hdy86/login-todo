import styled from "styled-components";
import Btn from "./Btn";
import { theme } from "../theme";

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.black.opacity};
  z-inde: 500;
`;
const Modal = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 50px 20px 20px;
  border-radius: 15px;
  box-sizing: border-box;
  background: ${(props) => props.theme.white};
  text-align: center;
  overflow: hidden;

  button {
    width: 100%;
    margin-top: 60px;
  }
`;
const Title = styled.h6`
  font-size: 28px;
  font-weight: bold;
`;
const Desc = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

function ConfirmModal(props) {
  const { onClick, title, desc, btnText } = props;

  return (
    <ModalWrap>
      <Modal>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Btn onClick={onClick} text={btnText} btnColor={theme.black.veryDark} />
      </Modal>
    </ModalWrap>
  );
}

export default ConfirmModal;
