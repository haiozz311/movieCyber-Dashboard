import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Fade,
  Grid,
  InputBase,
  Modal,
  TextField,
  Typography,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import React, { Fragment, memo,useMemo, useCallback, useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from "@material-ui/icons/Search";
import { addShowTime, fetchShowTime } from "../../redux/action/showTimeAction";
import ShowTimeItem from "../../components/ShowTimeItem";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TheatersIcon from "@material-ui/icons/Theaters";
import Backdrop from "@material-ui/core/Backdrop";
import CancelIcon from "@material-ui/icons/Cancel";
import Loading from "../../Loading";
import ModalUserDetail from "../../components/ModelUserDetail"

// import  fetchMovie  from "../../redux/action/movie";

const ShowTime = (props) => {
  //Dispatch
  const dispatch = useDispatch();

  const [search,setSearch] = useState("");
  const listShowTime = useSelector((state)=>{
    return state.showTime.heThongRapChieu;
  })
  const phim = useSelector((state)=>{
    return state.showTime.phim;
  })
  const totalCount = useSelector((state) => {
    return state.movie.totalCount;
  });
  const active = useSelector((state)=>{
    return state.showTime.active;
  })
  const tongLichChieu = useSelector((state)=>{
    return state.showTime.tongLichChieu;
  })
  const tongCumChieu = useSelector((state)=>{
    return state.showTime.tongCumChieu;
  })
  const loading = useSelector((state)=>{
    return state.showTime.loading;
  })
  const [open,setOpen] = useState(false);

  const handleToggle = useCallback((values)=>()=>{
    setOpen(values);
  });
  const modalUserDetail = useSelector((state)=>{
    return state.user.modalUserDetail;
  });
  const activeArrow = useSelector((state)=>{
    return state.active.active.arrow;
  });
  // const [showTime,setShowTime] = useState({})
  useEffect(()=>{
    if(active){
      dispatch(fetchShowTime(parseInt(search) ));
    }
  },[search])
  
  
  const {biDanh,
  danhGia,
  heThongRapChieu,
  hinhAnh,
  maNhom,
  maPhim,
  moTa,
  ngayKhoiChieu,
  tenPhim,
  trailer} = useMemo(()=>{
    return phim
  },[phim]);
  const [state, setState] = useState({
    showTimeDay:{
      maPhim: "",
      ngayChieuGioChieu:"",
      maRap: '',
      giaVe: "",
      
  }});
  
  const changeDateFormater = useCallback((dae) => {
    //dd-MM-yyyy hh:mm
    let date = new Date(dae);
    let nkc = `${(date.getDate() >= 10? date.getDate() : "0"+date.getDate()) +"/"+ (date.getMonth() >= 10? (date.getMonth() +1): "0"+(date.getMonth() +1))+"/" + date.getFullYear() + " " + (date.getHours() >= 10 ? date.getHours() : "0"+ date.getHours()) +":"+ (date.getMinutes() >= 10 ? date.getMinutes() : "0"+ date.getMinutes())}`;
    
    return nkc;
  }, []);
  
  
  const handelSearch = useCallback((e)=>{ 
    setSearch(e.target.value)
    
  },[])
  const getSearch = useCallback((e)=>{
    e.preventDefault();
    dispatch(fetchShowTime(parseInt(search) ));
  },[search]);
  
  const handelOnchange = useCallback(
    
    (e) => {
      setState({
        showTimeDay :  { ...state.showTimeDay, [e.target.name]: e.target.value },
      });  
    },
    [state.showTimeDay]
  );
  const handelSubmit = useCallback(
    (e) => {
      e.preventDefault();
       dispatch(addShowTime(state.showTimeDay,()=>{
        dispatch(fetchShowTime(maPhim));
       })); 
       setOpen(false);
    },
    [state.showTimeDay] 
  );
  
  
  const renderShowTime = useCallback(() => { 
    return listShowTime.map((cumRap, index) => {
      return (
        <Box key={index} pb={2} md={12} sm={12} width={"100%"}>  
            <div >
            <img src={cumRap.logo} className={props.classes.imgLogo}></img>
            </div>    
          
            {
                
              cumRap.cumRapChieu.map((lichChieu,index)=>{
                
                return (
                <Fragment key={index}> 
                    <Box ml={3}><h3>{lichChieu.tenCumRap}</h3></Box>

                <Fragment >
                  <Accordion>
                    <AccordionSummary
                   expandIcon={<ExpandMoreIcon />}
                   aria-controls="panel1a-content"
                   id="panel1a-header"
                     >
                <Typography className={props.classes.heading}>Xem lịch chiếu</Typography>
                </AccordionSummary>
                 <AccordionDetails className={props.classes.accordiondetails}>
                 <ShowTimeItem lichChieu={lichChieu}  />
                </AccordionDetails>
                 </Accordion>

                </Fragment>
                </Fragment> 
                )
              })
            }         
         
        </Box>         
      );
    });
  }, [listShowTime]);

  const bodyModal = (<Box >
    <div className={props.classes.paper}>

     <h2 id="transition-modal-themmoi">Thêm Mới</h2> 
      
      <Box component="form">
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                
                label="Mã phim"
                variant="outlined"
                className={props.classes.modalAdd}
                name="maPhim"
                onChange={handelOnchange}
                type="number"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                
                label="Ngày giờ chiếu"
                variant="outlined"
                placeholder="dd/MM/yyyy hh:mm:ss"
                className={props.classes.modalAdd}
                name="ngayChieuGioChieu"
                onChange={handelOnchange}
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                
                label="Mã rạp"
                variant="outlined"
                className={props.classes.modalAdd}
                name="maRap"
                onChange={handelOnchange}
                type="number"
                
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                
                label="Giá vé"
                variant="outlined"
                placeholder="75.000 - 200.000"
                className={props.classes.modalAdd}
                name="giaVe"
                onChange={handelOnchange}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

    

            <Grid item md={12}>
               <Button
                className={props.classes.btnItemModal}
                onClick={handelSubmit}
                // onClick={handleClose}
              >
                <AddIcon />
                Thêm Mới
              </Button> 
              <Button
                className={props.classes.btnItemModalClose}
                type="button"
                onClick={handleToggle(false)}
              >
                <CancelIcon />
                Hủy
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  </Box>);
  
  
  
  

  return (
    <div>
      <Box display={"flex"}>
        {/* SIDEBAR */}
        <Box className={ !activeArrow ? props.classes.left : props.classes.left2} >
          <SideBar />
        </Box>
        <Box className={!activeArrow ? props.classes.right : props.classes.right2}>
          {/* =====NAVBAR===== */}
          <NavBar />

          {/* =====TOPCONTENT===== */}
          <Box className={props.classes.content}>

            <form className={props.classes.headersearch} onSubmit={getSearch}>
              <Box component="h3" variant="h5" paddingBottom={"20px"}>
              Lịch Chiếu Phim
             </Box>

              <div >
              
              <Box className={props.classes.search}>
              
              <div className={props.classes.searchIcon}>
                
                <SearchIcon />
              </div>
              <InputBase
              placeholder="Search…"
              onChange={handelSearch}
              
              classes={{
                root: props.classes.inputRoot,
                input: props.classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
             />

              </Box>
              <Button type="submit" className={props.classes.searchbtn}  >Mã phim</Button>      
              </div>
              
            </form>

            <Grid container spacing={2} py={5}>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                  <TheatersIcon/>
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {active?tongLichChieu:0}
                    </Typography>
                    <Typography>Lịch Chiếu</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                  <EqualizerIcon/>
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {active?tongCumChieu:0}
                    </Typography>
                    <Typography>Tổng số rạp</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                  <InfoIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {active ?listShowTime.length : 0}
                    </Typography>
                    <Typography>Tổng số cụm chiếu</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* =====USERITEM===== */}

            <Box className={props.classes.userItem}>
              <Box className={props.classes.topItem}>
                <Typography component="h5" variant="h5">
                  Lịch Chiếu
                </Typography>
                <Button className={props.classes.btnItem} onClick={handleToggle(true)}>
                  <AddIcon />
                  <p className={props.classes.btnItemText}>Thêm Mới</p> 
                </Button>
              </Box>

              {/* TABLE */}

              


               {/* Pagination */}
              {/* <Box> */}
            { !active ? <Box textAlign={"center"}>
                <h3>Vui lòng nhập mã phim</h3>
            </Box> : (loading ? <Loading/> : <Box className={props.classes.table}>

                <Box pb={5}>
                  <Grid container >
                    <Grid item md={6}>
                      <h3>{tenPhim}</h3>
                      <Box><img src={hinhAnh} alt="" width={"250px"} height={"350px"}/></Box>
                    </Grid>
                    <Grid item md={6} className={props.classes.details}>
                      <span><p className={props.classes.name}>Tên phim : </p> {tenPhim}</span> <br/>
                      <span><p className={props.classes.name}>Mã Nhóm : </p> {maNhom}</span> <br/>
                      <span><p className={props.classes.name}>Mã Phim : </p> {maPhim}</span> <br/>
                      <span><p className={props.classes.name}>Ngày Khởi Chiếu : </p> {changeDateFormater(ngayKhoiChieu)}</span> <br/>
                      <span><p className={props.classes.name}>Mô Tả : </p> {moTa}</span> <br/>
                      <span><p className={props.classes.name}>Đánh Giá : </p> {danhGia}</span> <br/>
                    </Grid>

                  </Grid>
                <hr className={props.classes.hr}/>
              </Box>


              <Grid container spacing={2}>
                   { listShowTime.length !== 0 ? renderShowTime() : 
                   <Box marginLeft={"30%"} paddingBottom={"20px"}>
                     <Typography component={"h4"} variant={"h4"} color="primary" >Chưa có lịch chiếu</Typography>
                   </Box>
                   }
              </Grid>
            </Box>) }
              

              

                <Modal
                  aria-labelledby="transition-modal-themmoi"
                  aria-describedby="transition-modal-description"
                  className={props.classes.modal}
                  open={open}
                  onClose={handleToggle(false)}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  {bodyModal}
                </Modal>

             
              
              
            </Box>
          </Box>
        </Box>

        { modalUserDetail && <ModalUserDetail/>}
      </Box>

    </div>
  );
};

export default memo(withStyles(styles, { withTheme: true })(ShowTime));
