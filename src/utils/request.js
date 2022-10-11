import axios from "axios";

const  request = axios.create({
    baseURL :'https://tiktok.fullstack.edu.vn/api/'
}
)

export const get = async(path, option={})=>{
    const reponse = await request.get(path,option)
    return reponse.data
}
export default request