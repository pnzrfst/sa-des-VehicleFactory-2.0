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


            const itens: UlItem[] = response.data.map((maintenance) => ({
                li1: maintenance.lote,
                li2: maintenance.description,
                li3: maintenance.createdAt,
                li4: maintenance.updatedAt,
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
        />
    )
}