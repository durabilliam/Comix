import './App.css';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, dispatch } = useApplicationData();
  console.log("XXXX", state)
  //console.log("WWWWW", typeof(state.superheros.results))
  console.log("WWWWW", state.superheros.name)
  console.log("WWWWW", state.superheros.image)
  //const superheroTemp = state.superheros.results
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));
  const shname = (<li>{state.superheros.name}</li>);
  //const shimage = (<li>{state.superheros.image.url}</li>)

  //console.log("WWWWW", superheroTemp)

  return (<div className="App" >
    <h1> Users </h1>

    <ul> {userList} </ul>
    <ul>{shname}</ul>
    {/* <ul>{shimage}</ul> */}
  </div >
  );
};

export default App;
