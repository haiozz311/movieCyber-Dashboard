import {
  Box,
  Button,
  Grid,
  InputBase,
  Typography,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import React, { Fragment, memo, useCallback, useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../redux/action";
import {   SHOW_MODALUSER } from "../../redux/action/type";
import { fetchUser, searchUser } from "../../redux/action/userAction";
import UserItem from "../../components/UserItem";
import ModalUser from "../../components/ModalUser";
import { Pagination } from "@material-ui/lab";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from "@material-ui/icons/Search";
import Loading from "../../Loading";
import ModalUserDetail from "../../components/ModelUserDetail"


const UserListSearch = (props) => {
  //Dispatch
  const perToPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  
  const dispatch = useDispatch();
  
  const nameSearch = useSelector((state) => {
    return state.user.nameSearch;
  });
  const [search,setSearch] = useState(nameSearch);
  const listUserSearch = useSelector((state) => {
    return state.user.userListSearch;
  });
  const searchActive = useSelector((state) => {
    return state.user.searchActive;
  }); 
  const totalCountSearch = useSelector((state) => {
    return state.user.totalCountSearch;
  });
  const totalPagesSearch = useSelector((state) => {
    return state.user.totalPagesSearch;
  });
  const modalUser = useSelector((state) => {
    return state.modalUsers.modalUser;
  });
  const loading = useSelector((state)=>{
    return state.user.loading
  })
  const modalUserDetail = useSelector((state)=>{
    return state.user.modalUserDetail;
  });
  const activeArrow = useSelector((state)=>{
    return state.active.active.arrow;
  });
  
  useEffect(() => {
    if( search !== "" ){  
      dispatch(searchUser(search,currentPage,perToPage,()=>{
        props.history.replace(`/nguoidung/${search}`);
      }));
    }else{
      dispatch(searchUser(nameSearch,currentPage,perToPage,()=>{
        props.history.replace(`/nguoidung/${nameSearch}`);
      }));
    }
  }, [searchActive,search,currentPage,listUserSearch,nameSearch]);
   
  const handleChange = useCallback((event, value) => {
    console.log(value);
    setCurrentPage(value);
  },[]);
  //ShowModal
  const handleOpen = useCallback(()=>{
    dispatch(createAction(SHOW_MODALUSER,{ users:{
      taiKhoan: "",
      matKhau:"",
      email: '',
      soDt: "",
      maNhom:"",
      maLoaiNguoiDung: "",
      hoTen: "",
  },role:1,
}));
  },[]);
    

  //renderuser
  
  const renderUserSearch = useCallback(() => {
    return listUserSearch.map((item, index) => {
      return (
        <Grid item md={6} xs={12} key={index}>
          <UserItem item={item}  />
        </Grid>
      );
    });
  }, [listUserSearch]);

  // const renderUserSearch = useCallback(() => {
  //   return listUserSearch.map((item, index) => {
  //     return (
  //       <Grid item md={6} xs={12} key={index}>
  //         <UserItem item={item}  />
  //       </Grid>
  //     );
  //   });
  // }, [listUserSearch]);

  const handelSearch = useCallback((e)=>{ 
    setSearch(e.target.value)
    
  },[])
  const getSearch = useCallback(()=>{
    setCurrentPage(1);
      dispatch(searchUser(search,currentPage,perToPage,()=>{
        props.history.replace(`/nguoidung/${search}`);
      }));
  },[search,currentPage]);
  

  return (
    <Fragment>
      {loading? <Loading/> : <div>
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

            <Box className={props.classes.headersearch}>
              <Box component="h3" variant="h5" paddingBottom={"20px"}>
              Tìm Kiếm Người Dùng
             </Box>

              <Box>
              
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
              <Button className={props.classes.searchbtn} onClick={getSearch} >Tìm kiếm</Button>
            
              </Box>
              
            </Box>

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
                    <PersonIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {/* {!searchActive ? listUser.length : listUserSearch.length} */}
                      {listUserSearch.length}
                    </Typography>
                    <Typography>Người dùng / Trang</Typography>
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
                      2
                    </Typography>
                    <Typography>Số quyền</Typography>
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
                    <SupervisorAccountIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {totalCountSearch}
                    </Typography>
                    <Typography>Tổng số người dùng</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* =====USERITEM===== */}

            <Box className={props.classes.userItem}>
              <Box className={props.classes.topItem}>
                <Typography component="h5" variant="h5">
                  Người dùng
                </Typography>
                <Button className={props.classes.btnItem} onClick={handleOpen}>
                  <AddIcon />
                  <p className={props.classes.btnItemText}>Thêm Mới</p> 
                </Button>
              </Box>

              {/* TABLE */}

              


               {/* Pagination */}
              <Box>
              <Box className={props.classes.table}>
                <Grid container spacing={2}>
                  {/* {!searchActive ? renderUser() : renderUserSearch()} */}
                  {search !== "" && listUserSearch !== null ? renderUserSearch() : <Box>
                      Không tìm thấy
                    </Box>}
                </Grid>
              </Box>

              <Box  className={props.classes.pagination}>
              <Pagination count={totalPagesSearch} page={currentPage} variant="outlined" color="secondary" onChange={handleChange} />
              </Box>
                
              </Box>

              {/* MODAL */}
              {modalUser && <ModalUser /> }
              
              { modalUserDetail && <ModalUserDetail/>}
              
            </Box>
          </Box>
        </Box>
      </Box>
    </div>}
    </Fragment>
  );
};

export default memo(withStyles(styles, { withTheme: true })(UserListSearch));