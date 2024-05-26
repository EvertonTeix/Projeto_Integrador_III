import React from "react";
import TelaLogin from "./pages/telaLogin";
import TelaAbout from "./pages/telaAbout";
import TelaContato from './pages/telaContato';
import TelaCadastro from "./pages/telaCadastro";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/about" element={<TelaAbout />} />
            <Route path="/contato" element={<TelaContato />} />
            <Route path="/cadastro" element={<TelaCadastro />} />
        </Routes>
    );
}

export default AppRoutes;
