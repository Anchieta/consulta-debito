import './App.css'

function App() {

  return (
    <>
        <div className="cd-container">
            <header>
              <a href="http://www.fazenda.sp.gov.br/">
                <img src='https://www.ipva.fazenda.sp.gov.br/ipvanet_consulta/Images/logo.jpg'  alt="Logo, um texto de duas linhas escrito: Em cima, em vermelho: Governo do Estado de São Paulo, e embaixo, em preto: Secretaria da Fazenda e Planejamento" title='Logo, um texto de duas linhas escrito: Em cima, em vermelho: Governo do Estado de São Paulo, e embaixo, em preto: Secretaria da Fazenda e Planejamento' />
              </a>
              <img src="https://www.ipva.fazenda.sp.gov.br/ipvanet_consulta/Images/header_bg.jpg" alt="Brasão de São Paulo" title='Brasão de São Paulo' />
            </header>
            <div class="cd-title">
              <h1>Consulta</h1>
              <h1>Débitos vinculados ao veículo</h1>
            </div>
            <div className="cd-close">
              <button>
                  <img src="https://www.ipva.fazenda.sp.gov.br/ipvanet_consulta/Images/Icones/botao_sair.gif" alt="Botão Fechar" title='Botão fechar' />
              </button>
            </div>
            <main>
              <form action="">
                  <h3>Identificação	do Veículo</h3>
                  <fieldset>
                      <div className="label">
                          <label htmlFor="Renavan">Renavan</label>
                      </div>
                      <div className="input">
                         <input type="number" id="renavan" name="renavan" required  placeholder='Renavan'/>
                      </div>
                  </fieldset>
                  <fieldset>
                    <div className="label">
                        <label htmlFor="Placa">Placa</label>
                    </div>
                    <div className="input">
                        <input type="text" id="placa" name="placa" required  placeholder='Placa' />
                    </div>
                  </fieldset>
                  <button>Consultar</button>
              </form>
            </main>
        </div>
    </>
  )
}

export default App
