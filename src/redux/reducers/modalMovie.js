import { HIDE_MODALMOVIE, SET_MODALACTIVE, SHOW_MODALMOVIE,SET_CHECKED ,SET_CHANGED} from "../action/type";

let initialState = {
  modalMovie: false,
  role:0,//1 : thêm , 2 : chỉnh sửa , 
  movie: {
    biDanh: "",
    maPhim:"",
    hinhAnh: "",
    maNhom: "GP01",
    danhGia:"",
    moTa: "",
    ngayKhoiChieu: "",
    tenPhim: "",
    trailer: "",
  },
  checked:true,
  
}

const reducer = (state = initialState,{type,payload})=>{
  switch(type){
    case SHOW_MODALMOVIE:
      return {...state,modalMovie:true,movie:payload.movies,role:payload.role}
    case HIDE_MODALMOVIE:
      return {...state,modalMovie:false,checked:true}
    case SET_CHECKED:{
        state.checked = !state.checked;
        return { ...state };
      }
      
    default: return state
  }
}

export default reducer;