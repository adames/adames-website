import Button from "./Button";
import styled from 'styled-components';

const NavBarStyle = styled.nav`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 5px;
`

const NavBarContent = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 5px;
`

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Button />
        <Button />
        <Button />
      </div>
    </nav>
  );
}
export default NavBar;