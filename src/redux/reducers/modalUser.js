import {  HIDE_MODALUSER,  SHOW_MODALUSER } from "../action/type";

let initialState = {
  modalUser: false,
  role:0,//1 : thêm , 2 : chỉnh sửa , 
  user: {
    taiKhoan: "",
    matKhau:"",
    email: '',
    soDt: "",
    maNhom:"GP01",
    maLoaiNguoiDung: "",
    hoTen: "",
    
  },
}

const reducer = (state = initialState,{type,payload})=>{
  switch(type){
    case SHOW_MODALUSER:
      return {...state,modalUser:true,user:payload.users,role:payload.role}
    case HIDE_MODALUSER:
      return {...state,modalUser:false}
    default: return state
  }
}

export default reducer;