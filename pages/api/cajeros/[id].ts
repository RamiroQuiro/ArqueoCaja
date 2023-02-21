export default function(req,res){
        switch (req.method) {
            case 'GET':
                res.json('esta es la url man')
                break;  
            case 'POST':
                const {id,cantidadBilletes,valorNominal}=req.body
                const respuesta=JSON.stringify(req.body)
                console.log(`este es el id ${id}, este son los billetes: ${cantidadBilletes}`)
                break
            default:
                break;
        }
}