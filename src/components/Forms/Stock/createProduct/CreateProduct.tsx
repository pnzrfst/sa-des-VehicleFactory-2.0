import { API } from "@/api";
import Button from "@/components/Button";
import "./create_product_styles.css";
import { TextField } from "@mui/material";
import { useState } from "react";

interface Product {
  description: string;
  code: string;
  unity: string;
  stock: number;
}

interface CreateProductFormProps {
  onSuccess: () => void;
}

export function CreateProductForm({onSuccess} : CreateProductFormProps) {
  const [unity, setUnity] = useState("");
  const [code, setCode] = useState("");
  const [stock, setStock] = useState<number>(0);
  const [description, setDescription] = useState("");

  async function handleCreateProduct() {
    try {
      const newProduct: Product = {
        description: description,
        code: code,
        unity: unity,
        stock: stock,
      };

      await API.post("/product/create", newProduct);
      alert("Produto cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar produto!");
    }
  }

  return (
    <div className="modalDiv">
      <h1>Estoque</h1>
      <TextField
        label="Código"
        variant="outlined"
        value={code || ""}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <TextField
        label="Unidade de medida"
        variant="outlined"
        value={unity}
        onChange={(e) => setUnity(e.target.value)}
        required
      />
      <TextField
        label="Quantidade em estoque"
        variant="outlined"
        type="number"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        required
      />
      <textarea
        placeholder="Descrição"
        className="text-area-stock"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="buttonGroup">
        <Button
          src="Cadastrar"
          dataType="basic-button"
          onClick={handleCreateProduct}
        />
      </div>
    </div>
  );
}
