import { TextField } from "@mui/material";
import Button from "../../Button";
import './maintenance_styles.css';
import { useState } from "react";
import {API} from '@/api'

interface newMaintenance {
    id: string,
    idProduction: string,
    description: string
}

interface MaintenanceFormProps {
    id: string;
    idProduction: string;
  }


export function MaintenanceForm({id, idProduction} : MaintenanceFormProps) {

    const [description, setDescription] = useState<string>("")
    
    async function registerMaintenance() {
        const newMaintenance : newMaintenance = {
            id,
            idProduction,
            description
        }

        await API.patch("/maintenance/update", newMaintenance);
        console.log(newMaintenance);
    }


    return (
        <>
            <h1>Manutenção</h1>
            <TextField label="Código da manutenção" variant="outlined" value= {id}/>
            <TextField label="Código da produção" variant="outlined" value={idProduction} />
            <textarea placeholder="Descrição" className="text-area-maintenance" onChange={(e) => setDescription(e.target.value)} />
            <div className="buttonGroup">
                <Button src="Cadastrar" dataType="basic-button" onClick={registerMaintenance} />
            </div>
        </>
    );
}