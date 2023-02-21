"use client"
import { useFetchMSSQL } from "../../services/useFetch";
interface  PropsEstado {
  sucursal: string;
  cajeros: number;
  cantBilletes: number;
  valorNominal: number;
}

export default function ButtonFormularioRegistroBilletines({state}) {

  const handleRegistrar=(state)=>{
    const body=JSON.stringify(state)
    useFetchMSSQL(body)
  }
  return (
    <button
    onClick={(e)=>{
      e.preventDefault()
      handleRegistrar(state)}}
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline"
            >
              Registrar caja
            </button>
  )
}

