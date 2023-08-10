import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainLayout>
     <Home/>
    </MainLayout>  
    </>
  )
}

export default App