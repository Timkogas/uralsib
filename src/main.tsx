import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { HashRouter } from 'react-router-dom'
import { Observer } from 'mobx-react-lite'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter >
    <Observer render={() => (
      <>
         <App />
      </>
    )} />
  </HashRouter>,
)
