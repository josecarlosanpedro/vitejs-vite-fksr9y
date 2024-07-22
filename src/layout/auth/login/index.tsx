import { useForm } from "react-hook-form";
import { useLogin } from "../apis/login";
import { setTokens } from "../../../utils/cookies";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
    const { mutateAsync, isPending } = useLogin();
    const navigate = useNavigate();
    const handleLogin = async (data: any) =>  {
        console.log(data);
        const response = await mutateAsync(data)
        console.log('response.status', response.status)
        if(response.status === 200) {
            setTokens(response.data)
            navigate('/home')
        }
    }
    const handleRegister = () => {
        navigate('registration');
    }

    return (
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
        <h3>Login</h3>  
            <div className="_text-align-left">
            <p>Email</p>
            <input className="_bottom-margin-md"  {...register("email", { required: "Please enter your email." })} />
            <p>Password</p>
            <input className="_bottom-margin-md" {...register("password", { required: "Please enter your password." })} />
            </div>
            <button type="submit" disabled={isPending}> Login </button>
            <button onClick={handleRegister}> Register </button>
        </form>
        <Link to={'forgot-password'}>Forgot Password</Link>
      </div>
    );
  }
  
export default Login;
  