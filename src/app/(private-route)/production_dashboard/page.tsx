"use client";

import { API } from "@/api";
import "./styles.css";

import { useRouter } from "next/navigation";
import { RiFunctionAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";

interface Production {
  id: string;
  vehicleProduced: string;
  quantity: number;
  dateStart: Date | null;
  vehicleComposition: {
    productId: string;
    quantityPerVehicle: number;
  }[];
}

export default function Production_dashboard() {
  const router = useRouter();
  const [production, setProductions] = useState<Production[]>([]);
  const handleNavigation = () => {
    router.push("/production");
  };

  async function getAllProductions() {
    try {
      const response = await API.get<Production[]>("/production");
      setProductions(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProductions();
  }, []);

  return (
    <section className="body-container">
      <div className="home-infos">
        <header>
          <h1>Produção</h1>
          <span></span>
          <h3>Principal</h3>
        </header>
        <main className="main">
          <div className="filter-button">
            <button type="button" className="btns" onClick={handleNavigation}>
              {" "}
              <RiFunctionAddLine size={20} />
            </button>
          </div>
          <div className="dashboard">
            {production.map((item) => (
              <div key={item.id} className="card">
                <h3>
                  <strong>Item produzido:</strong>
                  <br/>
                   {item.vehicleProduced}
                </h3>

                <h3>
                  <strong>Quantidade produzida:</strong>
                  <br/>
                  {item.quantity}
                </h3>
                <h3>
                  <strong>Data de ínicio</strong>
                  <strong>
                  <br/>
                  {item.dateStart
                    ? `${new Date(item.dateStart).toLocaleDateString(
                        "pt-BR"
                      )} ${new Date(item.dateStart).toLocaleTimeString(
                        "pt-BR"
                      )}`
                    : "Data inválida"}
                </strong>
                </h3>
                <br />
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
