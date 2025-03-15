import { ReactNode } from 'react';

interface WindowProps {
  children: ReactNode;
}

const Window = ({ children }: WindowProps) => {
  return (
    <div className="window">
      <div className="window-header">
      </div>
      <div className="window-body">
        { children }
      </div>
    </div>
  );
}
export default Window;