import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name='Dinajpur' speciality='lichu is the best'></District>
      <District name='Dhaka' speciality='jam er jonne most famous'></District>
      <District name='Borishal' speciality='amr gf er basa'></District>
      <District name='uttara' speciality='i love this city'></District>

    </div>
  );
}

function District(props) {
  return (
    <div className='district'>
      <h1>Name: {props.name}</h1>
      <p>Speciality: {props.speciality}</p>
    </div>
  )
}

export default App;
