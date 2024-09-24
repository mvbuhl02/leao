import React from "react";

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center">
            <h1 className="display-4 fw-bold">Bem-vindo ao Seu Lar Financeiro</h1>
          </div>

          <h2 className="mt-4">Alcance Seus Objetivos Financeiros</h2>
          <p>
            Tenha o controle total de suas finanças com nossa plataforma intuitiva e completa. 
            Acompanhe seus gastos, planeje seu futuro e tome decisões mais inteligentes com base em 
            informações claras e personalizadas.
          </p>

          <h2 className="mt-4">Como Começar?</h2>
          <p>
            É simples! Cadastre suas contas, categorize suas transações e visualize seus dados 
            em gráficos e relatórios interativos. Nossa ferramenta te ajuda a identificar áreas de 
            oportunidade e a construir um futuro financeiro mais seguro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;