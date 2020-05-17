import React from "react";
import {useExploreGridStyles} from "../../styles";
import Typography from "@material-ui/core/Typography";
import {LoadingLargeIcon} from "../../icons";
import {getDefaultPost} from "../../data";
import GridPost from "../shared/GridPost";

function ExploreGrid() {
    const s = useExploreGridStyles();
    const loading = false;
    return <>
        <Typography color={'textSecondary'}
                    variant={'subtitle2'}
                    component={'h2'}
                    gutterBottom
                    className={s.typography}>
            Explore
        </Typography>
        {loading ? (
            <LoadingLargeIcon/>
        ) : (
            <article className={s.article}>
                <div className={s.postContainer}>
                    {Array.from({length: 18}, () => getDefaultPost()).map(post => (
                        <GridPost key={post.id} post={post}/>
                    ))}
                </div>
            </article>
        )}
    </>
}

export default ExploreGrid;
