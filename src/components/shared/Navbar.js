import React, {useEffect, useState} from "react";
import {RedTooltip, useNavbarStyles, WhiteTooltip} from "../../styles";
import {AppBar, Fade, Hidden, Zoom} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import logo from "../../images/logo.png"
import InputBase from "@material-ui/core/InputBase";
import {
    AddIcon,
    ExploreActiveIcon,
    ExploreIcon,
    HomeActiveIcon,
    HomeIcon,
    LikeActiveIcon, LikeIcon,
    LoadingIcon
} from "../../icons";
import {defaultCurrentUser, getDefaultUser} from "../../data";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NotificationTooltip from "../notification/NotificationTooltip";
import NotificationList from "../notification/NotificationList";
import {useNProgress} from "@tanem/react-nprogress";


function Navbar({minimalNavbar}) {
    const s = useNavbarStyles();
    const history = useHistory();
    const path = history.location.pathname;
    const [isLoadingPage, setLoadingPage] = useState(true);
    useEffect(() => {
        setLoadingPage(false)
    }, [path])
    return (
        <>
            <Progress isAnimating={isLoadingPage}/>
            <AppBar className={s.appBar}>
                <section className={s.section}>
                    <Logo/>
                    {!minimalNavbar && (
                        <>
                            <Search history={history}/>
                            <Links path={path}/>
                        </>
                    )}
                </section>
            </AppBar>
        </>
    )
}

function Logo() {
    const s = useNavbarStyles();
    return (
        <div className={s.logoContainer}>
            <Link to={'/'}>
                <div className={s.logoWrapper}>
                    <img src={logo} alt="Instagram" className={s.logo}/>
                </div>
            </Link>
        </div>
    )
}

function Search({history}) {
    const s = useNavbarStyles();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setloading] = useState(false);

    const hasResults = Boolean(query) && results.length > 0;

    useEffect(() => {
        if (!query.trim()) return;
        setResults(Array.from({length: 5}, () => getDefaultUser()))
    }, [query])

    function handleClearInput() {
        setQuery('')
    }

    function handleChangeInput(e) {
        setQuery(e.target.value)
    }

    return (
        <Hidden xsDown>
            <WhiteTooltip arrow
                          interactive
                          TransitionComponent={Fade}
                          open={hasResults}
                          title={hasResults && (
                              <Grid className={s.resultContainer} container>
                                  {results.map(result => (
                                      <Grid key={result.id} item
                                            className={s.resultLink}
                                            onClick={() => {
                                                history.push(`/${result.username}`)
                                                handleClearInput();
                                            }}>
                                          <div className={s.resultWrapper}>
                                              <div className={s.avatarWrapper}>
                                                  <Avatar src={result.profile_image} alt={'user avatar'}/>
                                              </div>
                                              <div className={s.nameWrapper}>
                                                  <Typography variant={'body1'}>
                                                      {result.username}
                                                  </Typography>
                                                  <Typography variant={'body2'}>
                                                      {result.name}
                                                  </Typography>
                                              </div>
                                          </div>
                                      </Grid>
                                  ))}
                              </Grid>
                          )}>
                <InputBase className={s.input}
                           onChange={e => handleChangeInput(e)}
                           startAdornment={<span className={s.searchIcon}/>}
                           endAdornment={
                               loading ? (
                                   <LoadingIcon/>
                               ) : (
                                   <span className={s.clearIcon} onClick={handleClearInput}/>
                               )
                           } placeholder={'Search'}
                           value={query}/>
            </WhiteTooltip>
        </Hidden>
    )
}

function Links({path}) {
    const [showList, setShowList] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const s = useNavbarStyles();

    useEffect(() => {
        const timeout = setTimeout(handleHideTooltip, 5000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    function handleHideList() {
        setShowList(false)
    }

    function handleHideTooltip() {
        setShowTooltip(false)
    }

    return (
        <div className={s.linksContainer}>
            {showList && <NotificationList handleHideList={handleHideList}/>}
            <div className={s.linksWrapper}>
                <Hidden xsDown>
                    <AddIcon/>
                </Hidden>
                <Link to={`/`}>
                    {path === '/' ? <HomeActiveIcon/> : <HomeIcon/>}
                </Link>
                <Link to={`/explore`}>
                    {path === '/explore' ? <ExploreActiveIcon/> : <ExploreIcon/>}
                </Link>
                <RedTooltip arrow open={showTooltip}
                            onOpen={handleHideTooltip}
                            TransitionComponent={Zoom}
                            title={<NotificationTooltip/>}>
                    <div className={s.notifications} onClick={() => setShowList(!showList)}>
                        {showList ? <LikeActiveIcon/> : <LikeIcon/>}
                    </div>
                </RedTooltip>
                <Link to={`/${defaultCurrentUser.username}`}>
                    <div className={path === `/${defaultCurrentUser.username}` ? s.profileActive : ''}/>
                    <Avatar src={defaultCurrentUser.profile_image} className={s.profileImage}/>
                </Link>
            </div>
        </div>
    )
}

function Progress({isAnimating}) {
    const s = useNavbarStyles();
    const {animationDuration, isFinished, progress} = useNProgress({isAnimating})
    return (
        <div className={s.progressContainer} style={{
            opacity: isFinished ? 0 : 1,
            transition: `opacity ${animationDuration}ms linear`
        }}>
            <div className={s.progressBar} style={{
                marginLeft: `${(-1 + progress) * 100}%`,
                transition: `margin-left ${animationDuration}ms linear`
            }}>
                <div className={s.progressBackground}/>
            </div>
        </div>
    )
}

export default Navbar;
