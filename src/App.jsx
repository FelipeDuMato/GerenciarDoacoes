import './App.css'
import SideBar from './Components/SideBarComp/SideBar'
import TipoDoacao from './Components/TipoDoacaoComp/TipoDoacao'
import FormDinheiro from './Components/FormDinheiroComp/FormDinheiro'
import FormAlimentos from './Components/FormAlimentosComp/FormAlimentos'
import FormOutros from './Components/FormOutrosComp/FormOutros'
import Header from './Components/HeaderComp/Header'
import HeaderTabela from './Components/HeaderTabelaComp/HeaderTabela'
import FiltroBusca from './Components/FiltroBuscaComp/FiltroBusca'
import { useState } from 'react';
import TabelaDoacoes from './Components/TabelaDoacoesComp/TabelaDoacoes'

function App() {
  const [tipoDoacao, setTipoDoacao] = useState('money');
  const [mostraTabela, setMostraTabela] = useState(false);
  return (
    <>
      <SideBar />
      <div className='main-content'>
        {/* Página de Cadastro de Doações */}
        {['money', 'food', 'others'].includes(tipoDoacao) && !mostraTabela && (
          <>
          <Header ativarTabela={setMostraTabela}/>
          <TipoDoacao selectTipoDoacao={setTipoDoacao} />
          {tipoDoacao === 'money' && <FormDinheiro />}
          {tipoDoacao === 'food' && <FormAlimentos />}
          {tipoDoacao === 'others' && <FormOutros />}
          </>
        )}
        {/* Página de Tabela de Doações */}
        {mostraTabela && (
          <>
          <HeaderTabela selectTableDoa={setMostraTabela}/>
          <FiltroBusca />
          <TabelaDoacoes />
          </>
        )}
      </div>
    </>
  )
}

export default App
