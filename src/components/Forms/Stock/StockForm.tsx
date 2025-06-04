import { TextField } from "@mui/material";
import Button from "../../Button";
import './stock_styles.css';
import { useState } from "react";
import { API } from "@/api";

interface stockFormProps {
    code: string;
    onSuccess: () => void
}

export function StockForm({ code, onSuccess }: stockFormProps) {
    const [unity, setUnity] = useState("");
    const [stock, setStock] = useState<number>(0);
    const [description, setDescription] = useState("");

    const handleSubmit = async () => {
        try {
            const data = {
                description,
                unity,
                stock,
                id: code
            };

            await API.patch('/product/update', data);
            onSuccess(); 
        } catch (error) {
            console.error("Erro ao atualizar estoque:", error);
        }
    };

    return (
        <>
            <h1>Estoque</h1>
            <TextField
                label="Código"
                variant="outlined"
                value={code || ""}
                disabled
            />
            <TextField
                label="Unidade de medida"
                variant="outlined"
                value={unity}
                onChange={(e) => setUnity(e.target.value)}
            />
            <TextField
                label="Quantidade em estoque"
                variant="outlined"
                type="number"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
            />
            <textarea
                placeholder="Descrição"
                className="text-area-stock"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="buttonGroup">
                <Button src="Cadastrar" dataType="basic-button" onClick={handleSubmit} />
            </div>
        </>
    );
}
