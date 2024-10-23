import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import { TodoDashboard } from './pages/todoDashboard';


function App() {
  

    return ( 
        <BrowserRouter> 
        <Routes> 

        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/todoDashboard" element={<TodoDashboard></TodoDashboard>}></Route>


        </Routes>
        </BrowserRouter>
    )
}

export default App
