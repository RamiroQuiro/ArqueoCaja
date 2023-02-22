"use client";

import { useEffect, useState } from "react";
import { useFetchQueryCajero } from "../../../../services/useFetch";
import ButtonFormularioRegistroBilletines from "../../../componente/ButtonFormularioRegistroBilletines";

// interface  PropsEstado {
//   sucursal: string;
//   id: number;
//   cantidadBilletes: number;
//   valorNominal: number;
// }

export default function FormularioIngresoBilletes({params}:any) {
  const {idCajero}=params
  const [cajeroGabetas, setCajeroGabetas] = useState([])
  const [estadoForm, setEstadoForm] = useState(
  {});
useEffect(() => {
  const getquery=async()=>{
    const respuesta=await useFetchQueryCajero(idCajero)
    setCajeroGabetas(respuesta)
  }
getquery()
}, [])


  const handleChange = (e:any) => {
    e.preventDefault();
    setEstadoForm({
      ...estadoForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className=" mx-auto my-4 px-4 lg:px-20">
      <div className="w-full p-8 my-4   rounded-2xl shadow-2xl bg-white">
        <div className="flex  flex-col ">
          <h1 className="font-bold uppercase text-xl">
            Ingreso de Billetes - Cajero BSE
          </h1>
          <h1 className="font-semibold uppercase text-lg">
            ID Cajero Nombre Cajero
          </h1>
        </div>
        <div className="flex items-center justify-between  my-5">
          <label htmlFor="idGabeta" className="font-medium md:w-6/12">Elegir Gabeta</label>
          <select name="idGabeta" onChange={handleChange} className="bg-gray-100 py-2 px-5 md:w-6/12 rounded-lg font-medium text-right" id="idGabeta">
            <option value="101"  className="bg-gray-100 py-2 px-5  rounded-lg font-medium text-right">N° 1</option>
            <option value="102"  className="bg-gray-100 py-2 px-5  rounded-lg font-medium text-right">N° 2</option>
            <option value="103"  className="bg-gray-100 py-2 px-5  rounded-lg font-medium text-right">N° 3</option>
            <option value="104"  className="bg-gray-100 py-2 px-5  rounded-lg font-medium text-right">N° 4</option>
          </select>
        </div>
       
        <div className="border-t w-full">
        <div className="flex items-center justify-between  mt-5">
            <label className="font-medium md:w-6/12">Cantidad de billetes </label>
            <input
              onChange={handleChange}
              name="cantidadBilletes"
              className=" bg-gray-100 md:w-6/12 text-right text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="ej: 20000"
              required
            />
          </div>
          <div className="flex items-center justify-between  mt-5">
            <label className="font-medium md:w-6/12">Valor nominal de los billetines</label>
            <input
              onChange={handleChange}
              name="valorNominal"
              required
              className="w-full md:w-6/12 text-right bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="ej: 100 | 200 | 300"
            />
          </div>
        </div>
        <ButtonFormularioRegistroBilletines state={estadoForm}/>
      </div>
      {/*     
   */}
    </form>
  );
}
