import React, {useEffect, useRef} from "react";
import {Switch, Route} from "react-router";
import FeedPage from "./pages/feed";
import ExplorePage from "./pages/explore";
import PostPage from "./pages/post";
import ProfilePage from "./pages/profile";
import EditProfilePage from "./pages/edit-profile";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import NotFoundPage from "./pages/not-found";
import {useHistory, useLocation} from "react-router-dom";
import PostModal from "./components/post/PostModal";

function App() {
    const history = useHistory();
    const location = useLocation();
    const prevLocation = useRef(location)
    const modal = location.state?.modal;

    useEffect(()=>{
        if (history.action !== 'POP' && !modal){
            prevLocation.current = location
        }
    }, [history.action, modal, location])

    const modalIsOpen = modal && prevLocation.current !== location;
    return (
        <>
            <Switch location={modalIsOpen ? prevLocation.current : location}>
                <Route path={'/'} exact render={() => <FeedPage/>}/>
                <Route path={'/explore'} render={() => <ExplorePage/>}/>
                <Route path={'/p/:postId'} exact render={() => <PostPage/>}/>
                <Route path={'/:username'} exact render={() => <ProfilePage/>}/>
                <Route path={'/accounts/edit/'} render={() => <EditProfilePage/>}/>
                <Route path={'/accounts/login'} render={() => <LoginPage/>}/>
                <Route path={'/accounts/emailsignup/'} render={() => <SignUpPage/>}/>
                <Route path={'*'} render={() => <NotFoundPage/>}/>
            </Switch>
            {modalIsOpen && <Route path={'/p/:postId'} exact render={() => <PostModal/>}/>}
        </>


    )
}

export default App;
