import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/Start/StartPage'


function App() {

  return (
    <div id='bg-1'>
      <div id='bg-2'>
        <Routes>

          <Route path='/' element={<StartPage/>} />
          <Route path='/test' element={<>Тест</>} />
          <Route path='/result' element={<>Результаты</>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
