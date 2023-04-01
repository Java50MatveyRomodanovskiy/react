import { useEffect } from 'react';
import { BrowserRouter, useNavigate} from 'react-router-dom';
import Router from './routes';

function App() {
const navigate = useNavigate();
useEffect(() =>{
  navigate("/")
}), []};

 return( <BrowserRouter>
  <div className='App'>
    <Router/>
  </div>
  </BrowserRouter>
  );
}
export default App;