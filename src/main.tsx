import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Observer } from 'mobx-react-lite'
import './global.d.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Observer render={() => (
      <>
         <App />
      </>
    )} />
  </BrowserRouter>
  
)
