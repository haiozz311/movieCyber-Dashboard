import { createAction } from ".";
import connector from "../../configs/connector";
import { MovieService } from "../../services/index"
import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, SET_MOVIE } from "./type";
import swal from "sweetalert"

export const fetchMovie = (soTrang, soPhanTuTrang) => {
  return dispatch => {
    MovieService.getAllMovieService(soTrang, soPhanTuTrang).then(res => {
      dispatch(createAction(SET_MOVIE, { data: res.data, soTrang, soPhanTuTrang }));
    }).catch(err => {
      console.log(err);
    })
  }
}

export const editMovie = (data) => {
  console.log('editMovie');
  return dispatch => {
    MovieService.editMovieService(data).then((res) => {
      swal({
        title: "Chỉnh sửa Thành công!",
        text: `Chúc mừng bạn đã chỉnh sửa phim thành công !`,
        icon: "success",
      })
      connector({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${res.data.maPhim}`,
        method: 'GET'
      }).then(res => {
        const { biDanh, danhGia, hinhAnh, maNhom, maPhim, moTa, ngayKhoiChieu, tenPhim, trailer, } = res.data
        let item = {
          biDanh, danhGia, hinhAnh, maNhom, maPhim, moTa, ngayKhoiChieu, tenPhim, trailer,
        };
        console.log(item);
        dispatch(createAction(EDIT_MOVIE, item));
        
      }).catch(err => {

        console.log(err);
      })
      // callbackSuccess();
    }).catch(err => {
      swal({
        title: "Chỉnh sửa Thất bại!",
        text: `Vui lòng chọn ảnh !!!!`,
        icon: "error",
      })
      
      console.log("Edit Thất Bại");
    })
  }
};
export const editMovieNoneImg = (data) => {
  console.log('editMovieNoneImg');
  return dispatch => {
    MovieService.editMovieServiceNoneImg(data).then((res) => {
      swal({
        title: "Chỉnh sửa Thành công!",
        text: `Chúc mừng bạn đã chỉnh sửa phim thành công !`,
        icon: "success",
      })
      connector({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${res.data.maPhim}`,
        method: 'GET'
      }).then(res => {
        const { biDanh, danhGia, hinhAnh, maNhom, maPhim, moTa, ngayKhoiChieu, tenPhim, trailer, } = res.data
        let item = {
          biDanh, danhGia, hinhAnh, maNhom, maPhim, moTa, ngayKhoiChieu, tenPhim, trailer,
        };
        dispatch(createAction(EDIT_MOVIE, item));
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      swal({
        title: "Chỉnh sửa Thất bại!",
        text: `Vui lòng kiểm tra lại !!!`,
        icon: "error",
      })
      console.log("Edit Thất Bại");
    })
  }
}

export const addMovie = (data, callbackSuccess) => {

  return dispatch => {
    MovieService.addMovieService(data).then((res) => {
      swal({
        title: "Thêm Thành công!",
        text: `Chúc mừng bạn đã thêm phim thành công !`,
        icon: "success",
      })
      callbackSuccess();
    }).catch(err => {
      swal({
        title: "Thêm Thất bại!",
        text: `Vui lòng kiểm tra lại !!!`,
        icon: "error",
      })
      console.log("ADD Thất Bại");
    })
  }
}

export const deleteMovie = (maPhim, callbackSuccess, callbackFail) => {
  return dispatch => {
    MovieService.deleteMovieService(maPhim).then((res) => {
      callbackSuccess();
    }).catch(err => {
      console.log("DELETE Thất Bại");
      callbackFail();
    })
  }
}

export const detailMovie = (maPhim) => {
  return dispatch => {
    MovieService.detailMovieService(maPhim).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}



