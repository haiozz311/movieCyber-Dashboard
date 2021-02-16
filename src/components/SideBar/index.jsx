import { Box, Typography, withStyles, withTheme } from "@material-ui/core";
import styles from "./style";
import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../asset/images/LogoDark.svg";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import TheatersIcon from "@material-ui/icons/Theaters";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../redux/action";
import {
  SET_ACTIVE_CALENDAR,
  SET_ACTIVE_HOME,
  SET_ACTIVE_MOVIE,
  SET_ACTIVE_USER,
} from "../../redux/action/type";

const SideBar = (props) => {
  const dispatch = useDispatch();
  const activeHome = useSelector((state) => {
    return state.active.active.home;
  });
  const activeMovie = useSelector((state) => {
    return state.active.active.movie;
  });
  const activeUser = useSelector((state) => {
    return state.active.active.user;
  });
  const activeCalendar = useSelector((state) => {
    return state.active.active.calendar;
  });
  const activeArrow = useSelector((state)=>{
    return state.active.active.arrow;
  });
  
  const handelActiveHome = useCallback(() => {
    dispatch(createAction(SET_ACTIVE_HOME, true));
  }, [activeHome, dispatch]);
  const handelActiveMovie = useCallback(() => {
    dispatch(createAction(SET_ACTIVE_MOVIE, true));
  }, [activeMovie, dispatch]);

  const handelActiveUser = useCallback(() => {
    dispatch(createAction(SET_ACTIVE_USER, true));
  }, [activeUser, dispatch]);
  const handelActiveCalendar = useCallback(() => {
    dispatch(createAction(SET_ACTIVE_CALENDAR, true));
  }, [activeCalendar, dispatch]);
  return (
    <div className={ !activeArrow ? props.classes.backGround :  props.classes.backGround2 }>
      <Box>
        <Box className={props.classes.border}>
          <NavLink
            className={!activeArrow ? props.classes.logo : props.classes.logo2}
            to="/"
            onClick={handelActiveHome}
          >
            <img src={logo} alt="logo1" width={"40px"} height={"40px"}/>
          </NavLink>
        </Box>
        <NavLink
          className={`
          ${!activeArrow ? (!activeMovie ? props.classes.aDecoration : props.classes.active) : (!activeMovie ? props.classes.aDecoration2 : props.classes.active2) }
          `}
          to="/phim"
          onClick={handelActiveMovie}
        >
          <TheatersIcon className={props.classes.icon} />
          <span>Danh Sách Phim</span>   
        </NavLink>
        <NavLink
          className={`
             
              ${!activeArrow ? (!activeUser ? props.classes.aDecoration : props.classes.active) : (!activeUser ? props.classes.aDecoration2 : props.classes.active2) }
          `}
          to="/nguoidung"
          onClick={handelActiveUser}
        >
          <PersonIcon className={props.classes.icon} /> <span>Người dùng</span>   
        </NavLink>
        <NavLink
          className={`
          ${!activeArrow ? (!activeCalendar ? props.classes.aDecoration : props.classes.active) : (!activeCalendar ? props.classes.aDecoration2 : props.classes.active2) }
          `}
          to="/lichchieu"
          onClick={handelActiveCalendar}
        >
          <DateRangeIcon className={props.classes.icon} /> <span>Lịch Chiếu</span> 
        </NavLink>
      </Box>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SideBar);
