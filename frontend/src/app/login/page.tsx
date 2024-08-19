'use client';
import React, { useState } from "react";
import Style from "../style/login.module.css";
import { useRouter } from "next/navigation";
import { SiGmail } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaApple } from "react-icons/fa";

export default function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = { nickname, password };

    try {
      const response = await fetch("http://localhost:8000/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
        router.push("/"); 
      } else {
        setError(result.detail || "Falha no login");
      }
    } catch (error) {
      console.error("Erro no login, tente novamente", error);
      setError("Erro no login, tente novamente");
    }
  };

  return (
    <>
      <div className={Style["container-all"]}>
        <div className={Style["container-form"]}>
          <h1>ENTRE COM SUA CONTA</h1>
          <p>Entrar usando minhas redes sociais</p>
          <div className={Style["social-icons"]}>
            <button className={Style["social-button"]}><SiGmail />            </button>
            <button className={Style["social-button"]}><ImFacebook2 /></button>
            <button className={Style["social-button"]}><FaApple /> </button>
          </div>
          <p>ou</p>
            <form onSubmit={handleLogin} className={Style['container-input']}>
              <input 
                type="text"
                placeholder="Email"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className={Style["login-button"]}>Entrar</button>
            </form>
          {error && <p className={Style["error"]}>{error}</p>}
        </div>

        <div className={Style["container-leftSide"]}>
          <h1>Ainda não tem conta?</h1>
          <button onClick={() => router.push("/sign-up")} className={Style["signup-button"]}>Cadastrar</button>
        </div>
      </div>
    </>
  );
}
