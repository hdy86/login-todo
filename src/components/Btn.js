import styled from "styled-components";

const Button = styled.button`
  padding: 20px;
  border: none;
  border-radius: 15px;
  background: ${(props) => props.btnColor};
  font-size: 20px;
  color: ${(props) => props.theme.white};
  font-weight: bold;

  cursor: ${(props) => !props.disabled && "pointer"};
`;

function Btn(props) {
  const { onClick, text, btnColor, disabled } = props;

  return (
    <Button onClick={onClick} btnColor={btnColor} disabled={disabled}>
      {text}
    </Button>
  );
}

export default Btn;
