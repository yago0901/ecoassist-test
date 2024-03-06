import "./App.scss";

function App() {
  return (
    <>
      <body className="body">
        <section className="body-container">
          <div className="container-left">
            <div className="left-block">
              <div className="block-imgs">
                <img
                  className="ecoassist-logo"
                  src="ecoassist-logo.png"
                  alt="ecoassist-logo"
                />
                <img
                  className="bradesco-logo"
                  src="bradesco-logo.png"
                  alt="bradesco-logo"
                />
              </div>
              <div className="block-texts">
                <h2 className="title">Soluções para um mundo sustentável</h2>
                <p className="description">
                  Nossa solução para toda a rede Bradesco.
                  <br />
                  Basta fazer o pré-cadastro ao lado e<br />
                  entraremos em contato para agendar a retirada.
                  <br />
                  O futuro se faz com a Terra mais limpa.
                  <br /> Fale com a Ecoassist.
                </p>
              </div>
            </div>
            <img
              className="reciclavel-gif"
              src="reciclavel-gif.gif"
              alt="reciclavel-gif"
            />
            <img
              className="ecoassist-planet"
              src="ecoassist-planet.png"
              alt="ecoassist-planet"
            />
          </div>
          <div className="container-right">
            <div className="right-block">
              <h2 className="title2">CADASTRO</h2>
              <form className="form">
                <h3 className="title">Nome:</h3>
                <input className="input" type="text" />
                <h3 className="title">Telefone:</h3>
                <input className="input" type="text" />
                <h3 className="title">E-mail:</h3>
                <input className="input" type="email" />
                <h3 className="title">Descrição:</h3>
                <textarea className="input-area"></textarea>
                <div className="checkbox-area">
                  <input type="checkbox" id="meuCheckbox" name="meuCheckbox" />
                  <p>Receber notificações</p>
                </div>
                <div className="div-right-btn">
                  <button className="right-btn" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
