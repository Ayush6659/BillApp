import axios from "axios"
import toast from "react-hot-toast"
import axiosinstance from "../InstanceAxios/instanceAxios"

let empServices={
    user:(async(payload)=>{
   try {
     let data=await axiosinstance.post('/register',payload)
     return data;
    
       
    
   } catch (error) {
    console.log(error);
    return error
    

    
   }
        

    })
}
export default empServices