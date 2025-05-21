import { TextField } from "@mui/material";
import Button from "../Button";

export function MaintenanceForm() {
    return (
        <>
            <h1>Área Editar (Manutenção)</h1>
            <TextField label="Tipo" variant="outlined" />
            <TextField label="Peça" variant="outlined" />
            <TextField label="Código" variant="outlined" />
            <TextField label="Data entrada/saída" variant="outlined" />
            <div className="buttonGroup">
                <Button src="Cadastrar" dataType="basic-button" />
            </div>
        </>
    );
}