import { styled } from "styled-components";

interface ButtonProps {
  title: string;
}

const ButtonContainer = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  `;

const Button = ({ title }: ButtonProps) => {
  return (
    <ButtonContainer>
      { title }
    </ButtonContainer>
  );
}
export default Button;