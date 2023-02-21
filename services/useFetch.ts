const urlFetchInsert='http://localhost:3000/api/cajeros/instert'


const useFetchMSSQL=async (body:any)=>{
    const getQuery=await fetch(urlFetchInsert,{
        method:'POST' ,
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body
    })
    return getQuery
}


const urlFetchQuery='http://localhost:3000/api/cajeros/[id]'
const useFetchQueryCajero=async ()=>{
    try {
        
        const queryGet=await fetch(urlFetchQuery)
        return queryGet
    } catch (error) {
        console.log(error)
    }
}
const urlFetchQueryAllCajeros='http://localhost:3000/api/hello'
const useFetchQueryCajeroAllCajeros=async ()=>{
    try {
        
        const queryGet=await fetch(urlFetchQueryAllCajeros)
        return queryGet.json()
    } catch (error) {
        console.log(error)
    }
}

export {useFetchMSSQL,useFetchQueryCajero,useFetchQueryCajeroAllCajeros}
