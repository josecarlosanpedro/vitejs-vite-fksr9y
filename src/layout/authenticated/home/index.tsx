import { clearToken } from "../../../utils/cookies";
import { useNavigate } from 'react-router-dom';
import { Notification } from "../../../utils/notifications";

function Home() {
    const navigate = useNavigate();
    const handleLogout =() =>  {
        clearToken() 
        Notification('Successfully Logout')
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
  