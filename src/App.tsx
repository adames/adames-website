import './App.css';
import Nav from './components/Nav';
import Window from './components/Window';

const App = () => {
  return (
    <div className="content">
      <Window>
        <Nav/>
      </Window>
    </div>
  );
};

export default App;
