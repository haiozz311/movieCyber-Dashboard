import { Box, Grid, withStyles, Typography, Button } from "@material-ui/core";
import styles from "./style";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import MovieList from "../MovieList";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import TheatersIcon from "@material-ui/icons/Theaters";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { DataGrid } from "@material-ui/data-grid";
import AddIcon from "@material-ui/icons/Add";
import { fetchMovie } from "../../redux/action/movieAction";
import { fetchUser } from "../../redux/action/userAction";
import dashBoard from "../../asset/images/dashBoard.svg"
import dashBoard2 from "../../asset/images/dashBoard2.svg"
import dashBoard3 from "../../asset/images/dashBoard3.svg"
import ModalUserDetail from "../../components/ModelUserDetail"

const Home = (props) => {
  const dispatch = useDispatch();
  const perToPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = useSelector((state) => {
    return state.movie.totalCount;
  });
  const totalCountUser = useSelector((state) => {
    return state.user.totalCount;
  });
  const modalUserDetail = useSelector((state)=>{
    return state.user.modalUserDetail;
  });
  const activeArrow = useSelector((state)=>{
    return state.active.active.arrow;
  });
  useEffect(() => {
    dispatch(fetchMovie(currentPage,perToPage));
    dispatch(fetchUser(currentPage,perToPage));
  }, [dispatch,currentPage]);
 

  return (
    <div>
      <Box display={"flex"}>
        <Box className={ !activeArrow ? props.classes.left : props.classes.left2} >
          <SideBar />
        </Box>
        <Box className={!activeArrow ? props.classes.right : props.classes.right2}>
          {/* =====NAVBAR===== */}
          <NavBar />

          {/* =====TOPCONTENT===== */}
          <Box className={props.classes.content}>
            <Box component="h3" variant="h5" paddingBottom={"20px"}>
              Trang Chủ
            </Box>
            <Grid container spacing={2} py={5}>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <TheatersIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {totalCount}
                    </Typography>
                    <Typography>Số lượng phim</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <PersonIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {totalCountUser}
                    </Typography>
                    <Typography>Số lượng người dùng</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <EqualizerIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      2
                    </Typography>
                    <Typography>Số lượng hệ thống</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* =====HOMEITEM===== */}

            <Box height={500} className={props.classes.homeItem}>
              <Box className={props.classes.topItem}>
                <Typography component="h5" variant="h5">
                  Thống kê
                </Typography>
                
              </Box>

              {/* TABLE */}
              <Box className={props.classes.table}>
                <img src={dashBoard} alt="" width={"100%"} height={"300px"}/>
              </Box>

              
            
            </Box>

            <Grid container spacing={2} py={5}>
              <Grid
                item
                sm={6}
                md={8}
                xs={12}
                className={props.classes.contentItem}
              >
                <img src={dashBoard2} alt="" width={"100%"}/>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <img src={dashBoard3} alt="" width={"100%"}/>
              </Grid>
              
            </Grid>
            
          </Box>
        </Box>
        { modalUserDetail && <ModalUserDetail/>}
      </Box>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Home);
