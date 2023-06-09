import { useEffect, useState } from 'react';
import Coin from '../../components/Coin';
import './styles.css';

export default function Cotacoes() {
    const [criptos, setCriptos] = useState([]);
    useEffect(() => {
      fetch('dados.json')
      .then(resp => resp.json())
      .then(dados => setCriptos(dados))
    }, [])
    
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
