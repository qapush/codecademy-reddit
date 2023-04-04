import Header from "../Header/Header";
import MediaQuery from "react-responsive";
import SubredditsList from "../SubredditsList/SubredditsList";
import { Feed } from "../Feed/Feed";
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
        <Feed/>
        <MediaQuery minWidth={699}>
          <SubredditsList/>  
        </MediaQuery>
      </main>
      </div>
  );
}

export default App;
