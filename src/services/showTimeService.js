import createConnector from "../configs/connector"


class ShowTimeService{


  maNhom = 'GP01';
  url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap';
  //Get showtime
  getAllShowTimeService = (id) =>{
  return createConnector({
    method:"GET",
    url: `${this.url}/LayThongTinLichChieuPhim?MaPhim=${id}`

  });
  }

  addShowTimeService = (data) =>{
    return createConnector({
      method:"POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
      data:data,
    });
    }

}

export default ShowTimeService;