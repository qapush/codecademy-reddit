import Header from "../Header/Header";
import MediaQuery from "react-responsive";
import SubredditsList from "../SubredditsList/SubredditsList";
import { Feed } from "../Feed/Feed";
import { useDispatch } from "react-redux";
import { fetchSubreddits } from "../../features/subreditsSlice";
import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";



function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchSubreddits())
  })

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Feed />
          <MediaQuery minWidth={701}>
            <SubredditsList />
          </MediaQuery>
        </main>
      </div>
    </Router>
  );
}

export default App;
