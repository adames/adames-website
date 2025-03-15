import { ReactNode } from 'react';

interface WindowProps {
  children: ReactNode;
}

const Window = ({ children }: WindowProps) => {
  return (
    <div className="window">
      <header className="window-header">
      </header>
      <body className="window-body">
        { children }
      </body>
    </div>
  );
}
export default Window;