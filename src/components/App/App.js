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
import CommentsFeed from "../CommentsFeed/CommentsFeed";

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
          <Route path="/r/:subreddit/:id" exact>
            <CommentsFeed/>
          </Route>
          <Route path="/" exact>
            <Feed/>
          </Route>
          <MediaQuery minWidth={701}>
            <SubredditsList />
          </MediaQuery>
        </main>
      </div>
    </Router>
  );
}

export default App;
