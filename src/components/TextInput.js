import styled from "styled-components";

const Input = styled.input`
  flex: 1;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.black.lighter};
  border-radius: 15px;
  font-size: 18px;
  color: ${(props) => props.theme.black.veryDark};

  &::placeholder {
    color: ${(props) => props.theme.black.lighter};
  }
  &:focus {
    border: 1px solid transparent;
    outline: 2px solid ${(props) => props.focusColor};
  }
`;

function TextInput(props) {
  const { type, placeholder, value, onChange, focusColor } = props;

  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      focusColor={focusColor}
    />
  );
}

export default TextInput;
