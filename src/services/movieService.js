import createConnector from "../configs/connector"


class MovieService {

  maNhom = 'GP01';
  url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim';
  //Get movie
  getAllMovieService = (soTrang, soPhanTuTrang) => {
    return createConnector({
      method: "GET",
      url: `${this.url}/LayDanhSachPhimPhanTrang?maNhom=${this.maNhom}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrang}`

    });
  }

  //Edit Moive
  editMovieService = (data) => {
    return createConnector({
      method: "POST",
      url: `${this.url}/CapNhatPhimUpload`,
      data: data,
    })
  }

  editMovieServiceNoneImg = (data) => {
    return createConnector({
      method: "POST",
      url: `${this.url}/CapNhatPhim`,
      data: data,
    })
  }



  //ADD Moive
  addMovieService = (data) => {
    return createConnector({
      method: "POST",
      url: `${this.url}/ThemPhimUploadHinh`,
      data: data,
    })
  }

  //Delete Moive
  deleteMovieService = (id) => {
    return createConnector({
      method: "DELETE",
      url: `${this.url}/XoaPhim?MaPhim=${id}`,

    })
  }

  detailMovieService = (id) => {
    return createConnector({
      method: "GET",
      url: `${this.url}/LayThongTinPhim?MaPhim=${id}`,

    })
  }



}







export default MovieService;