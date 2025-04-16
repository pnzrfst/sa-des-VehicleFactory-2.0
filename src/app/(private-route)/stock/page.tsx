
import './styles.css'
import MainPage from '@/components/MainPage'


export default function Stock() {
    return (
        <div>
            <MainPage
                namePage='Estoque' moduloPage='Armazém Principal'
                header={["Selecionar", "Descrição", "Código", "Unidade", "Estoque", "Ações"]}
                ulItens={[{
                    li1: "Produto 1",
                    li2: "Exemplo01",
                    li3: "un",
                    li4: "Estoque"
                },
                {
                    li1: "Produto 2",
                    li2: "Exemplo02",
                    li3: "un",
                    li4: "Estoque"
                },
                {
                    li1: "Produto 3",
                    li2: "Exemplo03",
                    li3: "un",
                    li4: "Estoque"
                },
                {
                    li1: "Produto 4",
                    li2: "Exemplo04",
                    li3: "un",
                    li4: "Estoque"
                },
                {
                    li1: "Produto 5",
                    li2: "Exemplo05",
                    li3: "un",
                    li4: "Estoque"
                },
                {
                    li1: "Produto 6",
                    li2: "Exemplo06",
                    li3: "un",
                    li4: "Estoque"
                },
                ]}
            ></MainPage>
        </div>
    )
}