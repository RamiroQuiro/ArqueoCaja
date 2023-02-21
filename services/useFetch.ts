const urlFetch='http://localhost:3000/api/cajeros/2'


const useFetchMSSQL=async (body:any)=>{
    const getQuery=await fetch(urlFetch,{
        method:'POST' ,
        body
    })
    return getQuery
}

export {useFetchMSSQL}
