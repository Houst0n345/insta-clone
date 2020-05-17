import React from "react";
import {useMorePostsFromUserStyles} from "../../styles";
import Typography from "@material-ui/core/Typography";
import {LoadingLargeIcon} from "../../icons";
import {getDefaultPost, defaultUser} from "../../data";
import GridPost from "../shared/GridPost";
import {Link} from "react-router-dom";

function MorePostsFromUser() {
    const s = useMorePostsFromUserStyles();
    const loading = false;
    return <div className={s.container}>
        <Typography color={'textSecondary'}
                    variant={'subtitle2'}
                    component={'h2'}
                    gutterBottom
                    className={s.typography}>
            More Posts From {" "}
            <Link to={`/${defaultUser.username}`} className={s.link}>
                @{defaultUser.username}
            </Link>
        </Typography>
        {loading ? (
            <LoadingLargeIcon/>
        ) : (
            <article className={s.article}>
                <div className={s.postContainer}>
                    {Array.from({length: 6}, () => getDefaultPost()).map(post => (
                        <GridPost key={post.id} post={post}/>
                    ))}
                </div>
            </article>
        )}
    </div>
}

export default MorePostsFromUser;
