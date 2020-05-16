import React, {useRef} from "react";
import {useNotificationListStyles} from "../../styles";
import {defaultNotifications} from "../../data";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FollowButton from "../shared/FollowButton";
import useOutsideClick from "@rooks/use-outside-click";


function NotificationList({handleHideList}) {
    const s = useNotificationListStyles();
    const listContainerRef = useRef();
    useOutsideClick(listContainerRef, handleHideList)
    return (
        <Grid ref={listContainerRef} className={s.listContainer} container>
            {defaultNotifications.map(notification => {
                const isLike = notification.type === 'like';
                const isFollow = notification.type === 'follow';
                return (
                    <Grid key={notification.id} item className={s.listItem}>
                        <div className={s.listItemWrapper}>
                            <div className={s.avatarWrapper}>
                                <Avatar src={notification.user.profile_image} alt={'User Avatar'}/>
                            </div>
                            <div className={s.nameWrapper}>
                                <Link to={`${notification.user.username}`}>
                                    <Typography variant={'body1'}>
                                        {notification.user.username}
                                    </Typography>
                                </Link>
                                <Typography variant={'body2'} color={'textSecondary'} className={s.typography}>
                                    {isLike && `likes your photo. 4d`}
                                    {isFollow && `started following you. 5d`}
                                </Typography>
                            </div>
                        </div>
                        <div>
                            {isLike && (
                                <Link to={`/p/${notification.post.id}`}>
                                    <Avatar src={notification.post.media} alt={"post cover"}/>
                                </Link>
                            )}
                            {isFollow && <FollowButton/>}
                        </div>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default NotificationList;
