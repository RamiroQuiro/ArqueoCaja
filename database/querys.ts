export const querys= {
    getAllProduct:'SELECT * FROM Cajeros',
    getInsertRegistro: "INSERT INTO Cajeros (cantidadBilletes,valorNominal) VALUES (@cantidadBilletes,@valorNominal)",
    queryById:'SELECT * FROM cajeros WHERE Id = @id'
}