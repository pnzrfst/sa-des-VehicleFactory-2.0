
import './styles.css'
import MainPage from '@/components/MainPage'


export default function Stock() {
    return (
        <div>
            <MainPage
                namePage='Estoque' moduloPage='Armazém Principal'
                header={["Selecionar", "Descrição", "Código", "Unidade", "Estoque", "Ações"]}
                ulItens={[{
                    li1: "Produto",
                    li2: "Exemplo01",
                    li3: "un",
                    li4: "Estoque"
                },
                {
                    li1: "Produto",
                    li2: "Exemplo01",
                    li3: "un",
                    li4: "Estoque"
                },
                ]}
            ></MainPage>
        </div>
    )
}