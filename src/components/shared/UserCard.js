import React from "react";
import { useUserCardStyles } from "../../styles";
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {defaultUser} from "../../data";


function UserCard({user = defaultUser, avatarSize=44}) {

  const s = useUserCardStyles({avatarSize});
  const {username, profile_image, name} = user;
  return <div className={s.wrapper}>
    <Link to={`/${username}`}>
      <Avatar src={profile_image} alt={'User avatar'} className={s.avatar}/>
    </Link>
    <div className={s.nameWrapper}>
      <Link to={`/${username}`}>
        <Typography variant={'subtitle2'} className={s.typography}>
          {username}
        </Typography>
      </Link>
      <Typography color={'textSecondary'} variant={'body2'} className={s.typography}>
        {name}
      </Typography>
    </div>
  </div>;
}

export default UserCard;
