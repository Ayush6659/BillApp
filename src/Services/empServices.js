import axios from "axios"
import toast from "react-hot-toast"
import axiosinstance from "../InstanceAxios/instanceAxios"

let empServices =
{
  regisUser: (async (payload) => {
    try {
      let data = await axiosinstance.post('/register', payload)
      return data;

    } catch (error) {
      console.log(error);
      return error
    }


  }),
  loginUser: (async (payload) => {
    try {
      let data = await axiosinstance.post('/login', payload)
      return data;

    } catch (error) {
      console.log(error);
      return error
    }


  }),
  addBills: async (payload, token) => {
    // console.log(payload);

    try {
      let data = await axiosinstance.post("/add-bill", payload, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      // console.log(data);
      // console.log(token);
      return data


    } catch (error) {
      return error

    }

  },
  allBills: async (token) => {
    try {
      let data = await axiosinstance.get("/get-bill-by-user", {
        headers: {
          Authorization: `Bearer ${token}`
        }

      })
      // console.log(data);
      return data

    } catch (error) {
      console.log(error);
      return error

    }
  },
  updateBills: async (payload, token, id) => {
    // console.log(payload);

    try {
      let data = await axiosinstance.put(`/update-bill/${id}`, payload, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      // console.log(data);
      return data

    } catch (error) {
      // console.log(error);
      return error
    }
  },
   deleteBills:async (token,id)=>{
        console.log(token);
        
        try {
            let data=await axiosinstance.delete(`/delete-bill/${id}`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })

            // console.log(data);
            return data
            
        } catch (error) {
            // console.log(error);
            return error
        }
    },
  

}
export default empServices