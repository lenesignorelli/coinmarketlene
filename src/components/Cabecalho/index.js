import './styles.css'

export default function Cabecalho() {
  return (
    <header className="container-cabecalho">
        <span className='logo'>
            Coin Market
        </span>
        <nav>
            <a href="1">Cotações</a>
            <a href="1">Usuários</a>
            <a href="1">Relatórios</a>
        </nav>
    </header>
  )
}
