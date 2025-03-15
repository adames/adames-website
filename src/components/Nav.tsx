import Button from "./Button";
import styled from "styled-components";

const NavContainer = styled.nav`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 5px;
`;

const NavBar = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 5px;
`;
const Nav = () => {
  return (
    <NavContainer>
      <NavBar>
        <Button title="Home" />
        <Button title="Resume" />
        <Button title="Github" />
      </NavBar>
    </NavContainer>
  );
};
export default Nav;
