'use client'
import MainPage from "@/components/MainPage";
import { API } from '@/api'
import { useEffect, useState } from "react";

interface Maintenance {
    id: string,
    description: string;
    lote: string;
    createdAt: string;
    updatedAt: string
}

interface UlItem {
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
}


export default function Maintenance() {
    const [maintenances, setMaintenance] = useState<Maintenance[]>([])
    const [ulItens, setUlItens] = useState<UlItem[]>([])

    useEffect(() => {
        loadMaintenances()
    }, [])

    async function loadMaintenances() {
        try {
            const response = await API.get<Maintenance[]>("/maintenance");
            console.log("Dados recebidos da API:", response.data);
            setMaintenance(response.data);

            const formatDate = (isoDate: string): string => {
                const date = new Date(isoDate);
                return date.toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                });
            };


            const itens: UlItem[] = response.data.map((maintenance : Maintenance) => ({
                li1: maintenance.lote,
                li2: maintenance.description,
                li3: formatDate(maintenance.createdAt),
                li4: formatDate(maintenance.updatedAt),
                li5: maintenance.id
            }));

            setUlItens(itens);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <MainPage namePage="Manutenção"
            moduloPage="Veículos"
            header={["Selecionar", "Lote", "Descrição", "Data Entrada", "Última manutenção", "Ações"]}
            ulItens={ulItens}
            getTemplate={loadMaintenances} 
        />
    )
}