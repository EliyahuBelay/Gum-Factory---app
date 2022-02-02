import './App.css';
import AppRouter from './AppRouter/AppRouter';
import AgentContex from './MyContex/AgentContex';



function App() {
  return (
    <div className="App">
      <AgentContex >
        <AppRouter />
      </AgentContex>

    </div>
  );
}

export default App;
