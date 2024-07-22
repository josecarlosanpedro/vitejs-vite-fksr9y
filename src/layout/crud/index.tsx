import { useForm } from "react-hook-form";
import { useCreate } from "./apis/create";
import { useGet } from "./apis/get";
import { useSearch } from "./apis/search";
import { useState } from "react";
function Crud() {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    
    const [searchId, setSearchId] = useState('');
    const [userId, setUserId] = useState('1');
    const { register: searchRegister, handleSubmit: searchHandleSubmit, watch: searchWatch, formState: { errors: searchError } } = useForm()
    const onSearch = async searchD =>  {
      setSearchId(searchD.id)
    }
    const { mutateAsync, isPending } = useCreate();
    const onSubmit = async data =>  {
        console.log(data);
        const response = await mutateAsync(data)
        reset()
        setUserId(data.userId)
        console.log(response)
    }
  
  
    const { data: getData } = useGet(userId);
    const { data: searchData } = useSearch(searchId);

    return (
      <div className="main-crud">
        <div className="create-form _bottom-margin-md">
          <h2> Create </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="_text-align-left">
            <p>Title</p>
            <input {...register("title", { required: true })} />
            <p>Body</p>
            <input {...register("body", { required: true })} />
            {errors.body && <p>This field is required</p>}
            <p>UserId</p>
            <input className="_bottom-margin-md" {...register("userId", { required: true })} />
            {errors.body && <p>This field is required</p>}
            </div>
            <input type="submit" disabled={isPending}/>
          </form>
        </div>
    
      {/* <form onSubmit={handleSubmit(onSearch)}>
        <div>
        <p>id</p>
        <input placeholder='id' {...register("id", { required: true })} />
        </div>
        <input type="submit"/>
      </form> */}
      <div className="create-form _bottom-margin-md">
        <h2> Search </h2>
        <form onSubmit={searchHandleSubmit(onSearch)}>
          <div className="_text-align-left">
          <p>Id</p>
          <input className="_bottom-margin-md" {...searchRegister("id")} />
          </div>
          <input type="submit"/>
        </form>
      </div>
      { searchId ?
        <div>
         <p>Title {searchData?.title}</p>
         <p>Body {searchData?.body}</p>
        </div>
      :
        <div className="sample table">
                  <table >
                      <tr>
                          <th>UserId</th>
                          <th>Title</th>
                          <th>Body</th>
                      </tr>
                      {getData?.map((i => (
                        <tr key={i.id}>
                          <td>{i.userId}</td>
                          <td>{i.title}</td>
                          <td>{i.body}</td>
                        </tr>
                      )))}
                  </table>
          </div>
      }
     
      
    </div>
    );
  }
  
export default Crud;
  