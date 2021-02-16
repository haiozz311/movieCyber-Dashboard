import { Collapse, IconButton, makeStyles, Modal, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@material-ui/core";
import {
  Box,
  Button,
  Grid,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import React, { memo, useMemo, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {  HIDE_USERDETAIL,} from "../../redux/action/type";
import { createAction } from "../../redux/action";
import login from "../../asset/images/user.png";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Pagination } from "@material-ui/lab";
import CloseIcon from '@material-ui/icons/Close';


const useRowStyles = makeStyles((theme) => ({
  root: {
      '& > *': {
          borderBottom: 'unset',
      },
      [theme.breakpoints.down(`${961}`)]: {
          '& $thead': {
              fontSize: ' 13px',
              padding: '1% 1px',
          },
          '& .MuiTableCell-root': {
              fontSize: ' 12px',
          },
      },
  },
  titleDiv: {
      // padding: '0px 10px',
      fontSize: ' 14px',
      letterSpacing: '0.1px',
      fontFamily: 'SF Medium',
      fontSize: ' 16px',
      color: '#000',
      textTransform: ' capitalize',
      [theme.breakpoints.down(`${961}`)]: {
          fontSize: ' 12px',
      },
  },
  thead: {
      color: '#000',
      textTransform: ' capitalize',
  }
}));

const StyledTableCell = withStyles((theme) => ({
  body: {
      fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
      },
  },
}))(TableRow);


const ModalUserDetail = (props) => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [choose,setChoose] = useState(false);
  const [page, setPage] = useState(0);
  
  const modalUserDetail = useSelector((state)=>{
    return state.user.modalUserDetail;
  });
  const UserDetail = useSelector((state)=>{
    return state.user.detail;
  });
  const UserDetailBook = useSelector((state)=>{
    return state.user.detailBook;
  });
  const count =  Math.max(0, Math.ceil(UserDetailBook.length / rowsPerPage) - 1);

  const handleClose = useCallback( ()=> {
    dispatch(createAction(HIDE_USERDETAIL,{}))
    
  },[]);
  const handleSelect = useCallback((values)=>()=>{
    setChoose(values)
  },[]); 
  
  const handleChange = (event, value) => {
    setPage(value);
  };
  

  const Row = (props) => {
    const { row } = useMemo(() => {
        return props
    }, []);
    const classes = useRowStyles();
    const [open, setOpen] = useState(false);
    const changeFormatDate = useCallback((value) => {
        let d = new Date(value);
        let date = `${(d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)}.${d.getDate() > 9 ? d.getDate() : ('0' + d.getDate())}.${d.getFullYear()} -  ${d.getHours() > 9 ? d.getHours() : '0' + d.getHours()}:${d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()}`;
        return date;
    }, []);
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                
                <TableCell align="center" className={classes.thead}>{row.tenPhim}</TableCell>
                <TableCell align="center">{changeFormatDate(row.ngayDat)}</TableCell>
                <TableCell align="center">{row.maVe}</TableCell>
                <TableCell align="center">{row.giaVe.toLocaleString()}</TableCell>
            </TableRow>
            
        </React.Fragment>
    );
}
  

  const {
  taiKhoan,
  matKhau,
  email,
  soDT,
  maNhom,
  maLoaiNguoiDung,
  hoTen}= useMemo(()=>{
    return UserDetail
  },[UserDetail]);
   



  return (
    <div>
       
       <Modal
        className={props.classes.modal}
        open={modalUserDetail}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box >
        
          <div className={props.classes.paper}>
            <Box justifyContent={"space-between"} display={"flex"}>
              <h2>{hoTen}</h2>
              <Button onClick={handleClose}><CloseIcon/></Button>
            </Box>
            
            <Grid container>
              <Grid item xs={12} md={3} className={props.classes.paperLeft}>
                <Box>
                  <img src={login} alt="" width={"100px"} height={"100px"}/>
                </Box>
                <Button color={!choose ? "secondary" : ""} onClick={handleSelect(false)}>Thông tin cá nhân </Button>
                <Button color={choose ? "secondary" : ""} onClick={handleSelect(true)}>Xem lịch sử đặt vé</Button>
                
              </Grid>
              <Grid item xs={12} md={9} className={props.classes.paperRigth}>
                {choose ?  
                <Box>
                    {UserDetailBook.length !== 0 ? <TableContainer >
                <Table className={props.classes.table} aria-label="  table" >
                    <TableHead>
                        <TableRow>
                            
                            <TableCell align="center" className={props.classes.thead}>Tên phim</TableCell>
                            <TableCell align="center" className={props.classes.thead}>Ngày đặt</TableCell>
                            <TableCell align="center" className={props.classes.thead}> Mã Vé</TableCell>
                            <TableCell align="center" className={props.classes.thead}>Giá vé</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? UserDetailBook.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : UserDetailBook
                        ).map((row) => (
                            <Row key={row.maVe} row={row} />
                        ))}

                        
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <Pagination count={count} page={page} onChange={handleChange} className={props.classes.pagination} variant="outlined" color="secondary"/>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer> :
                <div className={props.classes.paperRigth}>
                    <div className={props.classes.textInfomation}>
                        Không có vé nào cả !
                    </div>
                    
                </div>}
                </Box> 
                  :
                <Box>
                <span><p className={props.classes.name}>Mã nhóm : </p> GP01</span> <br/>
                <span><p className={props.classes.name}>Tài Khoản : </p>{taiKhoan}</span> <br/>
                <span><p className={props.classes.name}>Mật Khẩu : </p>{matKhau}</span> <br/>
                <span><p className={props.classes.name}>Số điện thoại : </p>{soDT}</span> <br/>
                <span><p className={props.classes.name}>Email :</p>{email}</span> <br/>
                <span><p className={props.classes.name}>Họ Tên :</p>{hoTen}</span> <br/>
                </Box>}
                
              </Grid>
            </Grid>
          </div>
        </Box>
      </Modal>
              
    </div>
  );
};

export default memo( withStyles(styles, { withTheme: true })(ModalUserDetail));