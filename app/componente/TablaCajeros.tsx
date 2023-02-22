import React from 'react'
import TablaCajerosBody from './TablaCajerosBody'

export default function TablaCajeros() {
  return (
    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
               N° Cajero
              </th>
              <th scope="col" className="px-6 py-3">
               Nombre de Cajero
              </th>
              <th scope="col" className="px-2 py-3">
              ID Cajero
              </th>
              <th scope="col" className="px-6 py-3">
              Sucursal
              </th>
              <th scope="col" className="px-6 py-3">
                Total Billetes
              </th>
              <th scope="col" className="px-6 py-3">
                Total Valor
              </th>
              <th scope="col" className="px-6 py-3">
                N° Gabetas
              </th>
              
            </tr>
          </thead>
        <TablaCajerosBody/>
        </table>
  )
}
