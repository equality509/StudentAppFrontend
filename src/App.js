import { Outlet } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';



function App() {
  return (
    <>
   <Header/>
    <div className="App">
      <Outlet/>
    </div>
    </>
  );
}

export default App;