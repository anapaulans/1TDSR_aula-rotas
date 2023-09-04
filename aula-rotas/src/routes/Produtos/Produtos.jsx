//Carregando dados da lista na pagina Produtos.jsx, será usado para acessar e carregar a lista, usando um 
//metodo map para criar os links
import { Link } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProdutos"

export default function Produtos() {
  return (
  
    <main>
      <h1>Produtos</h1>
      {ListaProdutos.map(prod => (
        <div key={prod.id}>
          <Link to={`/produtos/editar/${prod.id}`}>Editar o produto: {prod.nome}</Link>
        </div>
      ))}
    </main>

    )
}
