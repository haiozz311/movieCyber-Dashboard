import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Switch, TextField, withStyles } from '@material-ui/core';
import React, { Fragment, memo, useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./style"
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
import { createAction } from '../../redux/action';
import { HIDE_MODALMOVIE,SET_CHANGED,SET_CHECKED } from '../../redux/action/type';
import Backdrop from "@material-ui/core/Backdrop";
import EditIcon from "@material-ui/icons/Edit";
import { editMovie, addMovie, editMovieNoneImg, fetchMovie } from "../../redux/action/movieAction";
import swal from 'sweetalert';


const ModalMovie = (props) => {
  const dispatch = useDispatch();
  const modalMovie = useSelector((state) => {
    return state.modalMovies.modalMovie;
  });
  const role = useSelector((state) => {
    return state.modalMovies.role;
  });
  const moviea = useSelector((state) => {
    return state.modalMovies.movie;
  });
  const currentPage = useSelector((state) => {
    return state.movie.currentPage;
  });
  const perToPage = useSelector((state) => {
    return state.movie.perToPage;
  });
  const checked = useSelector((state) => {
    return state.modalMovies.checked;
  });
  
  const [state, setState] = useState({
    movies: {
      biDanh: '',
      maPhim: '',
      hinhAnh: "",
      maNhom: "GP01",
      danhGia: '',
      moTa: '',
      ngayKhoiChieu: '',
      tenPhim: '',
      trailer: '',
    },
  });
  useEffect(() => { setState({ movies: moviea }) }, []);
  const handleClose = useCallback(() => {
    dispatch(createAction(HIDE_MODALMOVIE));
  }, []);

  const handleChangeChecked = (event) => {
    dispatch(createAction(SET_CHECKED,{}));
  };
  const changeDateFormater = useCallback((dae) => {
    //dd-MM-yyyy
    let date = new Date(dae);
    let nkc = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
    return nkc;
  }, []);
  const changeDateFormater2 = useCallback((dae) => {
    //yyyy-MM-dd
    let date = new Date(dae);
    let nkc = `${date.getFullYear()}-${(date.getMonth() +1) < 10 ? '0' + (date.getMonth() +1) : (date.getMonth () +1)}-${(date.getDate() ) < 10 ? '0' + (date.getDate() ) : (date.getDate() )}`;
    return nkc;
  }, []);

  const handelOnchange = useCallback(
    (e) => {
      console.log(e.target.name,e.target.value);
      if (e.target.name === 'hinhAnh') {
        setState({
          movies: { ...state.movies, hinhAnh: e.target.files[0] }
        })
      } else if (e.target.name === 'tenPhim') {
        setState({
          movies: { ...state.movies, [e.target.name]: e.target.value, biDanh: e.target.value }
        })
      } else if (e.target.name === 'danhGia') {
        setState({
          movies: { ...state.movies, [e.target.name]: parseInt(e.target.value) },
        });
      } else {
        setState({
          movies: { ...state.movies, [e.target.name]: e.target.value },
        });
      }

    },
    [state.movies]
  );

  const { biDanh,
    maPhim,
    hinhAnh,
    maNhom,
    danhGia,
    moTa,
    ngayKhoiChieu,
    tenPhim,
    trailer, } = useMemo(() => {
      return state.movies
    }, [state.movies]);
  
  const handelSubmit = useCallback((currentPage, perToPage) =>
    (e) => {
      e.preventDefault();
      var form_data = new FormData();
      for (var key in state.movies) {
        if(key === 'danhGia'){
          if(state.movies[key] > 10 || state.movies[key] < 0){
            return swal({
              title: "Kiểm tra lại",
              text: `Đánh giá từ 0 - 10`,
              icon: "error",
            })
          }else{
            form_data.append(key, state.movies[key]); 
          }
        }else if(key === 'ngayKhoiChieu'){
          console.log(changeDateFormater(state.movies[key]));
          form_data.append(key, changeDateFormater(state.movies[key]));
        }else{
          form_data.append(key, state.movies[key]);
        }
        
      }
      if (moviea.hinhAnh === state.movies.hinhAnh) {
        let item = { ...state.movies, ngayKhoiChieu: changeDateFormater(state.movies.ngayKhoiChieu) };
        role === 1 ?
          dispatch(addMovie(form_data, () => {
            dispatch(fetchMovie(currentPage, perToPage));
          })) :
          (moviea.tenPhim === state.movies.tenPhim ? dispatch(editMovieNoneImg(item)) :  swal({
            title: "Kiểm tra lại",
            text: `Thay đổi cả tên và hình`,
            icon: "error",
          }));
      } else if(moviea.tenPhim !== state.movies.tenPhim){
        
        role === 1 ?
          dispatch(addMovie(form_data, () => {
            dispatch(fetchMovie(currentPage, perToPage));
          })) :
            dispatch(editMovie(form_data));
      }
      else {
        role === 1 ?
          dispatch(addMovie(form_data, () => {
            dispatch(fetchMovie(currentPage, perToPage));
          })) :
          swal({
            title: "Kiểm tra lại",
            text: `Thay đổi cả tên và hình`,
            icon: "error",
          })
      }
      console.log(form_data)

      dispatch(createAction(HIDE_MODALMOVIE));
      
    },
    [state.movies]
  );


  const bodyModal = (<Box >
    <div className={props.classes.paper}>

      {role === 1 ? <h2 id="transition-modal-themmoi">Thêm Mới</h2> : 
      <div className={props.classes.editTitle}>
        {checked ? <h2 id="transition-modal-themmoi">Chỉnh sửa thông tin</h2> : <h2 id="transition-modal-themmoi">Chỉnh sửa cả hình và tên</h2>}
        <Switch
        className={props.classes.editTitleSwitch}
        onClick={handleChangeChecked}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      }

      <Box component="form">
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item md={6} style={{ display: role === 1 ? 'none' : 'block' }}>
              <TextField

                label="Mã Phim"
                variant="outlined"
                className={props.classes.modalAdd}
                name="maPhim"
                type="number"
                disabled={role === 2 && true}
                onChange={handelOnchange}
                value={maPhim}
              />
            </Grid>

            <Grid item md={6}>
              <TextField

                label="Tên Phim"
                variant="outlined"
                className={props.classes.modalAdd}
                name="tenPhim"
                disabled={role === 2 && checked}
                onChange={handelOnchange}
                value={tenPhim}
              />
            </Grid>
            <Grid item md={6} style={{ display: role === 1 ? 'none' : 'block' }} >
              <TextField

                label="Bí Danh"
                variant="outlined"
                className={props.classes.modalAdd}
                name="biDanh"
                disabled={role === 2 && true}
                value={biDanh}
              />
            </Grid>

            <Grid item md={6}>
              <TextField

                label="Trailer"
                variant="outlined"
                className={props.classes.modalAdd}
                name="trailer"
                onChange={handelOnchange}
                value={trailer}
              />
            </Grid>
            <Grid item md={6}>
              <TextField

                label="Hình Ảnh"
                variant="outlined"
                className={props.classes.modalAddImg}
                name="hinhAnh"
                onChange={handelOnchange}
                disabled={role === 2 && checked}
                files={hinhAnh}
                type="file"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={6}>

              <FormControl variant="outlined" className={props.classes.modalAdd}>
                <InputLabel id="demo-simple-select-outlined-label">Mã nhóm</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={"GP01"}
                  onChange={handelOnchange}
                  label="Mã Nhóm"
                  name="maNhom"
                >
                  <MenuItem value={"GP01"}>
                    <em>GP01</em>
                  </MenuItem>
                  
                </Select>
              </FormControl>


            </Grid>
            <Grid item md={6} >
              <TextField

                label="Đánh Giá"
                variant="outlined"
                className={props.classes.modalAdd}
                type="number"
                name="danhGia"
                onChange={handelOnchange}
                value={danhGia}
                
              />
            </Grid>

            <Grid item md={6}>
              <TextField

                label="Ngày Khởi Chiếu "
                variant="outlined"
                type= 'date'
                className={props.classes.modalAdd}
                name="ngayKhoiChieu"
                onChange={handelOnchange}
                value={changeDateFormater2(ngayKhoiChieu)}
                 InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>


            <Grid item md={12}>
              <TextField

                label="Mô Tả"
                variant="outlined"
                className={props.classes.modalAdd}
                name="moTa"
                onChange={handelOnchange}
                value={moTa}
              />
            </Grid>

            <Grid item md={12}>
            {role === 1 ? <Button
                className={props.classes.btnItemModal}
                onClick={handelSubmit(currentPage, perToPage)}
              // onClick={handleClose}
              >
                <AddIcon />
                Thêm Mới
              </Button> : <Button
                  className={props.classes.btnItemModalEdit}
                  onClick={handelSubmit(currentPage, perToPage)}
                // onClick={handleClose}
                >
                  <EditIcon />
                Chỉnh Sửa
              </Button>}
              <Button
                className={props.classes.btnItemModalClose}
                type="button"
                onClick={handleClose}
              >
                <CancelIcon />
                Hủy
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  </Box>);

  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-themmoi"
        aria-describedby="transition-modal-description"
        className={props.classes.modal}
        open={modalMovie}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {bodyModal}
      </Modal>

    </div>
  );
};

export default memo(withStyles(styles, { withTheme: true })(ModalMovie));