import { HIDE_USERDETAIL, SET_USER, SET_USERDETAIL, SET_USERSEARCH } from "../action/type";

let initialState = {
  userListSearch: [{}],
  searchActive: false,
  userList: [],
  totalCount: 0,
  totalPages: 0,
  nameSearch:"",
  currentPage: 1,
  perToPage: 8,
  modalUserDetail: false,
  detail: [],
  detailBook: [],
  loading: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      state.loading = false;
      state.searchActive = false;
      state.userList = payload.data.items;
      state.totalCount = payload.data.totalCount;
      state.totalPages = payload.data.totalPages;
      state.currentPage = payload.soTrang;
      state.perToPage = payload.soPhanTuTrang;
      return { ...state };
    case SET_USERSEARCH: {
      state.searchActive = true;
      state.userListSearch = payload.data.items;
      state.totalCount = payload.data.totalCount;
      state.totalPages = payload.data.totalPages;
      state.currentPage = payload.soTrang;
      state.perToPage = payload.soPhanTuTrang;
      state.nameSearch = payload.taiKhoan;
      return { ...state };
    }
    case SET_USERDETAIL: {
      state.modalUserDetail = true;
      state.detail = payload;
      state.detailBook = payload.thongTinDatVe;
      return { ...state }
    }
    case HIDE_USERDETAIL: {
      state.modalUserDetail = false;
      return { ...state }
    }
    default:
      return state;
  }
};
export default reducer;
