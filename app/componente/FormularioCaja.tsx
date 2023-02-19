import React from "react";
import ButtonFormularioRegistroBilletines from "./ButtonFormularioRegistroBilletines";

export default function FormularioCaja() {

  return (
    <div className="text-neutral-700">
      <div className="flex justify-center items-center mx-auto w-screen h-screen bg-neutral-100">
        <div className=" mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4   rounded-2xl shadow-2xl bg-white">
            <div className="flex">
              <h1 className="font-bold uppercase text-xl">
                Ingreso de Billetes - Cajero BSE
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <label htmlFor="cajeros">Elegir Sucursal</label>
              <select name="cajeros" id="cajeros">
                <option value="001">Casa Central</option>
                <option value="001">Sucursal Hiper</option>
                <option value="001">Sucursal Banda</option>
                <option value="001">Sucursal Termas</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <label htmlFor="cajeros">Elegir Cajero</label>
              <select name="cajeros" id="cajeros">
                <option value="001">001 - ATM-2010</option>
                <option value="001">002 - ATM-2015</option>
                <option value="001">003 - ATM-2020</option>
                <option value="001">004 - ATM-2010</option>
              </select>
            </div>
            <div>
              <div>
                <label>Cantidad de billetes </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="ej: 20000"
                  required
                />
              </div>
              <div>
                <label>Valor nominal de los billetines</label>
                <input
                  required
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="ej: 100 | 200 | 300"
                />
              </div>
            </div>

            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
        <ButtonFormularioRegistroBilletines/>
          </div>
          {/*     
          <div
            className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam,
                eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>
    
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                </div>
              </div>
              
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                </div>
              </div>
              
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-facebook-f text-blue-900" />
                </a>
                <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-linkedin-in text-blue-900" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
