import React from "react";
import {useNavbarStyles} from "../../styles";
import Typography from "@material-ui/core/Typography";

function NotificationTooltip() {
    const s = useNavbarStyles();

    return (
        <div className={s.tooltipContainer}>

            <div className={s.tooltip}>
                <span aria-label={'Followers'} className={s.followers}/>
                <Typography>1</Typography>
            </div>

            <div className={s.tooltip}>
                <span aria-label={'Likes'} className={s.likes}/>
                <Typography>1</Typography>
            </div>
        </div>
    )
}

export default NotificationTooltip;
