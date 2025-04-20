
import MainPage from "@/components/MainPage";

export default function Maintenance() {
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