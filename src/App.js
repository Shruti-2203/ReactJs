import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Navbar from './components/Header';
import Raju from './components/Class-components';
import Bird from './components/Props';
import Cloth from './components/State';
import Event from './components/Event-handler';
import StateManipulating from './components/State-Manipulating';
import Dom from './components/Dom';
import Bike from './components/Usestate';
import DataBinding from './components/DataBinding';
import Card from './components/StyleSheet';
import InputForm from './components/Single-input';
import OnChangeForm from './components/On-change';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Shruti</h1>

        <Hello></Hello>
        
        <Navbar></Navbar>

        <Raju/>

      {/* props */}
        <Bird name='Parrot' color='green'/>
        <Bird name='Eagle' color='Brown'/>
        <Bird name='Owl' color='Black'/>

        {/* State  */}

        <Cloth/>

        {/* Event Handler Method */}

        <Event/>

        {/*  State Manipulating  */}

        <StateManipulating/>

        {/* DOM */}
        <Dom/>

        {/* Use state */}
        <Bike/>

        {/* Data Binding */}
        <DataBinding/>

        {/* Style Sheet */}
        <Card/>

        {/* single input form */}
        <InputForm/>

        {/* onchange  */}
        <OnChangeForm/>

      </header>
    </div>
  );
}

export default App;
