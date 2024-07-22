import { useForm } from "react-hook-form";
import { setTokens } from "../../../utils/cookies";
import { useNavigate } from 'react-router-dom';
import { useRegistration } from "../apis/registration";

function Registration() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
    const { mutateAsync, isPending } = useRegistration();
    const navigate = useNavigate();
    const handleRegistration = async (data: any) =>  {
        console.log(data);
        const response = await mutateAsync(data)
        console.log('response.status', response.status)
        if(response.status === 200) {
            setTokens(response.data)
            navigate('/home')
        }
    }
    const handleLogin = () =>  {
      navigate('/auth')
    }

    return (
      <div>
        <form onSubmit={handleSubmit(handleRegistration)}>
            <div>
            <h3>Registration</h3>
            <p>Email</p>
            <input className="_bottom-margin-md"{...register("email", { required: "Please enter your email." })} />
            <p>Password</p>
            <input className="_bottom-margin-md"  {...register("password", { required: "Please enter your password." })} />
            </div>
            <button type="submit" disabled={isPending}> Register </button>
            <button onClick={handleLogin}> Login </button>
        </form>
      </div>
    );
  }
  
export default Registration;
  