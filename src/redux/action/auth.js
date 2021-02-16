import { PhoneCallback } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import Axios from "axios";
import { createAction } from ".";
import connector from "../../configs/connector";
import { SET_TOKEN, SET_CREDENTIALS } from "./type";
import swal from "sweetalert"
//acsync action
export const signIn = (data, callback) => (dispatch) => {
  connector({
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    method: "POST",
    data: data,
  })
    .then((res) => {
      if (res.data.maLoaiNguoiDung !== "QuanTri") {
        swal({
          title: "Đăng Nhập Thất bại!",
          text: `Sai thông tin hoặc bạn không phải là quản trị !`,
          icon: "error",
      })
      } else {
        localStorage.setItem("t", res.data.accessToken); //Lưu token trên local đề F5 không mất
        localStorage.setItem("o", JSON.stringify(res.data));
        dispatch(createAction(SET_TOKEN, res.data.accessToken));
        dispatch(createAction(SET_CREDENTIALS, res.data));
        callback();
      }
    })
    .catch((err) => {
      console.log(err);
      swal({
        title: "Đăng Nhập Thất bại!",
        text: `Sai thông tin hoặc bạn không phải là quản trị !`,
        icon: "error",
    })
    });
};
