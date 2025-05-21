import { TextField } from "@mui/material";
import Button from "../Button";

export function StockForm() {
    return (
        <>
            <h1>Área Editar (Estoque)</h1>
            <TextField label="Descrição" variant="outlined" />
            <TextField label="Código" variant="outlined" />
            <TextField label="Unidade" variant="outlined" />
            <TextField label="Em Estoque" variant="outlined" />
            <div className="buttonGroup">
                <Button src="Cadastrar" dataType="basic-button" />
            </div>
        </>
    );
}