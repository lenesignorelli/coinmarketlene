import PropTypes from 'prop-types';
import './styles.css';

//props
function Coin({ id, nome, preco, variacao }) {

  const isVariacaoNegativa = variacao < 0; //boolean
  
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{nome}</td>
      <td>{preco}</td>
      <td className={isVariacaoNegativa ? 'var-negativa' : 'var-positiva'}>{variacao}</td>
    </tr>
  )
}

Coin.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  variacao: PropTypes.number.isRequired
}

export default Coin;