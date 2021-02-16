import { createAction } from ".";
import connector from "../../configs/connector";
import {ShowTimeService} from "../../services/index"
import {  SET_SHOWTIME } from "./type";
import swal from "sweetalert"
import { PhoneCallback } from "@material-ui/icons";

export const fetchShowTime = (id) => {
  
  return dispatch =>{
    ShowTimeService.getAllShowTimeService(id).then(res=>{
      dispatch(createAction(SET_SHOWTIME, res.data));
    }).catch(err=>{
      console.log(err);
    })
  }
}



export const addShowTime = (data,callback) =>{
  return dispatch => {
    ShowTimeService.addShowTimeService(data).then(()=>{
      swal({
        title: "Thêm Thành công!",
        text: `Chúc mừng bạn đã thêm lịch chiếu thành công !`,
        icon: "success",
    })
      callback();
    }).catch(err=>{
      swal({
        title: "Thêm Thất bại!",
        text: `Vui lòng kiểm tra lại !`,
        icon: "error",
    })
      console.log("ADD Thất Bại");
    })
  }
}





