import { Link } from "react-router-dom"
import { ListaProdutos } from "../../components/listaProdutos"


export default function Produtos() {
  return (
  
    <main>
      <h1>Vizualizar aparelhos</h1>
      {ListaProdutos.map(prod => (
        <div key={prod.id}>
          <Link to={`/produtos/editar/${prod.id}`}>Produto: {prod.nome}
          </Link>
        </div>
      ))}
    </main>

    )
}
