import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, withStyles } from '@material-ui/core';
import React, { memo, useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./style"
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
import { createAction } from '../../redux/action';
import { ADD_MOVIE, HIDE_MODALMOVIE, HIDE_MODALUSER, SET_MODALACTIVE, SHOW_MODALMOVIE } from '../../redux/action/type';

import Backdrop from "@material-ui/core/Backdrop";
import EditIcon from "@material-ui/icons/Edit";
import { editUser, addUser, fetchUser, searchUser } from "../../redux/action/userAction";
import swal from 'sweetalert';

const ModalUser = (props) => {
  const dispatch = useDispatch();
  const modalUser = useSelector((state) => {
    return state.modalUsers.modalUser;
  });
  const role = useSelector((state) => {
    return state.modalUsers.role;
  });
  const user = useSelector((state) => {
    return state.modalUsers.user;
  });
  const currentPage = useSelector((state) => {
    return state.user.currentPage;
  });
  const perToPage = useSelector((state) => {
    return state.user.perToPage;
  });
  const searchActive = useSelector((state) => {
    return state.user.searchActive;
  });
  const nameSearch = useSelector((state) => {
    return state.user.nameSearch;
  });


  const [state, setState] = useState({
    users: {
      taiKhoan: "",
      matKhau: "",
      email: '',
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
    }
  });


  useEffect(() => { setState({ users: user }) }, []);
  const handleClose = useCallback(() => {
    dispatch(createAction(HIDE_MODALUSER));
  }, []);

  const handelOnchange = useCallback(
    (e) => {
      setState({
        users: { ...state.users, [e.target.name]: e.target.value },
      });
    },
    [state.users]
  );
  const handelSubmit = useCallback((search,currentPage, perToPage) =>
    (e) => {
      e.preventDefault();
      {
        !searchActive ?
         (
           role === 1 ? dispatch(addUser(state.users,()=>{
          dispatch(fetchUser(currentPage, perToPage));
        })) : dispatch(editUser(state.users, () => {
          dispatch(fetchUser(currentPage, perToPage));
        }))
        ) 
        : 
        (
          role === 1 ? dispatch(addUser(state.users,()=>{
          dispatch(searchUser(search,currentPage, perToPage));
        })) : dispatch(editUser(state.users, () => {
          dispatch(searchUser(search,currentPage, perToPage));
        }))
        );
        
      }
      console.log(state.users)
      dispatch(createAction(HIDE_MODALUSER));
    },
    [state.users]
  );
  //useMeno trả về 1 biến nếu không cần thiết để render lại
  const {
    taiKhoan,
    matKhau,
    email,
    soDt,
    maNhom,
    maLoaiNguoiDung,
    hoTen } = useMemo(() => {
      return state.users
    }, [state.users]);


  const bodyModal = (<Box >
    <div className={props.classes.paper}>

      {role === 1 ? <h2 id="transition-modal-themmoi">Thêm Mới</h2> : <h2 id="transition-modal-themmoi">Chỉnh sửa</h2>}

      <Box component="form">
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item md={6} >
              <TextField

                label="Tài Khoản"
                variant="outlined"
                className={props.classes.modalAdd}
                name="taiKhoan"
                disabled={role === 2 && true}
                onChange={handelOnchange}
                value={taiKhoan}
              />
            </Grid>

            <Grid item md={6}>
              <TextField

                label="Mật Khẩu"
                variant="outlined"
                className={props.classes.modalAdd}
                name="matKhau"
                onChange={handelOnchange}
                value={matKhau}
                type="password"
              />
            </Grid>
            <Grid item md={6}>
              <TextField

                label="Email"
                variant="outlined"
                className={props.classes.modalAdd}
                name="email"
                onChange={handelOnchange}
                value={email}
                type="email"
              />
            </Grid>

            <Grid item md={6}>
              <TextField

                label="Số điện thoại"
                variant="outlined"
                className={props.classes.modalAdd}
                name="soDt"
                onChange={handelOnchange}
                value={soDt}
              />
            </Grid>

            <Grid item md={6}>
              <TextField

                label="Họ tên"
                variant="outlined"
                className={props.classes.modalAdd}
                name="hoTen"
                onChange={handelOnchange}
                value={hoTen}
              />
            </Grid>

            <Grid item md={6}>
              <FormControl variant="outlined" className={props.classes.modalAdd}>
                <InputLabel id="demo-simple-select-outlined-label">Mã loại người dùng</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={maLoaiNguoiDung}
                  onChange={handelOnchange}
                  label="Mã loại người dùng"
                  name="maLoaiNguoiDung"
                >
                  <MenuItem value={"KhachHang"}>
                    <em>Khách Hàng</em>
                  </MenuItem>
                  <MenuItem value={'QuanTri'}>Quản Trị</MenuItem>

                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>

              <FormControl variant="outlined" className={props.classes.modalAdd}>
                <InputLabel>Mã nhóm</InputLabel>
                <Select
                  value={'GP01'}
                  onChange={handelOnchange}
                  label="Mã Nhóm"
                  name="maNhom"
                >
                  <MenuItem value={'GP01'}>
                    <em>GP01</em>
                  </MenuItem>
                  
                </Select>
              </FormControl>

            </Grid>

            <Grid item md={12}>
              {role === 1 ? <Button
                className={props.classes.btnItemModal}
                onClick={handelSubmit(nameSearch,currentPage,perToPage)}
              // onClick={handleClose}
              >
                <AddIcon />
                Thêm Mới
              </Button> : <Button
                  className={props.classes.btnItemModalEdit}
                  onClick={handelSubmit(nameSearch,currentPage, perToPage)}
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
        open={modalUser}
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

export default memo(withStyles(styles, { withTheme: true })(ModalUser));