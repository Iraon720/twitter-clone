import { ContextProvider } from './Context';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import './App.css';

function App() {
  return <div className='App'>
<ContextProvider>
<Routes>
<Route path='/' element={<Landing/>} style={{color:'red'}}/>
<Route path='/signin' element={<SignIn/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>

</Routes>

</ContextProvider>



  </div>;
}

export default App;
