import Header from "../Header/Header";
import MediaQuery from "react-responsive";
import SubredditsList from "../SubredditsList/SubredditsList";
import { Feed } from "../Feed/Feed";
import { useDispatch } from "react-redux";
import { fetchSubreddits } from "../../features/subreditsSlice";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";



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
          <Feed/>
          <MediaQuery minWidth={701}>
            <SubredditsList />
          </MediaQuery>
        </main>
      </div>
    </Router>
  );
}

export default App;
