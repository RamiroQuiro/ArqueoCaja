import { getConecction, querys, sql } from "../../../database/";

export default async function (req, res) {
  switch (req.method) {
    case "GET":
      consultaCajeroID(req,res)
      res.json("estas consultando sobre el cajeron con el numero de id: "+req.query.id);
      break;
    case "POST":
      insertData(req, res);
      break;
    default:
      break;
  }
}

const insertData = async (req:any, res:any) => {
  try {
    const pool = await getConecction();
    const { id, cantidadBilletes, valorNominal } = req.body;
    await pool
      .request()
      .input("cantidadBilletes", sql.Int, cantidadBilletes)
      .input("valorNominal", sql.Int, valorNominal)
      .query(
       querys.getInsertRegistro
      );
    res.json("estado insterdad correctamente");
  } catch (error) {
    console.log(error);
  }
};


const consultaCajeroID=async (req,res)=>{
    const pool=await getConecction()
    const {id}=req.query
    const resultQuery=await pool.request().input('id',id).query(querys.queryById)
res.send(resultQuery.recordset[0])
// cKonsole.log(resultQuery)
}