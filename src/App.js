import logo from './logo.svg';
import './App.css';

import List from './list';

const users = [
  {
    id: 0,
    name: 'Siri',
  },
  {
    id: 1,
    name: 'Alexa',
  },
{
  id: 2,
  name: 'Google Assistente'
}
];

function App() {
 
  return (
    <div className="App">
      <List items={users}/>
    </div>
  );
}

export default App;
