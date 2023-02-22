import { getConecction, querys, sql } from "../../../database/";

export default async function (req, res) {
  switch (req.method) {
    case "GET":
      consultaCajeroID(req, res);
      break;
    case "POST":
      insertData(req, res);
      break;
    default:
      break;
  }
}

const insertData = async (req: any, res: any) => {
  try {
    const pool = await getConecction();
    const { id, cantidadBilletes, valorNominal } = req.body;
    await pool
      .request()
      .input("cantidadBilletes", sql.Int, cantidadBilletes)
      .input("valorNominal", sql.Int, valorNominal)
      .query(querys.getInsertRegistro);
    res.json("estado insterdad correctamente");
  } catch (error) {
    console.log(error);
  }
};

const consultaCajeroID = async (req, res) => {
  const pool = await getConecction();
  const { id } = req.query;
  const resultQuery = await pool
    .request()
    .input("id", id)
    .query(querys.queryById);
  const resultQueryGabetas = await pool
    .request()
    .input("id", id)
    .query(querys.queryGabetasIdCajeto);
  const arrayTemp = [resultQuery.recordset[0], resultQueryGabetas.recordset];
  res.send(arrayTemp);
  // cKonsole.log(resultQuery)
};
