"use client";
import { API } from "@/api";
import MainPage from "@/components/MainPage";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  description: string;
  code: string;
  unity: string;
  stock: string;
}

interface UlItem {
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
}

export default function Stock() {
  const [products, setProducts] = useState<Product[]>([]);
  const [ulItens, setUlItens] = useState<UlItem[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const response = await API.get<Product[]>("/product");
      setProducts(response.data);

      const itens: UlItem[] = response.data.map((product: Product) => ({
        li1: product.description,
        li2: product.code,
        li3: product.unity,
        li4: product.stock,
        li5: product.id,
      }));

      setUlItens(itens);
    } catch (error) {
      console.log(error);
    }
  }

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
        ulItens={ulItens}
        getTemplate={loadProducts}
      />
    </div>
  );
}
