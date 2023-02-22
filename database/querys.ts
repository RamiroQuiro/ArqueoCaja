export const querys= {
    getAllProduct:'SELECT * FROM Cajeros',
    getInsertRegistro: "INSERT INTO gabetass (cantidadBilletes) VALUES (@cantidadBilletes)",
    queryById:'SELECT * FROM cajeros WHERE idCajero = @id',
    queryGabetasIdCajeto:'SELECT * FROM  gabetass  where idCajero=@id'
}