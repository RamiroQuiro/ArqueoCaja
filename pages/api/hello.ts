import { getConecction, querys } from "../../database"

export default async function handle(req:any,res:any){
  const pool =await getConecction()
  const {recordset}=await pool.request().query(querys.getAllProduct)

  res.json(recordset)

}