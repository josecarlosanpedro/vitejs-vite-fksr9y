import { useForm } from "react-hook-form";
import { useLogin } from "../apis/login";
import { setTokens } from "../../../utils/cookies";
import { useNavigate } from 'react-router-dom';
import { Notification } from "../../../utils/notifications";

function ForgotPassword() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleLogin = async () =>  {
      navigate('/auth');
    }
    const handleForgotPassword = () => {
        Notification('No Open API available', 'error')
    }

    return (
      <div>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
            <div>
            <h3>Forgot Password</h3>
            <p>Email</p>
            <input className="_bottom-margin-md" {...register("email", { required: true })} />
            </div>
            <button type="submit"> Send Verification </button>
            <button onClick={handleLogin}> Login </button>
        </form>
      </div>
    );
  }

  
export default ForgotPassword;
  