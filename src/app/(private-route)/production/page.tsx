"use client";
import { API } from "@/api";
import MainPage from "@/components/MainPage";
import { useEffect, useState } from "react";

interface Production {
  vehicleProduced: string;
  quantity: number;
  dateStart: Date;
  endDate: Date;
  id: string;
}

export default function Production() {
  const [production, setProduction] = useState<number>(0);

  async function getNumberOfProductions() {
    try {
      const response = await API.get<Production[]>("/production");
      const nextProduction = response.data.length + 1;
      setProduction(nextProduction);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNumberOfProductions();
  }, []);

  return (
    <section className="body">
      <MainPage
        namePage="Produção"
        moduloPage="Armazém Principal"
        header={[""]}
        isProduction={true}
        numberProduction={production}
      ></MainPage>
    </section>
  );
}
