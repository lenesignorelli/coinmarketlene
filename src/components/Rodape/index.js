import dateFormat from 'dateformat';
import './styles.css';

export default function Rodape() {

    const dataDeHoje = new Date();

  return (
    <footer>
        Data da Última Atualização: {dateFormat(dataDeHoje, "dd/mm/yyyy")}
    </footer>
  )
}
