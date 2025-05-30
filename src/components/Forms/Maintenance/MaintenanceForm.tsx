import { TextField } from "@mui/material";
import Button from "../../Button";
import './maintenance_styles.css';

export function MaintenanceForm() {
    return (
        <>
            <h1>Manutenção</h1>
            <TextField label="Data entrada" variant="outlined" />
            <TextField label="Data saída" variant="outlined" />
            <textarea placeholder="Descrição" className="text-area-maintenance"/>
            <div className="buttonGroup">
                <Button src="Cadastrar" dataType="basic-button" />
            </div>
        </>
    );
}