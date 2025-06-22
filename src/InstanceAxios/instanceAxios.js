import axios from "axios"

const BASEURL="http://localhost:5000/api/user"
let axiosinstance=axios.create({
    baseURL:BASEURL
})

export default axiosinstance