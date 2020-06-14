import React from 'react';
import './App.css';

import Conversor from './Components/Conversor'

function App() {
  return (
    <div className="App">
      <table>
        <th className="th">Conversor de moedas</th>
        <tr>
        <td><Conversor moedaA="USD" moedaB="BRL"></Conversor></td>
        <td><Conversor moedaA="BRL" moedaB="USD"></Conversor></td>
        <td><Conversor moedaA="BRL" moedaB="EUR"></Conversor></td>
        <td><Conversor moedaA="EUR" moedaB="BRL"></Conversor></td>
        </tr>
        <tr>
          <td><Conversor moedaA="BRL" moedaB="Peso"></Conversor></td>
          <td><Conversor moedaA="Peso" moedaB="BRL"></Conversor></td>
          <td><Conversor moedaA="Yen" moedaB="BRL"></Conversor></td>
          <td><Conversor moedaA="BRL" moedaB="Yen"></Conversor></td>
        </tr>
      </table>
      
      
    </div>
  );
}

export default App;
