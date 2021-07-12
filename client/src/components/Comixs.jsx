import ComixsNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
import { useParams } from "react-router-dom";

export default function Comix(props) {
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();
  

  return (<div className="App" >
    <div className="page-background">
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <ComixsNavbar />
    </div>
  </div>
  );
};