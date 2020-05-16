import React from "react";
import {useLoginPageStyles} from "../styles";
import SEO from "../components/shared/Seo";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import FacebookIconBlue from '../images/facebook-icon-blue.svg';
import FacebookIconWhite from '../images/facebook-icon-white.png';


function LoginPage() {
    const s = useLoginPageStyles();
    return (
        <>
            <SEO title={'Login'}/>
            <section className={s.section}>
                <article>
                    <Card className={s.card}>
                        <CardHeader className={s.cardHeader}/>
                        <form>
                            <TextField fullWidth variant={'filled'}
                                       label={'Username'} margin={'dense'}
                                       className={s.textField} autoComplete={'username'}/>
                            <TextField fullWidth variant={'filled'} type={'password'}
                                       label={'Password'} margin={'dense'}
                                       className={s.textField} autoComplete={'current-password'}/>
                            <Button variant={'contained'} fullWidth
                                    color={'primary'} className={s.button}
                                    type={'submit'}>
                                Log In
                            </Button>
                        </form>
                        <div className={s.orContainer}>
                            <div className={s.orLine}/>
                            <div>
                                <Typography variant={'body2'} color={'textSecondary'}>
                                    OR
                                </Typography>
                            </div>
                            <div className={s.orLine}/>
                        </div>
                        <LoginWithFacebook color={'secondary'} iconColor={'blue'}/>
                        <Button fullWidth color={'secondary'}>
                            <Typography variant={'caption'}>
                                Forgot password?
                            </Typography>
                        </Button>
                    </Card>
                    <Card className={s.signUpCard}>
                        <Typography align={'right'} variant={'body2'}>
                            Don't have an account
                        </Typography>
                        <Link to={'/accounts/emailsignup'}>
                            <Button color={'primary'} className={s.button}>
                                Sign up
                            </Button>
                        </Link>
                    </Card>
                </article>
            </section>
        </>
    )
}

export const LoginWithFacebook = ({color, iconColor, variant}) => {
    const s = useLoginPageStyles();
    const facebookIcon = iconColor === 'blue' ? FacebookIconBlue : FacebookIconWhite;
    return (
        <Button fullWidth color={color} variant={variant}>
            <img src={facebookIcon} alt="Facebook icon" className={s.facebookIcon}/>
            Login with Facebook
        </Button>
    )
}

export default LoginPage;
