import React, { useState } from 'react';
import './App.css';
import { FaTrash } from 'react-icons/fa';

function App() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  const adicionarNovoItem = () => {
    if (novoItem.trim() !== "") {
      setLista([...lista, { texto: novoItem, concluido: false }]);
      setNovoItem("");
    }
  };

  const marcarConcluido = (index) => {
    const novaLista = [...lista];
    novaLista[index].concluido = !novaLista[index].concluido;
    setLista(novaLista);
  };

  const removerItem = (index) => {
    const novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista(novaLista);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      adicionarNovoItem();
    }
  };

  return (
    <>
      <center><h1>O que devo fazer hoje?</h1></center>
      <ul>
        <input
          className="additem"
          value={novoItem}
          onChange={(event) => setNovoItem(event.target.value)}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="Escrever..."
        />
        <button className="botaoadd" onClick={adicionarNovoItem}>Adicionar</button>
        {lista.map((item, index) => (
          <li key={index}>
            <label className="check-container">
              <input
                type="checkbox"
                checked={item.concluido}
                onChange={() => marcarConcluido(index)}
              />
              <span className="checkmark"></span>
            </label>
            <span style={{ textDecoration: item.concluido ? 'line-through' : 'none' }}>
              {item.texto}
            </span>
            <button className="botaoremover" onClick={() => removerItem(index)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
