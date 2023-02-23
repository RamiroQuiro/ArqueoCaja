import { useFetchQueryCajeroAllCajeros } from "../../services/useFetch";
import ColumnaTablaBodyCajeros from "./ColumnaTablaBodyCajeros";

export default async function TablaCajerosBody() {
  const respuestaCajeros = await useFetchQueryCajeroAllCajeros();
  return (
    <tbody>
      {respuestaCajeros?.map((cajero: any, i: number) => (
       <ColumnaTablaBodyCajeros
       cajero={cajero}
       key={i}
       />
      ))}
      
    </tbody>
  );
}
