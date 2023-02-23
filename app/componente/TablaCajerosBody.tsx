import { useFetchQueryCajeroAllCajeros } from "../../services/useFetch";
import ColumnaTablaBodyCajeros from "./ColumnaTablaBodyCajeros";

export default function TablaCajerosBody() {
  const getFetching: () => Promise<any> = async () => {
    const respuestaCajeros = await useFetchQueryCajeroAllCajeros();
    return respuestaCajeros;
  };
  const respuesta: any = getFetching();
  if (!respuesta) {
    return <>{<span>Cargando tabla</span>}</>;
  }

  if (respuesta) {
    return (
      <tbody>
        {respuesta.map((cajero: any, i: any) => (
          // tslint:disable-next-line
          <ColumnaTablaBodyCajeros cajero={cajero} key={i} />
        ))}
      </tbody>
    );
  }
  return <div>cargando</div>;
}
