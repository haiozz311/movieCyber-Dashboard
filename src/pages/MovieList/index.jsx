import {
  Box,
  Button,
  Grid,
  Typography,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import React, { Fragment, memo, useCallback, useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import MovieItem from "../../components/MovieItem";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../redux/action";
import { SHOW_MODALMOVIE } from "../../redux/action/type";
import ModalMovie from "../../components/Modal";
import { fetchMovie } from "../../redux/action/movieAction";
import { Pagination } from "@material-ui/lab";
import TheatersIcon from "@material-ui/icons/Theaters";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Loading from "../../Loading";
import ModalUserDetail from "../../components/ModelUserDetail"

const MovieList = (props) => {
  const perToPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  //Dispatch
  const dispatch = useDispatch();


  //USESELECTOR
  const listMovie = useSelector((state) => {
    return state.movie.movieList;
  });
  const totalCount = useSelector((state) => {
    return state.movie.totalCount;
  });
  const totalPages = useSelector((state) => {
    return state.movie.totalPages;
  });
  const modalActive = useSelector((state) => {
    return state.modalMovies.modalMovie;
  });
  const loading = useSelector((state) => {
    return state.movie.loading
  });
  const modalUserDetail = useSelector((state) => {
    return state.user.modalUserDetail;
  });
  const activeArrow = useSelector((state) => {
    return state.active.active.arrow;
  });

  useEffect(() => {
    dispatch(fetchMovie(currentPage, perToPage));
  }, [currentPage]);
  //ShowModal
  const handleOpen = useCallback(() => {
    dispatch(createAction(SHOW_MODALMOVIE, {
      movies: {
        biDanh: "",
        maPhim: "",
        hinhAnh: "",
        maNhom: "GP01",
        danhGia: "",
        moTa: "",
        ngayKhoiChieu: "",
        tenPhim: "",
        trailer: ""
      }, role: 1
    }));
  }, []);


  //rendermovie
  const renderMovie = useCallback(() => {
    return listMovie.map((item, index) => {

      return (
        <Grid item md={3} sm={6} xs={12} key={index}>
          <MovieItem item={item} />
        </Grid>
      );
    });
  }, [listMovie]);




  return (
    <Fragment>
      {loading ? <Loading /> : <div>
        <Box display={"flex"}>
          {/* SIDEBAR */}
          <Box className={!activeArrow ? props.classes.left : props.classes.left2} >
            <SideBar />
          </Box>
          <Box className={!activeArrow ? props.classes.right : props.classes.right2}>
            {/* =====NAVBAR===== */}
            <NavBar />

            {/* =====TOPCONTENT===== */}
            <Box className={props.classes.content}>
              <Box component="h3" variant="h5" paddingBottom={"20px"}>
                Danh Sách Phim
            </Box>

              <Grid container spacing={2} py={5}>
                <Grid
                  item
                  sm={6}
                  md={4}
                  xs={12}
                  className={props.classes.contentItem}
                >
                  <Box className={props.classes.item}>
                    <Box className={props.classes.itemIcon}>
                      <TheatersIcon />
                    </Box>
                    <Box paddingLeft={"20px"}>
                      <Typography variant="h6" component="h5">
                        {listMovie.length}
                      </Typography>
                      <Typography>Phim / Trang</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={6}
                  md={4}
                  xs={12}
                  className={props.classes.contentItem}
                >
                  <Box className={props.classes.item}>
                    <Box className={props.classes.itemIcon}>
                      <ContactSupportIcon />
                    </Box>
                    <Box paddingLeft={"20px"}>
                      <Typography variant="h6" component="h5">
                        30
                    </Typography>
                      <Typography>Thể loại</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={6}
                  md={4}
                  xs={12}
                  className={props.classes.contentItem}
                >
                  <Box className={props.classes.item}>
                    <Box className={props.classes.itemIcon}>
                      <EqualizerIcon />
                    </Box>
                    <Box paddingLeft={"20px"}>
                      <Typography variant="h6" component="h5">
                        {totalCount}
                      </Typography>
                      <Typography>Tổng số lượng phim</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {/* =====MOVIEITEM===== */}

              <Box className={props.classes.movieItem}>
                <Box className={props.classes.topItem}>
                  <Typography component="h5" variant="h5">
                    Phim
                </Typography>
                  <Button className={props.classes.btnItem} onClick={handleOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <AddIcon />
                    <p className={props.classes.btnItemText}>Thêm Mới</p>
                  </Button>
                </Box>

                {/* TABLE */}

                <Box>
                  <Box className={props.classes.table}>
                    <Grid container spacing={2}>
                      {renderMovie()}
                    </Grid>
                  </Box>
                  <Box className={props.classes.pagination}>
                    <Pagination count={totalPages} page={currentPage} variant="outlined" color="secondary" onChange={handleChange} />
                  </Box>
                </Box>

                {/* MODAL */}
                {modalActive && <ModalMovie currentPage={currentPage} perToPage={perToPage} />}

                {modalUserDetail && <ModalUserDetail />}

              </Box>
            </Box>
          </Box>
        </Box>
      </div>}
    </Fragment>
  );
};

export default memo(withStyles(styles, { withTheme: true })(MovieList));
