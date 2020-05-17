import React from "react";
import { useGridPostStyles } from "../../styles";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

function GridPost({post}) {
  const history = useHistory();
  const s = useGridPostStyles();

  function handleOpenPostModal() {
      history.push({
        pathname: `/p/${post.id}`,
        state: { modal: true}
      })
  }
  return <div className={s.gridPostContainer} onClick={handleOpenPostModal}>
    <div className={s.gridPostOverlay}>
      <div className={s.gridPostInfo}>
        <span className={s.likes}/>
        <Typography>
          {post.likes}
        </Typography>
      </div>
      <div className={s.gridPostInfo}>
        <span className={s.comments}/>
        <Typography>
          {post.comments.length}
        </Typography>
      </div>
    </div>
    <img src={post.media} alt="Post cover" className={s.image}/>
  </div>
}

export default GridPost;
