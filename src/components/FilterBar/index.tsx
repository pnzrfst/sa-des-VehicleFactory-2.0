
enum Status{
    aprovado = "aprovado",
    reprovado = "reprovado",
    pendente = "pendente",
    produzido = "produzido",
    emProducao = "em produção",
    emEstoque  = "em estoque",
    semEstoque = "sem estoque"
}

type ModuleData = {
    qtdLines: number;
    status: Status;
    date: Date;
};


type filterModules = {
    quality : ModuleData;
    maintenence: ModuleData;
    production: ModuleData;
    stock: ModuleData
}

type filterBarProps = {
    module : filterModules
}

export default function FilterBar({module} : filterBarProps) {
    return(
        <div className="filterBarContainer">
            <ul>
                <li>{module.maintenence.qtdLines}</li>
                <li>{module.maintenence.date.toLocaleDateString('pt-BR')}</li>
                <li>{module.maintenence.status}</li>
            </ul>
        </div>
    )
}