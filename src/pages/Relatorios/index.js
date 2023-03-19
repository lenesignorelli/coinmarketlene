import './styles.css'

const reports = [
  {
    codigo: 100, titulo: 'Qui eu id quis', 
    texto: 'Qui eu id quis occaecat aliquip anim duis nisi eiusmod velit non sint.Qui eu id quis occaecat aliquip anim duis nisi eiusmod velit non sint.',
  },
  {
    codigo: 200, titulo: "Qui eu id quis", 
    texto: 'Qui eu id quis occaecat aliquip anim duis nisi eiusmod velit non sint.Qui eu id quis occaecat aliquip anim duis nisi eiusmod velit non sint.',
  },
  {
    codigo: 300, titulo: "Qui eu id quis", 
    texto: 'Qui eu id quis occaecat aliquip anim duis nisi eiusmod velit non sint.Qui eu id quis occaecat aliquip anim duis nisi eiusmod velit non sint.',
  },
];

export default function Relatorios() {
  return (
    <>
    <h1 className='titulo-relatorios'>
        Relatórios de Criptomoedas
    </h1>
    <div>
      {
        reports.map(relat => {
          return (
            <div className='relatorio-cartao' key={relat.codigo}>
              <span className='sp-codigo'>{relat.codigo}</span>
              <span className='sp-titulo'>{relat.titulo}</span>
              <span className='sp-texto'>{relat.texto}</span>
            </div>
          )
        })
      }
    </div>
    </>
  )
}
