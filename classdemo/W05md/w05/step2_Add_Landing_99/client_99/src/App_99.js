import styled from 'styled-components';
import './App.css';
import Landing_99 from './pages/Landing_99';

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`;

const ButtonSecond = styled.button`
  background: blue;
  color: white;
  font-size: 1rem;
`;

function App_99() {
  return (
    <div className='App'>
      <Landing_99 />
    </div>
  );
}

export default App_99;
