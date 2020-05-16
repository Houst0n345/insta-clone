import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import {Switch, Route} from "react-router";
import FeedPage from "./pages/feed";
import ExplorePage from "./pages/explore";
import PostPage from "./pages/post";
import ProfilePage from "./pages/profile";
import EditProfilePage from "./pages/edit-profile";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import NotFoundPage from "./pages/not-found";

function App() {
  return (
      <Router>
          <Switch>
              <Route path={'/'} exact render={()=><FeedPage/>}/>
              <Route path={'/explore'} render={()=><ExplorePage/>}/>
              <Route path={'/p/:postId'} exact render={()=><PostPage/>}/>
              <Route path={'/:username'} exact render={()=><ProfilePage/>}/>
              <Route path={'/accounts/edit/'} render={()=><EditProfilePage/>}/>
              <Route path={'/accounts/login'} render={()=><LoginPage/>}/>
              <Route path={'/accounts/emailsignup/'} render={()=><SignUpPage/>}/>
              <Route path={'*'} render={()=><NotFoundPage/>}/>
          </Switch>
      </Router>
  )
}

export default App;
