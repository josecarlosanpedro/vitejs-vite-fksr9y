import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Main() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleHome = () => {
    console.log('home');
    navigate('/home');
    return;
  };
  const handleLogin = () => {
    console.log('home');
    navigate('/login');
    return;
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Link to={'/login'}>Login Now</Link>
      <button onClick={handleLogin}> Login </button>
      <button onClick={handleHome}> Home </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Main;