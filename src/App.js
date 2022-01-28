import {  Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './Components/AppRouter';
import Navbar from './Components/NavBar';

function App() {
  return (
   
      <BrowserRouter>
        <Layout>
          <Navbar />
          <div className="App">
            <AppRouter/>
          </div>
        </Layout>
      </BrowserRouter>
    
  );
}

export default App;
