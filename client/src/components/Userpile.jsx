import React from 'react'
import ComixsNavbar from './Navbar'

export default function Userpile(props) {
  // const { state, dispatch } = useApplicationData();
  // const { id } = useParams();
  // const [results, setResults] = useState([]);
  // const [allResults, setAllResults] = useState([]);
  // const [term, setTerm] = useState("");
  // const [dropDownFilter, setDropDownFilter] = useState('All');

  // useEffect(() => {
  //   const comixList = `http://localhost:3001/api/comixs`
  //   axios.get(comixList).then(response => {
  //     setAllResults([...response.data])
  //     setResults([...response.data])
  //   });
  // }, [])

  // useEffect(() => {
  //   if (dropDownFilter === 'All') {
  //     const newResults = allResults
  //     setResults(newResults)
  //   } else if (dropDownFilter === 'Publisher') {
  //     const newResults = allResults.filter(comix => comix.Publisher.toLowerCase().includes(term))
  //     setResults(newResults)
  //   } else if (dropDownFilter === 'Title') {
  //     const newResults = allResults.filter(comix => comix.title.toLowerCase().includes(term))
  //     setResults(newResults)
  //   }
  // }, [term, dropDownFilter])

  // const comixList = results.map(
  //   (comix) => (
  //     <div className='comix-container'>
  //       <a className='clickable-box' href={`/comixs/${comix.id}`}>
  //         <li className='comixs' href={`/comixs/${comix.id}`} key={`${comix.id}`}>
  //           <img src={comix.image} width="100" alt="comix"></img>
  //           <div className = 'box-title'>
  //           <h4>{comix.title}</h4> 
  //           <h4>#{comix.issue}</h4>
  //           <h4>Price CAD: {comix.Price}</h4>
  //           </div>
  //         </li>
  //       </a>
  //     </div>))


  return (<div className="App" >
    <div className="page-background">
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <ComixsNavbar />
      <div className="color-overlay">
        {/* <div className='comix-top'>
          <Searchbar onSearch={term => setTerm(term)} onDropDownChange={setDropDownFilter} />
          <Results results={results} />
          <h1 className='comixs-title'>Comic List</h1>
        </div> */}
        <div class="comixlist">
          {/* <section>
            <div className='comixs-list'>
              {comixList}
            </div>
          </section> */}
        </div>
      </div>
    </div>
  </div>
  );
};