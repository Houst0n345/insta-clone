import React from "react";
import {useFollowSuggestionsStyles} from "../../styles";
import Typography from "@material-ui/core/Typography";
import {LoadingLargeIcon} from "../../icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getDefaultUser} from "../../data";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import FollowButton from "./FollowButton";


function FollowSuggestions({hideHeader}) {
    const s = useFollowSuggestionsStyles();
    let loading = false;
    return <div className={s.container}>
        {!hideHeader && <Typography color={'textSecondary'}
                     variant={'subtitle2'}
                     className={s.typography}>
            Suggestions For You
        </Typography>}
        {loading ? (
            <LoadingLargeIcon/>
        ) : (
            <Slider className={s.slide}
                    dots={false}
                    infinite
                    speed={1000}
                    touchTreshold={1000}
                    variableWidth
                    swipeToSlide
                    arrows
                    slidesToScroll={3}
                    easing={'ease-in-out'}>
                {Array.from({length: 10}, () => getDefaultUser()).map(user => (
                    <FollowSuggestionsItem key={user.id} user={user}/>
                ))}
            </Slider>
        )
        }
    </div>;
}

function FollowSuggestionsItem({user}) {
    const s = useFollowSuggestionsStyles();
    const {profile_image, username, name} = user;
    return (
        <div>
            <div className={s.card}>
                <Link to={`/${username}`}>
                    <Avatar src={profile_image}
                            alt={`${username}'s profile`}
                            classes={{
                                root: s.avatar,
                                img: s.avatarImg
                            }}/>
                </Link>
                <Link to={`/${username}`}>
                    <Typography variant={'subtitle2'} className={s.text} align={'center'}>
                        {username}
                    </Typography>
                </Link>
                <Typography className={s.text}
                            color={'textSecondary'}
                            variant={'body2'}
                            align={'center'}>
                    {name}
                </Typography>
                <FollowButton side={false}/>
            </div>
        </div>
    )
}

export default FollowSuggestions;
