import React from "react";
import { useFetchQueryCajero } from "../../services/useFetch";
import ButtonRegistrarBilletes from "./ButtonRegistrarBilletes";
import TablaGabetas from "./TablaGabetas";

interface Props {
  id: number;
}

export default async function CardCajero({ id }: Props) {
  const [respuesta, gabetas] = await useFetchQueryCajero(id);
  return (
    <div className="w-6/12 m-auto  p-8 my-4   rounded-2xl shadow-2xl bg-blue-900  ">
      <div className="flex flex-col text-white">
        <h1 className="font-bold uppercase text-3xl my-4">
          Id Cajero N°{id} - {respuesta.name}
        </h1>
        <h1 className="font-bold uppercase text-xl my-4">
          Sucursal {respuesta.sucursal}
        </h1>
        <div className="flex items-center justify-around w-full">
          <div className="flex my-4 w-2/3 lg:w-1/2">
            {/* imagen */}
            <div className="flex flex-col">
              <h2 className="text-lg">Cantidad de Billetes</h2>
              <p className="text-gray-400">{respuesta.cantidadBilletes}</p>
            </div>
          </div>

          <div className="flex my-4 w-2/3 lg:w-1/2">
            {/* imagen */}
            <div className="flex flex-col">
              <h2 className="text-lg">Valor Total Dinero</h2>
              <p className="text-gray-400">${respuesta.dineroTotal}</p>
            </div>
          </div>
        </div>
        <h2 className="text-lg">Gabetas:</h2>
        <TablaGabetas gabetas={gabetas} />
        <div className="flex w-full my-4 items-center justify-around">
          <ButtonRegistrarBilletes id={id} />
          <button className="rounded-lg bg-gray-500  inline-block mx-1 text-center py-2 px-3">
            Arqueo de caja
          </button>
        </div>
      </div>
    </div>
  );
}
