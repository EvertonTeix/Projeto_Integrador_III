import React, { useState } from "react";
import logo from "./img/fastRoute.png";
import mapaLogin from "./img/mapaLogin.png";
import camera from "./img/Camera.png";
import "../styles/TelaCadastro.css";

function TelaCadastro() {
  const [imageSrc, setImageSrc] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.style.display = "none";

    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageSrc = event.target.result;
          setImageSrc(imageSrc); 
        };
        reader.readAsDataURL(file);
      }
    });

    input.click();
  };

  const handleRemoveImage = () => {
    setImageSrc(null);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (confirmPassword !== event.target.value) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (password !== event.target.value) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
    }
  };

  const isValidPassword = password === confirmPassword && password.length >= 5;

  return (
    <div>
      <header className="header">
        <div className="left-section">
          <img src={logo} alt="Fast Route" className="logo" />
        </div>
        <div className="right-section-A">
          <a href="/about">Sobre</a>
          <a href="/contato">Contato</a>
          <button className="botaoEntrar" onClick={() => (window.location.href = "/")}>
            Entrar
          </button>
        </div>
      </header>

      <div className="retangulo"></div>
      <div className="img-container">
        <img src={mapaLogin} alt="mapa ilustrativo" className="mapa-styled" />
      </div>

      <div className="cadastro">
        <div className="circulo" onClick={handleImageSelect}>
          {imageSrc ? <img src={imageSrc} alt="Imagem selecionada" className="circulo-img" /> : <img src={camera} alt="Camera" className="camera-img" />}
        </div>

        {imageSrc && <h2 className="h2C" onClick={handleRemoveImage}>remover foto</h2>}

        <div className="espacos">

          <div className="input-container">
            <input type="text" placeholder="Nome de usuário" className="caixa" />
          </div>
          <div className="input-container">
            <input type="email" placeholder="E-mail" className="caixa" />
          </div>
          <div className="input-container">
            <label className="password-label">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha (mínimo 5 caracteres)"
                className="caixa"
                onChange={handlePasswordChange}
              />
              <input type="checkbox" onChange={togglePasswordVisibility} className="password-checkbox" />
            </label>
          </div>
          <div className="input-container">
            <label className="confirm-password-label">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmar senha"
                className="caixa"
                onChange={handleConfirmPasswordChange}
              />
              <input type="checkbox" onChange={toggleConfirmPasswordVisibility} className="confirm-password-checkbox" />
            </label>
            {!passwordsMatch && <p className="incorreta">As senhas estão diferentes.</p>}
          </div>
          {!isValidPassword && <button className="cadastrar" onClick={handleSubmit} style={{ display: "none" }}>Cadastrar</button>}
          {isValidPassword && <button className="cadastrar" onClick={handleSubmit}>Cadastrar</button>}

        </div>

      </div>
    </div>
  );
}

export default TelaCadastro;
