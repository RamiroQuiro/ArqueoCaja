"use client"
import {useRouter} from "next/navigation";

interface Props{
  id:string
}
export default function ButtonRegistrarBilletes({id}:Props) {
const router=useRouter()

const handleClickRegistrarBilletes=()=>{
    router.push(`/listadoCajeros/formularioCajero/${id}`)
}
  return (
    <button

    onClick={handleClickRegistrarBilletes}
              className="rounded-lg bg-gray-500   inline-block mx-1 text-center py-2 px-3"
            >
             Registro de Billetes
            </button>
  )
}
