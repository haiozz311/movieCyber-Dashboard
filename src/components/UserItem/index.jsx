import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import React, { memo, useMemo } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { SHOW_MODALUSER } from "../../redux/action/type";
import { createAction } from "../../redux/action";
import swal from "sweetalert";
import { deleteUser, detailUser, fetchUser, searchUser } from "../../redux/action/userAction";
import InfoIcon from '@material-ui/icons/Info';



const UserItem = (props) => {
  const dispatch = useDispatch();
  const {
    taiKhoan,
    matKhau,
    email,
    soDt,
    maNhom,
    maLoaiNguoiDung,
    hoTen,
  } = useMemo(() => {
    return props.item
  }, [props.item]);
  const { currentPage, perToPage } = useMemo(() => {
    return props;
  }, [props]);
  const searchActive = useSelector((state) => {
    return state.user.searchActive;
  });
  const nameSearch = useSelector((state) => {
    return state.user.nameSearch;
  });


  const handleToggle = useCallback((taiKhoan) => () => {
    dispatch(detailUser(taiKhoan))
  }, [props.item]);

  const handelEdit = useCallback(() => {
    dispatch(createAction(SHOW_MODALUSER, {
      users: {
        taiKhoan:taiKhoan,
        matKhau:matKhau,
         email:email,
        soDt:soDt,
        maNhom:"GP01",
        maLoaiNguoiDung:maLoaiNguoiDung,
        hoTen:hoTen,
      },
      role: 2
    }))
  }, [props.item])

  const handelDelete = useCallback((taiKhoan,search, currentPage, perToPage) => () => {
    swal({
      title: "Bạn chắc chứ?",
      text: "Bạn có muốn xóa người dùng này không!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Người dùng đã được xóa !", {
            icon: "success",
          });
          dispatch(deleteUser(taiKhoan, () => {
            !searchActive ? dispatch(fetchUser(currentPage, perToPage)) : dispatch(searchUser(search,currentPage, perToPage)); 
            
          }));

        } else {
          swal("Bạn thật sáng suốt!");
        }
      });



  }, [props.item])


  return (
    <div>
      <Card className={props.classes.root}>
        <div className={props.classes.cardArea}>
          <CardContent className={props.classes.cardContent}>


            <Box className={props.classes.circleName}>
              <Typography variant="h6" component="h6" >
                {/* Cắt bớt chữ */}
                {hoTen.substr(0, 1)}
              </Typography>
            </Box>
            <Box padding={"inherit"} fontSize={"20px"}>
              <Box paddingLeft={"10px"}>{hoTen.substr(0, 20)}</Box>

            </Box>



          </CardContent>

          <Box className={props.classes.btnContent}>
            <Button variant="contained" className={props.classes.btnIconInfo}  onClick={handleToggle(taiKhoan)}>
              <InfoIcon className={props.classes.iconsize} />
            </Button>
            <Button className={props.classes.btnIconEdit}  onClick={handelEdit}>
              <EditIcon className={props.classes.iconsize} />
            </Button>
            <Button variant="contained" className={props.classes.btnIconDelete}  onClick={handelDelete(taiKhoan,nameSearch, currentPage, perToPage)}>
              <DeleteIcon className={props.classes.iconsize} />
            </Button>
          </Box>
        </div>

      </Card>

      {/* MODAL */}

    </div >
  );
};

export default memo(withStyles(styles, { withTheme: true })(UserItem));
