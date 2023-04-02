import Header from "../Header/Header";
import MediaQuery from "react-responsive";
import SubredditsList from "../SubredditsList/SubredditsList";
import Posts from '../Posts/Posts';
import { useDispatch } from "react-redux";
import { fetchSubreddits } from "../../features/subreditsSlice";
import { useEffect } from "react";
import "./App.css";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSubreddits())
  } )

  return (
      <div className="App">
      <Header />
      <main>
        <Posts/>
        <MediaQuery minWidth={700}>
          <SubredditsList/>  
        </MediaQuery>
      </main>
      </div>
  );
}

export default App;
