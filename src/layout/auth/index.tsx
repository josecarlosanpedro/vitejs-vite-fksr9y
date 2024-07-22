import { Outlet } from 'react-router';

import Login from "./login";
import Registration from "./registration";
import { Link } from 'react-router-dom';

function Auth() {
    return (
      <div>
        <h2>Authentication Page</h2>
        <div className="auth-card flex w-full shrink-0 flex-col bg-white lg:justify-between">
            <Outlet />
        </div>
        <p>Please refer to this documentation for auth testing <Link to={'https://reqres.in/'}> https://reqres.in/</Link></p>
        <Link to={'/'}>Go to Main</Link> <br/>
      </div>
    );
  }
  
  export default Auth;
  