import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";


const App = () => {
  return (
    <div className="App">

      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>

        <div className='sidenav-container'>

        </div>
        <div className='main-container'>
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default App;
