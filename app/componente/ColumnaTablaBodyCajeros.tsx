"use client"
import { useRouter } from 'next/navigation';

export default function ColumnaTablaBodyCajeros({cajero}) {
    const router = useRouter();

    const irACajero=()=>{
        router.push(`/listadoCajeros/cajero/${cajero.id}`)
}
  return (

    <tr 
    onClick={irACajero}
    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer ">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {cajero.name}
    </th>
    <td className="px-6 py-4">{cajero.id}</td>
    <td className="px-6 py-4">{cajero.cantidadBilletes}</td>
    <td className="px-6 py-4">{cajero.totalDinero}</td>
    <td className="px-6 py-4">Gabetas </td>
  </tr>
  )
}
