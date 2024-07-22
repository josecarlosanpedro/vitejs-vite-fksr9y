import { useForm } from "react-hook-form";
import { useCreate } from "./apis/create";
import { useGet } from "./apis/get";
import { useSearch } from "./apis/search";
import { useState } from "react";
function Authentication() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const [searchId, setSearchId] = useState('');
    const { register: searchRegister, handleSubmit: searchHandleSubmit, watch: searchWatch, formState: { errors: searchError } } = useForm();
    const onSearch = async searchD =>  {
      setSearchId(searchD.id)
      console.log('search', searchD.id);
      
      // console.log('131231312', searchData);
      // const response = await mutateAsync(data)
      // console.log(response)
    }
    // const { mutateAsync, isPending } = useCreate();
  const { mutateAsync, isPending } = useCreate();
    const onSubmit = async data =>  {
        console.log(data);
        const response = await mutateAsync(data)
        console.log(response)
        setSearchId(response.id)
    }
  
  
    const { data: searchData } = useSearch(searchId);
    const { data: getData } = useGet();

    return (
      <div>
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
      {/* <form onSubmit={handleSubmit(onSearch)}>
        <div>
        <p>id</p>
        <input placeholder='id' {...register("id", { required: true })} />
        </div>
        <input type="submit"/>
      </form> */}
      <form onSubmit={searchHandleSubmit(onSearch)}>
        <div>
        <p>id</p>
        <input placeholder='Id' {...searchRegister("id")} />
        </div>
        <input type="submit"/>
      </form>
      
      { searchId ?
        <div>
         <p>Title {searchData?.title}</p>
         <p>Body {searchData?.body}</p>
        </div>
      :
        <div className="sample table">
                  <table >
                      <tr>
                          <th>Title</th>
                          <th>Body</th>
                      </tr>
                      {getData?.map((i => (
                        <tr>
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
  
export default Authentication;
  