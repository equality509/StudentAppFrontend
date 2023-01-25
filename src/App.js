import { Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
    <h1>The Student Tracker</h1>
    <div className="App">
      <Outlet/>
    </div>
    </>
  );
}

export default App;