import Coin from '../../components/Coin';
import './styles.css';

const criptos = [
    { "id": 1, "sigla": "BTC", "nome": "BitCoin", "preco": 115000.25, "variacaoPerc": 3.55 }, 
    { "id": 2, "sigla": "ETH", "nome": "Ethereum", "preco": 8114.03, "variacaoPerc": 1.94 },
    { "id": 3, "sigla": "USDC", "nome": "USDCoin", "preco": 5.09, "variacaoPerc": -0.15 },
    { "id": 4, "sigla": "LTC", "nome": "LiteCoin", "preco": 447.33, "variacaoPerc": 1.99 } 
];

export default function Cotacoes() {
  return (
    <table className='tabela-cotacoes'>
        <thead>
            <tr>
                <th>id</th> 
                <th>Moeda</th>
                <th>Preço</th>
                <th>Variação</th>               
            </tr>
        </thead>
        <tbody>
            {
                criptos.map(coin => <Coin key={coin.id}
                    id={coin.id} sigla={coin.sigla} nome={coin.nome} preco={coin.preco}
                    variacao={coin.variacaoPerc} simbolo={coin.simbolo} />)
           }
        </tbody>
    </table>
  )
}
