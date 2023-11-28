import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Observer } from 'mobx-react-lite'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={'/uralsib'}>
    <Observer render={() => (
      <>
         <App />
      </>
    )} />
  </BrowserRouter>
  
)
