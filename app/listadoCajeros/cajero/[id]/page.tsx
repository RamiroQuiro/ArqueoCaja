import React from "react";
import { useFetchQueryCajero } from "../../../../services/useFetch";
import ButtonRegistrarBilletes from "../../../componente/ButtonRegistrarBilletes";
import CardCajero from "../../../componente/CardCajero";

export default async function Cajero({params}:any) {
const {id}=params

const respuesta=await useFetchQueryCajero(id)
// console.log(respuesta)
  return (
    <div className="text-neutral-700 pt-10 m-0 bg-neutral-100 w-full h-screen mx-auto">
   <CardCajero
   id={id}
   />
    </div>
  );
}
