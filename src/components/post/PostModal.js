import React from "react";
import {usePostModalStyles} from "../../styles";
import Modal from "react-modal";
import {useHistory, useParams} from "react-router-dom";
import Post from "./Post";
import {CloseIcon} from "../../icons";

function PostModal() {
    const s = usePostModalStyles();
    const {postId} = useParams();
    const history = useHistory();
    return <>
        <Modal isOpen
               overlayClassName={s.overlay}
               ariaHideApp={false}
               onRequestClose={()=>history.goBack()}
               style={{
                   content: {
                       display: 'flex',
                       alignItems: 'center',
                       maxWidth: 935,
                       width: '100%',
                       top: '50%',
                       left: '50%',
                       right: 'auto',
                       bottom: 'auto',
                       transform: 'translate(-50%, -50%)',
                       margin: 0,
                       padding: 0,
                       overflow: 'none',
                       webkitOverflowScrolling: 'touch'
                   }
               }}>
            <Post id={postId}/>
        </Modal>
        <div onClick={() => history.goBack()} className={s.close}>
            <CloseIcon/>
        </div>
    </>
}

export default PostModal;
