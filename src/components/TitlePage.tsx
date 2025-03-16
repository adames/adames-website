import styled from "styled-components";
import Logo from "./Logo";

const TitleStyle = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 5px;
`;

const TitlePage = () => {
  return (
    <TitleStyle>
      <Logo />
    </TitleStyle>
  );
};
export default TitlePage;
