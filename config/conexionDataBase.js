import sql from "mssql";

const dbSettings = {
  user: "ramiro",
  password: "Ramiro.13",
  server: "localhost",
  database: "registrobilletes",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

const getConecction = async () => {
    try {
        const pool=await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.log(error)
    }

};

export {getConecction}
