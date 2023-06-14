import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { RegisterDoctor } from './components/RegisterDoctor';
import Landing from './components/Landing/Landing';
function App() {
  const [data,setData] = useState();
  return (
    <div className="App">
      {/* <RegisterDoctor></RegisterDoctor> */}
      <Landing></Landing>
    </div>
  );
}

export default App;
