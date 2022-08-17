import { useState } from 'react';
import './App.css';

function App() {
  const [mostrar, setMostrar] = useState(false);
  const [jacare, setJacare] = useState('');
  const [terceiro, setTerceiro] = useState(false);

  function exibir() {
    setMostrar(true);
  }

  function mostrarimagem(e) {
    setJacare('Ross');
  }

  function mostra() {
    setTerceiro(true);
  }
  return (
    <div className="App">
      <h1>Renderização</h1>
      <div>
        <h2> Biscoito da Sorte </h2>
        <button onClick={exibir}> Abrir </button>
        {mostrar === true &&
          <div>
            <p>Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.</p>
            <img src="https://www.hypeness.com.br/1/2018/09/Lucky_horizontal.jpg" alt='' />
          </div>
        }
      </div>
      <div>
        <h2>Friend’s Poser?</h2>
        <p>Qual nome do personagem que ama dinossauros na série Friends?</p>
        <input type="text" onChange={e => setJacare(e.target.value)} />

        {jacare === 'Ross' &&
          <div>
            <img src='https://imagens.blogdaclara.net/img/68747470733a2f2f737461746963302e7468657468696e6773696d616765732e636f6d2f776f726470726573732f77702d63/6f6e74656e742f75706c6f6164732f323032302f30342f526f73732d312e6a70673f713d353026616d703b6669743d63726f/7026616d703b773d37343026616d703b6470723d312e35.jpeg' alt='' />
          </div>
        }
      
      <div>
        <p onClick={mostra}>Informações</p>
        <p>Qualificações</p>
          {terceiro === true &&
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non .dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          }
    </div>
    </div>
    </div>
  );
}

export default App;
