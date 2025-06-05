"use client";
import "./styles.css";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { IoCloseCircleOutline, IoCheckmarkDoneSharp } from "react-icons/io5";
import { TbClockHour4Filled } from "react-icons/tb";
import { API } from "@/api";
import { useEffect, useState } from "react";

enum Situation {
  pendentes = "pendentes",
  aprovadas = "aprovadas",
  reprovadas = "reprovadas",
}

interface Quality {
  id: string;
  idProduction: string;
  description: string;
  status: Situation;
  createdAt: Date;
  updatedAt: Date;
}

export default function Quality() {
  const [allQualitys, setAllQualitys] = useState<Quality[]>([]);
  const [allApproveds, setAllApproveds] = useState<Quality[]>([]);
  const [allRejecteds, setAllRejecteds] = useState<Quality[]>([]);
  const [filter, setFilter] = useState<"pending" | "approved" | "rejected">(
    "pending"
  );

  async function getPendings() {
    try {
      const response = await API.get<Quality[]>("/quality");
      setAllQualitys(response.data);
      console.log("Pendentes: ", response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getApproved() {
    try {
      const response = await API.get<Quality[]>("/quality/approved");
      setAllApproveds(response.data);
      console.log("Aprovadas: ", response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRejected() {
    try {
      const response = await API.get<Quality[]>("/quality/rejected");
      setAllRejecteds(response.data);
      console.log("Reprovadas: ", response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateSituation(item: Quality, status: Situation) {
    console.log(item.id)
    try {
      await API.patch("/quality/update", {
        id: item.id,
        idProduction: item.idProduction,
        description: item.description,
        status: status,
      });
      alert("Status atualizado com sucesso!");

      await getPendings();
      await getApproved();
      await getRejected();
    } catch (error) {
      console.log(error);
      alert("Erro ao atualizar status.");
    }
  }

  useEffect(() => {
    getPendings();
    getApproved();
    getRejected();
  }, []);

  let displayedQualitys: Quality[] = [];

  if (filter === "pending") {
    displayedQualitys = allQualitys;
  } else if (filter === "approved") {
    displayedQualitys = allApproveds;
  } else {
    displayedQualitys = allRejecteds;
  }

  return (
    <section className="body-container">
      <div className="home-infos">
        <header>
          <h1>Qualidade & Inspeções</h1>
          <span></span>
          <h3>Principal</h3>
        </header>
        <main className="main">
          <div className="filter">
            <button
              className={`pending-button ${
                filter === "pending" ? "active" : ""
              }`}
              onClick={() => setFilter("pending")}
            >
              <TbClockHour4Filled size={20} /> Pendentes
            </button>
            <button
              className={`approved-button ${
                filter === "approved" ? "active" : ""
              }`}
              onClick={() => setFilter("approved")}
            >
              <IoCheckmarkDoneSharp size={20} /> Aprovados
            </button>
            <button
              className={`repproved-button ${
                filter === "rejected" ? "active" : ""
              }`}
              onClick={() => setFilter("rejected")}
            >
              <MdClose size={20} /> Reprovados
            </button>
          </div>

          <div className="dashboard">
            {displayedQualitys.length > 0 ? (
              displayedQualitys.map((item) => (
                <div className="card" key={item.idProduction}>
                  <div className="item">
                    <h3>
                      Lote: <br />
                      <strong>{item.idProduction}</strong>
                    </h3>
                  </div>
                  <div className="buttons-area">
                    <button className="approved" onClick={() => updateSituation(item, Situation.aprovadas)}>
                      Aprovado <FaCheck size={20} />
                    </button>
                    <button className="repproved" onClick={() => updateSituation(item, Situation.reprovadas)}>
                      Reprovado <IoCloseCircleOutline size={20} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum item encontrado.</p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
