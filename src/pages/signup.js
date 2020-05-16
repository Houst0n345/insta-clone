import React from "react";
import {useSignUpPageStyles} from "../styles";
import SEO from "../components/shared/Seo";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {LoginWithFacebook} from "./login";

function SignUpPage() {
    const s = useSignUpPageStyles();

    return (
        <>
            <SEO title={'Sign up'}/>
            <section className={s.section}>
                <article>
                    <Card className={s.card}>
                        <div className={s.cardHeader}/>
                        <Typography className={s.cardHeaderSubHeader}>
                            Sign up to see photos and videos from your friends.
                        </Typography>
                        <LoginWithFacebook color={'primary'} iconColor={'white'} variant={'contained'}/>
                        <div className={s.orContainer}>
                            <div className={s.orLine}/>
                            <div>
                                <Typography variant={'body2'} color={'textSecondary'}>
                                    OR
                                </Typography>
                            </div>
                            <div className={s.orLine}/>
                        </div>
                        <form>
                            <TextField fullWidth
                                       variant={'filled'}
                                       label={'Email'}
                                       margin={'dense'}
                                       type={'email'}
                                       className={s.textField}
                            />
                            <TextField fullWidth
                                       variant={'filled'}
                                       label={'Full Name'}
                                       margin={'dense'}
                                       className={s.textField}
                            />
                            <TextField fullWidth
                                       variant={'filled'}
                                       label={'Username'}
                                       margin={'dense'}
                                       className={s.textField}
                                       autoComplite={'username'}
                            />
                            <TextField fullWidth
                                       variant={'filled'}
                                       label={'Password'}
                                       type={'password'}
                                       margin={'dense'}
                                       className={s.textField}
                                       autoComplite={'new-password'}
                            />
                            <Button variant={'contained'}
                                    fullWidth
                                    color={'primary'}
                                    className={s.button}
                                    type={'submit'}>
                                Sign Up
                            </Button>
                        </form>
                    </Card>
                    <Card className={s.loginCard}>
                        <Typography align={'right'} variant={'body2'}>
                            Have an account
                        </Typography>
                        <Link to={'/accounts/login'}>
                            <Button color={'primary'} className={s.loginButton}>
                                Log in
                            </Button>
                        </Link>
                    </Card>
                </article>
            </section>
        </>
    )
}

export default SignUpPage;
