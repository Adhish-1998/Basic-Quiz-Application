import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Component/User/Register/Resgister';
import Login from './Component/User/Login/Login'
import Admin from './Component/Admin/Admin';
import Questions from './Component/Question/Questions';
import Quiz from './Component/Quiz/Quiz';
import Result from './Component/Result/Result';
import MCQ from './Component/MCQ Snippet/MCQ';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/signup' element={<Register />} /> 
            <Route exact path='/admin' element={<Admin />} /> 
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/mcq' element={<MCQ />} />
            <Route path='/admin/addquestions' element={<Questions />} />
            <Route path='/result' element={<Result />} />
         </Routes> 
      </BrowserRouter>
       
    </div>
  );
}

export default App;
