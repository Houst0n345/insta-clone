import React from "react";
import { useLoadingScreenStyles } from "../../styles";
import {LogoLoadingIcon} from "../../icons";

function LoadingScreen() {
  const s = useLoadingScreenStyles();

  return (
      <section className={s.section}>
        <span>
          <LogoLoadingIcon/>
        </span>
      </section>
  )
}

export default LoadingScreen;
