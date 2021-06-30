import './App.css';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, dispatch } = useApplicationData();
  console.log("XXXX", state)
  //console.log("WWWWW", typeof(state.superheros.results))
  // console.log("WWWWW", state.superheros.name)
  // console.log("WWWWW", state.superheros.image)
  //const superheroTemp = state.superheros.results
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));
  const comicList = state.comics.map((comic) => (<li key={comic.id} > {comic.title} {comic.issue} {comic.edition} </li>));
  
  //const shname = (<li>{state.superheros.name}</li>);
  //const shimage = state.superheros.image.url

  //console.log("WWWWW", superheroTemp)

  return (<div className="App" >
    <h1> Users </h1>

    <ul> {userList} </ul>
    <ul> {comicList} </ul>

    {/* <ul>{shname}</ul> */}
    {/* <ul>{shimage}</ul> */}
  </div >
  );
};

export default App;
