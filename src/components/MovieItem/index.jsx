import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  Modal,
  Typography,
  withStyles,
  withTheme,
  Paper
} from "@material-ui/core";
import styles from "./style";
import React, { useMemo, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Backdrop from "@material-ui/core/Backdrop";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { SHOW_MODALMOVIE } from "../../redux/action/type";
import { createAction } from "../../redux/action";
import { deleteMovie, detailMovie, fetchMovie } from "../../redux/action/movieAction";
import swal from "sweetalert";
import { fetchShowTime } from "../../redux/action/showTimeAction";
import InfoIcon from '@material-ui/icons/Info';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CloseIcon from '@material-ui/icons/Close';

const MovieItem = (props) => {
  const {
    biDanh,
    danhGia,
    hinhAnh,
    maNhom,
    maPhim,
    moTa,
    ngayKhoiChieu,
    tenPhim,
    trailer,
  } = useMemo(() => {
    return props.item
  }, [props.item]);
  const date = new Date(ngayKhoiChieu);
  const [open, setOpen] = useState(false);
  const [openTrailer, setOpenTrailer] = useState(false);
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => {
    return state.movie.currentPage;
  });
  const perToPage = useSelector((state) => {
    return state.movie.perToPage;
  });

  const handleToggle = useCallback((value) => () => {
    setOpen(value);
    dispatch(detailMovie(maPhim))
  }, [maPhim]);

  const handleToggleTrailer = useCallback((value) => () => {
    setOpenTrailer(value);
  }, [props.item]);

  const getDetail = useCallback((maPhim)=>() => {
    dispatch(fetchShowTime(maPhim));
  }, []);

  const handelEdit = useCallback((value) => () => {
    dispatch(createAction(SHOW_MODALMOVIE, {
      movies: value,
      role: 2
    }))

  }, [props.item]);

  const handelDelete = useCallback((maPhim,currentPage,perToPage) => () => {
    swal({
      title: "Bạn chắc chứ?",
      text: "Bạn có muốn xóa phim này không!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteMovie(maPhim, () => {
            swal("Phim đã được xóa !", {
              icon: "success",
            });
            dispatch(fetchMovie(currentPage, perToPage));
          }, () => {
            swal("Lỗi !!", {
              icon: "info",
            });
          }));
        } else {
          swal("Bạn thật sáng suốt!");
        }
      });



  }, [props.item])


  return (
    <Paper>
      <Card className={props.classes.root}>
        <CardActionArea className={props.classes.cardHover}>
          <CardMedia
            component="img"
            alt={hinhAnh}
            height="240px"
            image={hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent style={{ height: 30 }}>
            <Box>
              <Typography variant="h6" component="h6" >
                {/* Cắt bớt chữ */}
                {tenPhim.substr(0, 14)}
              </Typography>
            </Box>

          </CardContent>
          <Box className={props.classes.cardAbove} >
            <Box >
              <Button onClick={handleToggleTrailer(true)}>
                <PlayArrowIcon className={props.classes.cardAboveIcons} />
              </Button>
            </Box>
          </Box>
        </CardActionArea>
        <CardActions style={{ textAlign: "center", display: "block" }}>
          <Button className={props.classes.btnIconInfo}  onClick={handleToggle(true)}>
            <InfoIcon />
          </Button>
          <Button className={props.classes.btnIconEdit}  onClick={handelEdit(props.item)}>
            <EditIcon />
          </Button>
          <Button className={props.classes.btnIconDelete}  onClick={handelDelete(maPhim,currentPage, perToPage)}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>

      {/* MODAL */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={props.classes.modal}
        open={open}
        onClose={handleToggle(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={props.classes.paper}>
            <Box justifyContent={"space-between"} display={"flex"}>
            <h2 id="transition-modal-title">{tenPhim}</h2>
            <Button onClick={handleToggle(false)}><CloseIcon /></Button>
            </Box>
            
            <Grid container>
              <Grid item xs={12} md={4}>
                <img
                  src={hinhAnh}
                  alt={hinhAnh}
                  style={{ height: "400px", width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={8} className={props.classes.paperRigth}>
                <span><p className={props.classes.name}>Mã Nhóm : </p> {maNhom}</span> <br />
                <span><p className={props.classes.name}>Mã Phim : </p> {maPhim}</span> <br />
                <span><p className={props.classes.name}>Bí Danh : </p> {biDanh}</span> <br />
                <span><p className={props.classes.name}>Ngày Khởi Chiếu : </p> {`${(date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()) + "/" + (date.getMonth() >= 10 ? (date.getMonth() +1): "0" + (date.getMonth() + 1)) + "/" + date.getFullYear() + " " + (date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()) + ":" + (date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes())}`}</span> <br />
                <span><p className={props.classes.name}>Mô Tả : </p> {moTa.substr(0, 150)}</span> <br />
                <span><p className={props.classes.name}>Đánh Giá : </p> {danhGia}</span> <br />
                <br /><br />
                <Link to="/lichchieu" style={{ textDecoration: "none" }}> <Button className={props.classes.btn} onClick={getDetail(maPhim)}> Xem lịch chiếu</Button></Link>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
      {/* MODAL TRAILER */}
      <Modal
        aria-labelledby="transition-modal-trailer"
        aria-describedby="transition-modal-trailer-description"
        className={props.classes.modal}
        open={openTrailer}
        onClose={handleToggleTrailer(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openTrailer}>
          <div className={props.classes.paperTrailer}>
            <Box justifyContent={"space-between"} display={"flex"}>
              <h2>{tenPhim}</h2>
              <Button onClick={handleToggleTrailer(false)}><CloseIcon /></Button>
            </Box>
            <Grid container>
              <Grid item xs={12} >
                <iframe width="560" height="315" src={trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Grid>

            </Grid>
          </div>
        </Fade>
      </Modal>
    </Paper>
  );
};

export default withStyles(styles, { withTheme: true })(MovieItem);
