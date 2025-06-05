"use client";
import { API } from "@/api";
import MainPage from "@/components/MainPage";
import { useEffect, useState } from "react";


interface Production {
  vehicleProduced: string;
  quantity: number;
  dateStart: Date | null;
  vehicleComposition: {
    productId: string;
    quantityPerVehicle: number;
  }[];
}


export default function Production() {
  const [productionNumber, setProductionNumber] = useState<number>(0);
  const [productions, setProductions] = useState<Production[]>([])

  
  async function getNumberOfProductions() {
    try {
      const response = await API.get<Production[]>("/production");
      const nextProduction = response.data.length + 1;
      setProductionNumber(nextProduction);
    } catch (error) {
      console.error(error);
    }
  }

  async function getAllProductions() {
    try {
      const response = await API.get<Production[]>("/production")
      setProductions(response.data)
      console.log(productions)
    } catch (error) {
      console.log(error);
    }
  }


 

  useEffect(() => {
    getNumberOfProductions();
    getAllProductions()
  }, []);

  return (
    <section className="body">
      <MainPage
        namePage="Produção"
        moduloPage="Armazém Principal"
        header={[""]}
        isProduction={true}
        numberProduction={productionNumber}
        getTemplate={getAllProductions}
      ></MainPage>
    </section>
  );
}
