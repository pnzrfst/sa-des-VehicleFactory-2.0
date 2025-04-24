import MainPage from "@/components/MainPage";
export default function Stock() {
  return (
    <div>
      <MainPage
        namePage="Estoque"
        moduloPage="Armazém Principal"
        header={[
          "Selecionar",
          "Descrição",
          "Código",
          "Unidade",
          "Estoque",
          "Ações",
        ]}
        ulItens={[
          {
            li1: "Produto 1",
            li2: "Exemplo01",
            li3: "un",
            li4: "Estoque",
          },
          {
            li1: "Produto 2",
            li2: "Exemplo02",
            li3: "un",
            li4: "Estoque",
          },
          {
            li1: "Produto 3",
            li2: "Exemplo03",
            li3: "un",
            li4: "Estoque",
          },
          {
            li1: "Conserto",
            li2: "Amortecedor traseiro",
            li3: "0001",
            li4: "01/10/2006 - 11/10/2006",
          },
          {
            li1: "Conserto",
            li2: "Amortecedor traseiro",
            li3: "0001",
            li4: "01/10/2006 - 11/10/2006",
          },
          {
            li1: "Conserto",
            li2: "Amortecedor traseiro",
            li3: "0001",
            li4: "01/10/2006 - 11/10/2006",
          },
          {
            li1: "Conserto",
            li2: "Amortecedor traseiro",
            li3: "0001",
            li4: "01/10/2006 - 11/10/2006",
          },
          {
            li1: "Conserto",
            li2: "Amortecedor traseiro",
            li3: "0001",
            li4: "01/10/2006 - 11/10/2006",
          },
          {
            li1: "Conserto",
            li2: "Amortecedor traseiro",
            li3: "0001",
            li4: "01/10/2006 - 11/10/2006",
          }
        ]}
      ></MainPage>
    </div>
  );
}
