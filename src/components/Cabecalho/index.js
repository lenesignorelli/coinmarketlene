import { Link } from 'react-router-dom';
import './styles.css'

export default function Cabecalho() {
  return (
    <header className="container-cabecalho">
        <span className='logo'>
            Coin Market
        </span>
        <nav>
            <Link to="/">Cotações</Link>
            <Link to="usuarios">Usuários</Link>
            <Link to="relatorios">Relatórios</Link>
        </nav>
    </header>
  )
}
