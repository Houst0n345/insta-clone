import React, {useState} from "react";
import {useFeedPageStyles} from "../styles";
import Layout from "../components/shared/Layout";
import {getDefaultPost} from "../data";
import FeedPost from "../components/feed/FeedPost";
import Hidden from "@material-ui/core/Hidden";
import UserCard from "../components/shared/UserCard";
import FeedSideSuggestions from "../components/feed/FeedSideSuggestions";
import LoadingScreen from "../components/shared/LoadingScreen";
import {LoadingLargeIcon} from "../icons";


function FeedPage() {
    const s = useFeedPageStyles();
    const [isEndOfFeed, setIsEndOfFeed] = useState(false);
    let loading = false;

    if (loading) return <LoadingScreen/>
    return (
        <Layout>
            <div className={s.container}>
                <div>
                    {Array.from({length: 5}, () => getDefaultPost()).map((post, index) => (
                        <FeedPost key={post.id} post={post} index={index}/>
                    ))}
                </div>
                <Hidden smDown>
                    <div className={s.sidebarContainer}>
                        <div className={s.sidebarWrapper}>
                            <UserCard avatarSize={50}/>
                            <FeedSideSuggestions/>
                        </div>
                    </div>
                </Hidden>
                {!isEndOfFeed && <LoadingLargeIcon/>}
            </div>
        </Layout>
    )
}

export default FeedPage;
