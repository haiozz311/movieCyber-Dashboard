import { createAction } from ".";
import connector from "../../configs/connector";
import { UserService } from "../../services/index"
import { SET_USER, SET_USERSEARCH, SET_USERDETAIL } from "./type";
import swal from "sweetalert"

export const fetchUser = (soTrang, soPhanTuTrang) => {

  return dispatch => {
    UserService.getAllUserService(soTrang, soPhanTuTrang).then(res => {
      dispatch(createAction(SET_USER, { data: res.data, soTrang, soPhanTuTrang }));
    }).catch(err => {
      console.log(err);
    })
  }
}

export const editUser = (data, callback) => {
  return dispatch => {
    UserService.editUserService(data).then(() => {
      swal({
        title: "Chỉnh sửa Thành công!",
        text: `Chúc mừng bạn đã chỉnh sửa phim thành công !`,
        icon: "success",
      })
      callback();
    }).catch(err => {
      swal({
        title: "Chỉnh sửa Thất bại!",
        text: `Vui lòng kiểm tra lại mã nhóm!`,
        icon: "error",
      })
    })
  }
}

export const addUser = (data,callback) => {
  return dispatch => {
    UserService.addUserService(data).then(() => {
      swal({
        title: "Thêm Thành công!",
        text: `Chúc mừng bạn đã thêm phim thành công !`,
        icon: "success",
      })
      callback();
    }).catch(err => {
      swal({
        title: "Thêm Thất bại!",
        text: `Vui lòng kiểm tra lại !`,
        icon: "error",
      })
    })
  }
}

export const deleteUser = (taiKhoan, callback) => {
  return dispatch => {
    UserService.deleteUserService(taiKhoan).then(() => {
      console.log("DELETE Thành Công")
      callback();
    }).catch(err => {
      console.log("DELETE Thất Bại");
    })
  }
}


export const searchUser = (taiKhoan, soTrang, soPhanTuTrang) => {
  return dispatch => {
    UserService.searchUserService(taiKhoan, soTrang, soPhanTuTrang).then((res) => {
      dispatch(createAction(SET_USERSEARCH, { data: res.data, soTrang, soPhanTuTrang,taiKhoan }));
    }).catch(err => {
      console.log("Search Thất Bại");
    })
  }
}

export const detailUser = (taiKhoan) => {
  return dispatch => {
    UserService.detailUserService(taiKhoan).then((res) => {
      dispatch(createAction(SET_USERDETAIL, res.data));
    }).catch(err => {
      console.log("Detail Thất Bại");
    })
  }
}