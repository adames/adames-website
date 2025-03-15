import './App.css';
import NavBar from './components/NavBar';
import Window from './components/Window';

const App = () => {
  return (
    <div className="content">
      <Window>
        <NavBar />
      </Window>
    </div>
  );
};

export default App;
