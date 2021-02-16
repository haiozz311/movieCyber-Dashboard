import {
  Box,
  Button,
  Menu,
  MenuItem,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React, { useCallback, useState } from "react";
import login from "../../asset/images/user.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailUser } from "../../redux/action/userAction";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { createAction } from "../../redux/action";
import { HIDE_ACTIVE_ARROW, SET_ACTIVE_ARROW } from "../../redux/action/type";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const credentials = useSelector((state) => {
    return state.credentials.credentialsA;
  });
  const activeArrow = useSelector((state)=>{
    return state.active.active.arrow;
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handelOpenArrow = useCallback(()=>{
    dispatch(createAction(SET_ACTIVE_ARROW,{}))
  },[])
  const handelCloseArrow = useCallback(()=>{
    dispatch(createAction(HIDE_ACTIVE_ARROW,{}))
  },[])

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[]);
  const handleDetail = useCallback(() => {
    dispatch(detailUser(credentials.taiKhoan));
  },[credentials]);
  const handelLogout = useCallback(()=>{
    localStorage.setItem("t", null); //Lưu token trên local đề F5 không mất
        localStorage.setItem("o", null);
  },[])

  
  // const object = localStorage.getItem("o");

  return (
    <Box className={props.classes.backGround}>
      <Box className={props.classes.arrowTop}>
        { activeArrow ? <Button onClick={handelCloseArrow} className={props.classes.arrowIcon}><ArrowForwardIosIcon/></Button>  : <Button onClick={handelOpenArrow} className={props.classes.arrowIcon}><ArrowBackIosIcon/></Button>}
      </Box>
      <Box className={props.classes.login}>
        <Box paddingTop={"8px"}>{credentials.hoTen}</Box>

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ArrowDropDownIcon className={props.classes.arrow} />
          <img src={login} alt="1" className={props.classes.loginImg} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={props.classes.loginMenu}
        >
          <MenuItem onClick={handleDetail}>Thông tin cá nhân</MenuItem>
          <MenuItem onClick={handelLogout}> <Link to="/dangnhap">Đăng xuất</Link> </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default withStyles(styles, { withTheme: true })(NavBar);
