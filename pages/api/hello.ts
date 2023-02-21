import { getConecction } from "../../config/conexionDataBase";

export default async function handle(req:any,res:any){
  const pool =await getConecction()
  const {recordset}=await pool.request().query('SELECT * FROM cajeros')

  res.json(recordset)

}