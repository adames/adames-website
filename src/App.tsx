import './App.css';
import Nav from './components/Nav';
import Window from './components/Window';
import TitlePage from './components/TitlePage';

const App = () => {
  return (
    <div className="content">
      <Window>
        <Nav/>
        <TitlePage />
      </Window>
    </div>
  );
};

export default App;
