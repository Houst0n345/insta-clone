import React from "react";
import {useExploreSuggestionsStyles} from "../../styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import FollowSuggestions from "../shared/FollowSuggestions";

function ExploreSuggestions() {
    const s = useExploreSuggestionsStyles();

    return <Hidden xsDown>
        <div className={s.container}>
            <Typography variant={'subtitle2'}
                        color={'textSecodary'}
                        component={'h2'}
                        className={s.typography}>
                Discover People
            </Typography>
            <FollowSuggestions hideHeader/>
        </div>
    </Hidden>
}

export default ExploreSuggestions;
