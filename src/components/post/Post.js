import {usePostStyles} from "../../styles";
import React, {useState} from "react";
import {CommentIcon, LikeIcon, MoreIcon, RemoveIcon, SaveIcon, ShareIcon, UnlikeIcon} from "../../icons";
import UserCard from "../shared/UserCard";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import FollowSuggestions from "../shared/FollowSuggestions";
import OptionsDialog from "../shared/OptionsDialog";
import {defaultPost} from "../../data";


function Post() {
    const s = usePostStyles();
    const [showOptionsDialog, setOptionsDialog] = useState(false)
    const {media, id, likes, user, caption, comments} = defaultPost;

    return (
        <div className={s.postContainer}>
            <article className={s.article}>
                {/*post header*/}
                <div className={s.postHeader}>
                    <UserCard user={user} avatarSize={32}/>
                    <MoreIcon className={s.moreIcon}
                              onClick={() => setOptionsDialog(true)}/>
                </div>
                {/*post image*/}
                <div className={s.postImage}>
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
                    <Typography className={s.likes} variant={'subtitle2'}>
                        <span>{likes === 1 ? '1 like' : `${likes} likes`}</span>
                    </Typography>
                    <div className={s.postCaptionContainer}>
                        <Link to={`/${user.username}`}>
                            <Typography variant={'body2'}
                                        component={'span'}
                                        className={s.postCaption}
                                        dangerouslySetInnerHTML={{__html: caption}}/>
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

                    </div>
                    <Typography color={'textSecondary'} className={s.datePosted}>
                        5 DAYS AGO
                    </Typography>
                    <Hidden xsDown>
                        <Divider/>
                        <Comment/>
                    </Hidden>
                </div>
            </article>

            {showOptionsDialog && <OptionsDialog onClose={() => setOptionsDialog(false)}/>}
        </div>
    )
}

function LikeButton() {
    const s = usePostStyles();
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
    const s = usePostStyles();
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
    const s = usePostStyles();
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

export default Post;

