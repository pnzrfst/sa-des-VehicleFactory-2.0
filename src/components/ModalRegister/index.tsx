'use client'
import { useState } from "react";
import { Dialog, TextField, InputAdornment, IconButton } from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import './styles.css'
import Button from "../Button";

type ModalRegisterProps = {
    open: boolean
    handleClose: (value: boolean) => void
}

export function ModalRegister({ open, handleClose }: ModalRegisterProps) {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

    return (
        <Dialog open={open} onClose={() => handleClose(false)}>
            <div className="close" onClick={() => handleClose(false)}>
                <Close />
            </div>
            <div className="container">
                <h1>Cadastrar Conta</h1>
                <TextField label="Nome" variant="outlined" fullWidth margin="dense" />
                <TextField label="Email" variant="outlined" fullWidth margin="dense" />
                <TextField label="Data Nascimento" variant="outlined" fullWidth margin="dense" />
                
                <TextField
                    label="Senha"
                    variant="outlined"
                    type={mostrarSenha ? "text" : "password"}
                    fullWidth
                    margin="dense"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setMostrarSenha(!mostrarSenha)} edge="end">
                                    {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

                <TextField
                    label="Confirmar Senha"
                    variant="outlined"
                    type={mostrarConfirmarSenha ? "text" : "password"}
                    fullWidth
                    margin="dense"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)} edge="end">
                                    {mostrarConfirmarSenha ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

                <div className="buttonGroup">
                    <Button src="Cadastre-se" dataType="basic-button" />
                </div>
            </div>
        </Dialog>
    );
}