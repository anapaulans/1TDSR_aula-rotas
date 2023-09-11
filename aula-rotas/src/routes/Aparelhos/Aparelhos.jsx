import React from 'react';
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../../components/listaProdutos';

export default function Aparelhos() {
  return (
    <div>
      <h1>Lista de Aparelhos</h1>
      <ul>
        {ListaProdutos.map((produto) => (
          <li key={produto.id}>
            <Link to={`/src/components/listaProdutos.js${produto.id}`}>
              <h2>{produto.nome}</h2>
              <p>Preço: R$ {produto.preco}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
