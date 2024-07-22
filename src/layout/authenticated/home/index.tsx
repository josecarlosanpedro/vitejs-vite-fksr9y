import { clearToken } from "../../../utils/cookies";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleLogout =() =>  {
        clearToken() 
        navigate('/')
    }
    return (
      <>
        <div>this is home</div>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }
  
  export default Home;
  