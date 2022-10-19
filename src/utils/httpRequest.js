import axios from "axios";
const  httpRequest = axios.create({
    baseURL :process.env.REACT_APP_BASE_URL
}
)

export const get = async(path, option={})=>{
    const reponse = await httpRequest.get(path,option)
    return reponse.data
}
export default httpRequest

