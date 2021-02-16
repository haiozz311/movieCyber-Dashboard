import {  SET_SHOWTIME} from "../action/type";

let initialState = {
  heThongRapChieu:[],
  cumRapChieu:[],
  lichChieuPhim:[],
  modalShowTime:{},
  phim:{},
  tongLichChieu:0,
  tongCumChieu:0,
  active:false,
  loading:true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOWTIME:
      state.active=true;
      state.loading=false;
      state.phim = payload;
      state.heThongRapChieu = payload.heThongRapChieu;
      let tongLichChieuUpdate =0;
      let tongCumChieuUpdate =0;
      for(let i = 0;i<payload.heThongRapChieu.length;i++ ){
        for(let j =0;j<payload.heThongRapChieu[i].cumRapChieu.length;j++){
          tongCumChieuUpdate++;
          tongLichChieuUpdate+= payload.heThongRapChieu[i].cumRapChieu[j].lichChieuPhim.length;
        }
      }
      state.tongCumChieu = tongCumChieuUpdate;
      state.tongLichChieu = tongLichChieuUpdate;
      return { ...state};
    
    default:
      return state;
  }
};
export default reducer;
