import './App.css';
import PataintManagementReducer from './components/PataintManagementReducer/PataintManagementReducer';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PataintManagementReducer></PataintManagementReducer>
    </div>
  );
};

export default App;
