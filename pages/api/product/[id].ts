export default function handleProduct(req,res){
    const {query,method}=req
    console.log(req.query.id)
    return res.status(200).json(`queriendo dar un produ ${method}`)
}