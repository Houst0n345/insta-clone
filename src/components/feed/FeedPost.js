import React, {useState} from "react";
import {useFeedPostStyles} from "../../styles";
import {CommentIcon, LikeIcon, MoreIcon, RemoveIcon, SaveIcon, ShareIcon, UnlikeIcon} from "../../icons";
import UserCard from "../shared/UserCard";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import HTMLEllipsis from "react-lines-ellipsis/lib/html"
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import FollowSuggestions from "../shared/FollowSuggestions";


function FeedPost({post, index}) {
    const s = useFeedPostStyles();
    const [showCaption, setCaption] = useState(false)
    const {media, id, likes, user, caption, comments} = post;
    const showFollowSuggestion = index === 1;
    return (
        <>
            <article className={s.article} style={{
                marginBottom: showFollowSuggestion && 30
            }}>
                <div className={s.postHeader}>
                    <UserCard user={user}/>
                    <MoreIcon className={s.moreIcon}/>
                </div>
                <div>
                    <img src={media} alt="Post media" className={s.image}/>
                </div>
                <div className={s.postButtonsWrapper}>
                    <div className={s.postButtons}>
                        <LikeButton/>
                        <Link to={`/p/${id}`}>
                            <CommentIcon/>
                        </Link>
                        <ShareIcon/>
                        <SaveButton/>
                    </div>
                    <Typography className={s.like} variant={'subtitle2'}>
                        <span>{likes === 1 ? '1 like' : `${likes} likes`}</span>
                    </Typography>
                    <div className={showCaption ? s.expanded : s.collapsed}>
                        <Link to={`/${user.username}`}>
                            <Typography variant={'subtitle2'} component={'span'} className={s.username}>
                                {user.username}
                            </Typography>
                        </Link>
                        {showCaption ? (
                            <Typography variant={'body2'} component={'span'}
                                        dangerouslySetInnerHTML={{__html: caption}}>

                            </Typography>
                        ) : (
                            <div className={s.captionWrapper}>
                                <HTMLEllipsis unsafeHTML={caption}
                                              className={s.caption}
                                              maxLine={'0'}
                                              ellepsis={'...'}
                                              basedOn={'letters'}/>
                                <Button className={s.moreButton}
                                        onClick={() => setCaption(true)}>
                                    more
                                </Button>
                            </div>
                        )}
                    </div>
                    <Link to={`/p/${id}`}>
                        <Typography className={s.commentsLink} variant={'body2'} component={'div'}>
                            View all {comments.length} comments
                        </Typography>
                    </Link>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <Link to={`/${comment.user.username}`}>
                                <Typography variant={'subtitle2'} component={'span'} className={s.commentUsername}>
                                    {comment.user.username}
                                </Typography>
                                <Typography variant={'body2'} component={'span'}>
                                    {comment.content}
                                </Typography>
                            </Link>
                        </div>
                    ))}
                    <Typography color={'textSecondary'} className={s.datePosted}>
                        5 DAYS AGO
                    </Typography>
                </div>
                <Hidden xsDown>
                    <Divider/>
                    <Comment/>
                </Hidden>
            </article>
            {showFollowSuggestion && <FollowSuggestions/>}
        </>
    )
}

function LikeButton() {
    const s = useFeedPostStyles();
    const [liked, setLiked] = useState(false);
    const Icon = liked ? UnlikeIcon : LikeIcon;
    const className = liked ? s.liked : s.like;
    const onClick = liked ? handleUnlike : handleLike;

    function handleUnlike() {
        setLiked(false)
    }

    function handleLike() {
        setLiked(true)
    }

    return <Icon className={className} onClick={onClick}/>;
}

function SaveButton() {
    const s = useFeedPostStyles();
    const [saved, setSaved] = useState(false);
    const Icon = saved ? RemoveIcon : SaveIcon;
    const onClick = saved ? handleUnlike : handleLike;

    function handleUnlike() {
        setSaved(false)
    }

    function handleLike() {
        setSaved(true)
    }

    return <Icon onClick={onClick} className={s.saveIcon}/>;
}

function Comment() {
    const s = useFeedPostStyles();
    const [content, setContent] = useState('');
    return (
        <div className={s.commentContainer}>
            <TextField fullWidth value={content}
                       placeholder={'add comment...'}
                       multiline rowsMax={4}
                       rows={1}
                       onChange={e => setContent(e.target.value)}
                       className={s.textField}
                       InputProps={{
                           classes: {
                               root: s.root,
                               underline: s.underline
                           }
                       }}/>
            <Button color={'primary'} className={s.commentButton} disabled={!content.trim()}>
                Post
            </Button>
        </div>
    )
}

export default FeedPost;
