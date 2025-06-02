
import MainPage from "@/components/MainPage";
import {API} from '@/api'
import { useEffect, useState } from "react";

interface Maintenance {
    id: string;
    description: string;
    idProduction: string;
    createdAt: Date;
    updatedAt: Date;
}

interface UlItem {
    li1: string;
    li2: string;
    li3: string;
    li4: string;
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
            setMaintenance(response.data);

            const itensFormatados : UlItem = response.data.map((item : Maintenance) => ({
                li1: item.description,
                li2: item.idProduction,
                li3: item.createdAt,
                li4: item.updatedAt
            }))


            setUlItens(itensFormatados)

        } catch (error) {
            console.log(error)
        }
    }



    return(
        <MainPage namePage="Manutenção" 
        moduloPage="Veículos" 
        header={["Selecionar", "Tipo", "Peça", "Código", "Data Entrada / Data Saída", "Ações"]}
        ulItens={[{
            li1: "Conserto",
            li2: "Amortecedor traseiro",
            li3: "0001",
            li4: "01/10/2006 - 11/10/2006",
        },
        {
            li1: "Conserto",
            li2: "Lanterna dianteira",
            li3: "0001",
            li4: "01/10/2006 - 12/10/2006",
        },
        {
            li1: "Instalação",
            li2: "Motor",
            li3: "0001",
            li4: "01/10/2006 - 12/10/2006",
        },
        {
            li1: "Instalação",
            li2: "Motor",
            li3: "0001",
            li4: "01/10/2006 - 12/10/2006",
        },
        {
            li1: "Instalação",
            li2: "Motor",
            li3: "0001",
            li4: "01/10/2006 - 12/10/2006",
        }
        ]}/>)
}