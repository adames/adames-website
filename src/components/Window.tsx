import { ReactNode } from 'react';
import styled from 'styled-components';

interface WindowProps {
  children: ReactNode;
}

const WindowContainer = styled.nav`
border: 1px solid black;
border-radius: 5px;
padding: 10px 20px;
margin-bottom: 5px;
`;

const Window = ({ children }: WindowProps) => {
  return (
    <WindowContainer>
      { children }
    </WindowContainer>
  );
}
export default Window;