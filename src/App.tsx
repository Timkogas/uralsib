import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/Start/StartPage'
import TestPage from './pages/Test/TestPage'
import ResultPage from './pages/Result/ResultPage'

function App() {

  return (
    <div id='bg-1'>
      <div id='bg-2'>
        <Routes>

          <Route path='/' element={<StartPage />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/result' element={<ResultPage />} />

        </Routes>
      </div>
    </div>
  )
}

export default App
