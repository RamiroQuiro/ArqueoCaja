"use client"
import { useRouter } from "next/navigation";
import { useFetchMSSQL } from "../../services/useFetch";
interface  PropsEstado {
  sucursal: string;
  cajeros: number;
  cantidadBilletes: number;
  valorNominal: number;
}

export default function ButtonFormularioRegistroBilletines({state,idCajero}) {
  const router=useRouter()

  const handleRegistrar=(state)=>{
    const body=JSON.stringify(state)
    useFetchMSSQL(body)
    router.push('/listadoCajeros/cajero/'+idCajero)
  }
  return (
    <button
    onClick={(e)=>{
      e.preventDefault()
      handleRegistrar(state)}}
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 mt-10 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline"
            >
              Registrar caja
            </button>
  )
}

