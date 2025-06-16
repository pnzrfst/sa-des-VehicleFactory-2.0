"use client";

import Button from "@/components/Button";
import "./styles.css";
import React, { useState } from "react";
import { ModalRegister } from "@/components/ModalRegister";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { API } from "@/api";

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin(event: React.FormEvent) {

    event.preventDefault()
    const userCredentials: User = {
      email: login,
      password: password,
    };

    try {
      const response = await API.post<{ access_token: string }>(
        "/user/login",
        userCredentials
      );

      const token = response.data.access_token;

      localStorage.setItem("access_token", token);

      console.log(response.status);
      router.push("/mainpage");
    } catch (error) {
      console.log(error);
      console.log("oi");
    }
  }

  return (
    <div className="main">
      <span className="lateral-login">
        <div className="container">
          <h1 className="title">Bem-vindo de volta!</h1>
          <h2 className="text-container">
            Para continuar, por favor, acesse sua conta.
          </h2>
          <h2 className="h2-container">Não possui conta? </h2>
          <ModalRegister
            open={openModal}
            handleClose={() => setOpenModal(!openModal)}
          />
          <Button
            src="Cadastre-se"
            dataType="register-button"
            onClick={() => setOpenModal(true)}
          />
        </div>
        <br />
      </span>
      <div className="div-form">
        <form className="login">
          <label htmlFor="email" className="label-login">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="input-login"
            autoComplete="email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <label htmlFor="password" className="label-login">
            Senha
          </label>
          <div className="input-password-wrapper">
            <input
              type={mostrarSenha ? "text" : "password"}
              id="password"
              className="input-login"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconButton
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="eye-button"
              edge="end"
            >
              {mostrarSenha ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>
          <Button src="Login" dataType="basic-button" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
}
