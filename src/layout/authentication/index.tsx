import { useForm } from "react-hook-form";
import { useCreate } from "./apis/create";
function Authentication() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const { mutateAsync, isPending } = useCreate();
//   const { mutateAsync, isPending } = useCreate();
    const onSubmit = async data =>  {
        console.log(data);
        const response = await mutateAsync(data)
        console.log(response)
    }
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <p>Title</p>
        <input placeholder='Title' {...register("title", { required: true })} />
        <p>Body</p>
        <input placeholder='Body' {...register("body", { required: true })} />
        {errors.body && <p>This field is required</p>}
        <p>UserId</p>
        <input placeholder='UserId' {...register("userId", { required: true })} />
        {errors.body && <p>This field is required</p>}
        </div>
        <input type="submit" disabled={isPending}/>
      </form>
    );
  }
  
export default Authentication;
  