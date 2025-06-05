import { RiSearchEyeLine } from "react-icons/ri";
import { TextField } from "@mui/material";
import "./styles.css";
import { useEffect, useState } from "react";
import { API } from "@/api";

interface Product {
  description: string;
  code: string;
  unity: string;
  stock: number;
  id: string;
}

interface CompositionProduct {
  product: Product;
  quantity: number;
}

type ProductionForm = {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: ({product, quantity} : CompositionProduct) => void;
};

export function ProductionForm({
  isOpen,
  onClose,
  onAddProduct,
}: ProductionForm) {
  const [search, setSearch] = useState<string>("");
  const [stock, setStockResults] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [productId: string]: number }>(
    {}
  );

  async function getStockItens(description: string) {
    try {
      const response = await API.get("/product/filtered", {
        params: { search: description },
      });

      console.log(search);
      setStockResults(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (search.length >= 2) {
      getStockItens(search);
    } else {
      setStockResults([]);
    }
  }, [search]);

  return isOpen ? (
    <div className="form-container">
      <h1>Composição</h1>

      <label htmlFor="search-input" className="input-label">
        Digite o que deseja procurar:
      </label>

      <div className="input-group">
        <TextField
          id="search-input"
          variant="outlined"
          size="small"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={() => getStockItens(search)}>
          <RiSearchEyeLine size={20} color="#ffffff" />
        </button>
      </div>

      <ul className="listProducts">
        {stock.map((product: Product) => (
          <li className="filteredProducts" key={product.id}>
            <div>
              <h3>{product.description}</h3>
              <p>{product.code}</p>
              <p>{product.unity}</p>
              <strong>{product.stock}</strong>
            </div>
            <div className="actions">
              <input
                type="number"
                name="selectQuantity"
                min={1}
                value={quantities[product.id] || ""}
                onChange={(e) =>
                  setQuantities({
                    ...quantities,
                    [product.id]: Number(e.target.value),
                  })
                }
              />
              <button
                onClick={() => {
                  const quantity = quantities[product.id] || 1;
                  onAddProduct({product, quantity});
                }}
              >
                Adicionar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
