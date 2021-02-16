import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, withStyles, withTheme } from "@material-ui/core";
import React, { memo, useCallback, useState } from "react";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ShowTimeItem = (props) => {
  const {hinhAnh,lichChieuPhim,maCumRap,tenCumRap}=props.lichChieu;
  const changeDateFormater = useCallback((dae) => {
    //dd-MM-yyyy hh:mm
    let date = new Date(dae);
    let nkc = `${(date.getDate() >= 10? date.getDate() : "0"+date.getDate()) +"/"+ (date.getMonth() >= 10? (date.getMonth() +1): "0"+(date.getMonth() +1))+"/" + date.getFullYear() + " " + (date.getHours() >= 10 ? date.getHours() : "0"+ date.getHours()) +":"+ (date.getMinutes() >= 10 ? date.getMinutes() : "0"+ date.getMinutes())}`;
    
    return nkc;
  }, []);
  const changeDateFormaterDate = useCallback((dae) => {
    //dd-MM-yyyy
    let date = new Date(dae);
    let nkc = `${(date.getDate() >= 10? date.getDate() : "0"+date.getDate()) +"/"+ (date.getMonth() >= 10? (date.getMonth() +1): "0"+(date.getMonth() +1))+"/" + date.getFullYear()}`;
    
    return nkc;
  }, []);
  const changeDateFormaterTime = useCallback((dae) => {
    //hh:mm
    let date = new Date(dae);
    let nkc = `${(date.getHours() >= 10 ? date.getHours() : "0"+ date.getHours()) +":"+ (date.getMinutes() >= 10 ? date.getMinutes() : "0"+ date.getMinutes())}`;
    
    return nkc;
  }, []);
 
  const renderLichChieu= useCallback(()=>{
    return lichChieuPhim.map((item,index)=>{
      const {giaVe,maLichChieu,maRap,ngayChieuGioChieu,tenRap,thoiLuong}=item;
      return (
        <Grid item md={3} key={index} style={{maxWidth:"100%"}}>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span><p className={props.classes.name}>{changeDateFormaterDate(ngayChieuGioChieu)} </p> <br/>
          <p className={props.classes.date}>{changeDateFormaterTime(ngayChieuGioChieu)}</p> 
          </span> <br/>
        </AccordionSummary>
        <AccordionDetails className={props.classes.accordiondetails}>
      <span><p className={props.classes.name}>Giá vé : </p> {giaVe}</span> <br/>
      <span><p className={props.classes.name}>Mã lịch chiếu : </p> {maLichChieu}</span> <br/>
      <span><p className={props.classes.name}>Mã rạp : </p> {maRap}</span> <br/>
      <span><p className={props.classes.name}>Ngày Khởi Chiếu : </p> {changeDateFormater(ngayChieuGioChieu)}</span> <br/>
      <span><p className={props.classes.name}>Tên rạp : </p> {tenRap}</span><br/>
      <span><p className={props.classes.name}>Thời lượng : </p> {thoiLuong}</span><br/>

      
        </AccordionDetails>
      </Accordion>
      
        </Grid>
      )
    })
  },[lichChieuPhim])


  return (
    <Box>
      <Grid container my={5} spacing={1}>
      {renderLichChieu()}
    </Grid>
    </Box>
    )

};

export default memo(withStyles(styles, { withTheme: true })(ShowTimeItem));
