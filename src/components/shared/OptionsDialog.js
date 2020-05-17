import React from "react";
import {useOptionsDialogStyles} from "../../styles";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import {defaultPost} from "../../data";

function OptionsDialog({onClose}) {
    const s = useOptionsDialogStyles();

    return <Dialog open
                   classes={{
                       scrollPaper: s.dialogScrollPaper
                   }}
                   onClose={onClose}
                   TransitionComponent={Zoom}>
        <Button className={s.redButton}>
            Unfollow
        </Button>
        <Divider/>
        <Button className={s.button}>
            <Link to={`/p/${defaultPost.id}`}>
                Go to Post
            </Link>
        </Button>
        <Divider/>
        <Button className={s.button}>
            Share
        </Button>
        <Divider/>
        <Button className={s.button}>
            Copy Link
        </Button>
        <Divider/>
        <Button className={s.button} onClick={onClose}>
            Cancel
        </Button>
    </Dialog>
}

export default OptionsDialog;
