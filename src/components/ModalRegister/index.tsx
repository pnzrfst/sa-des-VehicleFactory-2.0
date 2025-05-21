import { Dialog, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import './styles.css'
import Button from "../Button";


type ModalRegisterProps = {
    open: boolean
    handleClose: (value: boolean) => void
}

export function ModalRegister({open, handleClose}: ModalRegisterProps){

    return(
        <Dialog
            open = {open}
            onClose={handleClose}
        >
            <div className="close" onClick={()=> handleClose(false)}>
                <Close />
            </div>
            <div className="container">
                <h1>Cadastar Conta</h1>
                <TextField label="Nome" variant="outlined" />
                <TextField label="Email" variant="outlined" />
                <TextField label="Data Nascimento" variant="outlined" />
                <TextField label="Senha" variant="outlined" />
                <TextField label="Confirmar Senha" variant="outlined" />
                <div className="buttonGroup">
                    <Button src="Cadastre-se" dataType="basic-button"/>
                </div>
            </div>

        </Dialog>
    )
}