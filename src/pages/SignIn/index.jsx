import {
  Avatar,
  Box,
  Button,
  Fab,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  useTheme,
  withStyles,
  Zoom,
} from "@material-ui/core";
import styles from "./style";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { signIn } from "../../redux/action/auth";
import { useDispatch } from "react-redux";
import signInBanner from '../../asset/images/signInBanner.svg';
import topRightDop from '../../asset/images/topRightDop.svg';
import logoLight from '../../asset/images/LogoLight.svg';
import logoDark from '../../asset/images/LogoDark.svg';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import bottomDop from '../../asset/images/bottomDop2.svg';

const SignIn = (props) => {
  const dispatch = useDispatch();
  
  const history = useHistory();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({
    credentials: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  const handleChange = useCallback((e) => {
    setState(
      {
        credentials: {
          ...state.credentials,
          [e.target.name]: e.target.value,
        },
      },
      [state]
    );
  });
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        signIn(state.credentials, () => {
          props.history.replace("/");
        })
      );
    },
    [state, dispatch]
  );
  const handleClickShowPassword = useCallback((value) => () => {
    setShowPassword(!value);
}, []);
const handleMouseDownPassword = useCallback((e) => {
    e.preventDefault();
}, []);

  const transitionDuration = useMemo(() => {
    return {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }
});

  return (
    <Fragment>
            <div
                className={props.classes.root}>
                <div className={props.classes.groupBg}>
                    <img src={signInBanner} alt="signInBanner" className={props.classes.bgMain} />
                    <img src={topRightDop} alt="topRightDop" className={props.classes.TopRightDop} />

                    <img src={bottomDop} alt="bottomDop" className={props.classes.bottomLeftDop} />
                </div>
                <div className={props.classes.wrapper}>
                    <div className={props.classes.content}>
                        <Button className={`${props.classes.textDefault} ${props.classes.groupLogo}  `}
                           
                        >

                            <div className={props.classes.logoG}>
                                <img src={logoDark} alt="logoLight" className={props.classes.logoLight} />
                                <div className={props.classes.nameLogo}> Kix Admin</div>
                            </div>

                            
                        </Button>
                        <form className={props.classes.formStyle} onSubmit={handleSubmit}>
                            <div className={`${props.classes.textDefault} ${props.classes.formGroup} ${props.classes.titleForm}`}>
                                Đăng nhập quản trị</div>
                            <div className={props.classes.formGroup}>
                                <TextField label="tài khoản :" className={`${props.classes.textDefault} ${props.classes.formControl}`}
                                    value={state.credentials.taiKhoan}
                                    onChange={handleChange}
                                    name="taiKhoan"
                                />
                            </div>

                            <div className={props.classes.formGroup}>
                                <FormControl className={` ${props.classes.formControl}`}>
                                    <InputLabel >Mật Khẩu:</InputLabel>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword(showPassword)}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        value={state.credentials.matKhau}
                                        onChange={handleChange}
                                        name="matKhau"
                                    />
                                </FormControl>
                            </div>
                            
                            <Box mt={5} className={`${props.classes.formGroup} ${props.classes.groupBtnSubmit}`}>
                                <Button type="submit" className={`${props.classes.textDefault} ${props.classes.BtnSubmit}`}>Đăng nhập
                                </Button>
                            </Box>
                        </form>
                    </div>
                </div>
            </div>
            <div className={props.classes.divTool}>
                <Zoom
                    in={true}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${transitionDuration.exit}ms`,
                    }}
                    unmountOnExit
                >
                    <Fab aria-label='Home' color='primary' >
                        <Avatar src={logoLight} alt='LogoLight' />
                    </Fab>
                </Zoom>
            </div>
        </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(SignIn);
