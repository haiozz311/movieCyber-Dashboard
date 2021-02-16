import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, SET_MOVIE } from "../action/type";

let initialState = {
  movieList: [],
  totalCount: 0,
  totalPages: 0,
  currentPage: 1,
  perToPage: 8,
  loading: true,
  

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIE:
      {
        state.loading = false;
        state.movieList = payload.data.items;
        state.totalCount = payload.data.totalCount;
        state.totalPages = payload.data.totalPages;
        state.currentPage = payload.soTrang;
        state.perToPage = payload.soPhanTuTrang;
        return { ...state };
      }
    case ADD_MOVIE: {
      let index = state.movieList.findIndex(item => item.maPhim === payload.maPhim);
      let mangTam = [...state.movieList];
      if (index === -1) {
        mangTam.push(payload);
      }
      state.movieList = mangTam;
      return { ...state };
    };
    case EDIT_MOVIE: {
      // console.log(payload.data);
      let index = state.movieList.findIndex(item => item.maPhim === payload.maPhim);
      let mangTam = [...state.movieList];
      if (index !== -1) {
        mangTam[index] = payload;

      }
      state.movieList = mangTam;
      return { ...state };
    }
    case DELETE_MOVIE: {
      let index = state.movieList.findIndex(item => item.maPhim === payload);
      let mangTam = [...state.movieList];
      if (index !== -1) {
        mangTam.splice(index, 1);
      }
      state.movieList = mangTam;
      return { ...state };
    }
    
    default:
      return state;
  }
};
export default reducer;
