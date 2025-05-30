import { TextField } from "@mui/material";
import Button from "../../Button";
import './stock_styles.css';

export function StockForm() {
    return (
        <>
            <h1>Estoque</h1>
            <TextField label="Código" variant="outlined" />
            <TextField label="Unidade de medida" variant="outlined" />
            <TextField label="Quantidade em estoque" variant="outlined" />
            <textarea placeholder="Descrição" className="text-area-stock"/>
            <div className="buttonGroup">
                <Button src="Cadastrar" dataType="basic-button" />
            </div>
        </>
    );
}