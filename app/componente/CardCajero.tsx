import React from "react";
import { useFetchQueryCajero } from "../../services/useFetch";
import ButtonRegistrarBilletes from "./ButtonRegistrarBilletes";

interface Props {
  id: number;
}

export default async function CardCajero({ id }: Props) {

    const respuesta=await useFetchQueryCajero(id)
console.log(respuesta)
  return (
    <div className="w-4/12 m-auto  p-8 my-4   rounded-2xl shadow-2xl bg-blue-900  ">
      <div className="flex flex-col text-white">
        <h1 className="font-bold uppercase text-3xl my-4">
          Cajero N°{id} - ATM-2015
        </h1>
        <h1 className="font-bold uppercase text-xl my-4">
          Sucursal Casa Central
        </h1>
        <div className="flex items-center justify-around w-full">
          <div className="flex my-4 w-2/3 lg:w-1/2">
            {/* imagen */}
            <div className="flex flex-col">
              <h2 className="text-lg">Cantidad de Billetes</h2>
              <p className="text-gray-400">10000</p>
            </div>
          </div>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            {/* imagen */}
            <div className="flex flex-col">
              <h2 className="text-lg">Valor Total Dinero</h2>
              <p className="text-gray-400">$100000</p>
            </div>
          </div>
        </div>
        <h2 className="text-lg">Gabetas:</h2>

        <table className="w-full text-sm rounded-lg overflow-hidden text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-center text-neutral-700 uppercase bg-gray-50 dark:bg-neutral-100 dark:text-neutral-700">
            <tr>
              <th scope="col" className="p-2">
                Id Gabeta
              </th>
              <th scope="col" className="p-2">
                Cantidad de Billetines
              </th>
              <th scope="col" className="p-2">
                Valor Nominal
              </th>
              <th scope="col" className="p-2">
                Total Dinero Gabeta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                01
              </th>
              <th>1000</th>
              <th>500</th>
              <th>50000</th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                02
              </th>
              <th>1000</th>
              <th>500</th>
              <th>50000</th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                03
              </th>
              <th>1000</th>
              <th>500</th>
              <th>50000</th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                04
              </th>
              <th>1000</th>
              <th>500</th>
              <th>50000</th>
            </tr>
          </tbody>
        </table>
        <div className="flex w-full my-4 items-center justify-around">
          <ButtonRegistrarBilletes />
          <button className="rounded-lg bg-gray-500  inline-block mx-1 text-center py-2 px-3">
            Arqueo de caja
          </button>
        </div>
      </div>
    </div>
  );
}
