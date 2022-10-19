import * as httprequest from '~/utils/httpRequest';


export const getSuggest = async({page , perPage})=>{
    try {
        const  res = await httprequest.get('users/suggested',{
            params:{
                page,
                per_page : perPage,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
