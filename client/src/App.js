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
  const comixList = state.comixs.map((comix) => (<li key={comix.id} > {comix.title} {comix.issue} {comix.edition} <img src={comix.image} height="150" width="125" alt="comic"></img> </li>));
  //const comicImage = state.comics.map((comic) => (<div className="comic-image"><img src={comic.image} className="comic-image" height="250" width="200"></img></div>));
  //const shname = (<li>{state.superheros.name}</li>);
  //const shimage = state.superheros.image.url

  //console.log("WWWWW", superheroTemp)

  return (<div className="App" >
    <h1> Users </h1>

    <ul> {userList} </ul>
    <ul> {comixList} </ul>
    {/* <ul> {comicImage} </ul> */}

    {/* <ul>{shname}</ul> */}
    {/* <ul>{shimage}</ul> */}
  </div >
  );
};

export default App;
