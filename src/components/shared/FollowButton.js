import React, {useState} from "react";
import {useFollowButtonStyles} from "../../styles";
import {Button} from "@material-ui/core";

function FollowButton({side}) {
    const s = useFollowButtonStyles({side});
    const [isFollowing, setFollowing] = useState(false)
    const followButton = (
        <Button variant={side ? 'text' : 'contained'}
                color={'primary'}
                className={s.button}
                onClick={() => setFollowing(true)}
                fullWidth>
            Follow
        </Button>
    )
    const followingButton = (
        <Button variant={side ? 'text' : 'outline '}
                color={'primary'}
                className={s.button}
                onClick={() => setFollowing(false)}
                fullWidth>
            Following
        </Button>
    )
    return isFollowing ? followingButton : followButton;

}

export default FollowButton;
