import * as httprequest from '~/utils/httpRequest';


export const search = async(q,type = 'less')=>{
    try {
        const  res = await httprequest.get('users/search',{
            params:{
                q : q,
                type:"less",
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
