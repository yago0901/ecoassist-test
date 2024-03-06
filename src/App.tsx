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
              <form
                className="form"
                action="https://api.staticforms.xyz/submit"
                method="post"
              >
                <input
                  type="hidden"
                  name="accessKey"
                  value="c20d570c-90e7-4204-94c9-5cf3d83e04ac"
                />

                <h3 className="title">Nome:</h3>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                />
                <h3 className="title">Telefone:</h3>
                <input
                  className="input"
                  type="text"
                  name="phone"
                  placeholder="(XX) XXXXX-XXXX"
                />
                <h3 className="title">E-mail:</h3>
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="E-mail"
                />
                <h3 className="title">Descrição:</h3>
                <textarea className="input-area" name="message"></textarea>
                <div className="checkbox-area">
                  <input type="checkbox" id="meuCheckbox" name="meuCheckbox" />
                  <p>Receber notificações</p>
                </div>
                <div className="div-right-btn">
                  <button className="right-btn" type="submit">
                    Enviar
                  </button>
                </div>
                <input
                  type="hidden"
                  name="redirectTo"
                  value="https://example.com/contact/success"
                ></input>
              </form>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
