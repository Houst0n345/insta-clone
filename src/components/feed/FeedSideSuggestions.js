import React from "react";
import {useFeedSideSuggestionsStyles} from "../../styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {getDefaultUser} from "../../data";
import UserCard from "../shared/UserCard";
import FollowButton from "../shared/FollowButton";
import {LoadingIcon} from "../../icons";

function FeedSideSuggestions() {
    const s = useFeedSideSuggestionsStyles();
    let loading = false;
    return (
        <article className={s.article}>
            <Paper className={s.paper}>
                <Typography color={'textSecondary'}
                            variant={'subtitle2'}
                            component={'h2'}
                            align={'left'}
                            gutterBottom
                            className={s.typography}>
                    Suggestion For You
                </Typography>
                {loading ? (
                    <LoadingIcon/>
                ) : Array.from({length: 5}, () => getDefaultUser()).map(user => (
                    <div key={user.id} className={s.card}>
                        <UserCard user={user}/>
                        <FollowButton side/>
                    </div>
                ))}
            </Paper>
        </article>
    )
}

export default FeedSideSuggestions;
