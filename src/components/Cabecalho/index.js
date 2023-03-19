import { Link } from 'react-router-dom';
import {BiMoneyWithdraw} from 'react-icons/bi';
import {FaUserFriends} from 'react-icons/fa';
import {TbReportSearch} from 'react-icons/tb';
import './styles.css'

export default function Cabecalho() {
  return (
    <header className="container-cabecalho">
        <span className='logo'>
            Coin Market
        </span>
        <nav>
            <Link to="/"><BiMoneyWithdraw/>Cotações</Link>
            <Link to="usuarios"><FaUserFriends/>Usuários</Link>
            <Link to="relatorios"><TbReportSearch/>Relatórios</Link>
        </nav>
    </header>
  )
}
