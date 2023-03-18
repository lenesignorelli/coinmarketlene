import './styles.css';

export default function Rodape() {

    const data = new Date().toISOString();

  return (
    <footer>
        Data da Última Atualização: 18/03/2023: { data }
    </footer>
  )
}
