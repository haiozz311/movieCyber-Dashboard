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
import { SHOW_MODALUSER } from "../../redux/action/type";
import { fetchUser, searchUser, testApi } from "../../redux/action/userAction";
import UserItem from "../../components/UserItem";
import ModalUser from "../../components/ModalUser";
import { Pagination } from "@material-ui/lab";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from "@material-ui/icons/Search";
import Loading from "../../Loading";
import ModalUserDetail from "../../components/ModelUserDetail"


const UserList = (props) => {
  //Dispatch
  const perToPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const listUser = useSelector((state) => {
    return state.user.userList;
  });
  const listUserSearch = useSelector((state) => {
    return state.user.userListSearch;
  });
  const searchActive = useSelector((state) => {
    return state.user.searchActive;
  });
  const totalCount = useSelector((state) => {
    return state.user.totalCount;
  });
  const totalPages = useSelector((state) => {
    return state.user.totalPages;
  });
  const modalUser = useSelector((state) => {
    return state.modalUsers.modalUser;
  });
  const loading = useSelector((state) => {
    return state.user.loading
  })
  const modalUserDetail = useSelector((state) => {
    return state.user.modalUserDetail;
  });
  const activeArrow = useSelector((state) => {
    return state.active.active.arrow;
  });

  useEffect(() => {
    if (searchActive && search !== "" ) {
      dispatch(searchUser(search, currentPage, perToPage));
    } else {
      dispatch(fetchUser(currentPage, perToPage));
    }

  }, [searchActive, currentPage,search]);

  const handleChange = useCallback((event, value) => {
    setCurrentPage(value);
  }, []);
  //ShowModal
  const handleOpen = useCallback(() => {
    dispatch(createAction(SHOW_MODALUSER, {
      users: {
        taiKhoan: "",
        matKhau: "",
        email: '',
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "",
        hoTen: "",
      }, role: 1,
    }));
  }, []);


  //renderuser
  const list = searchActive ? listUserSearch : listUser;
  const renderUser = useCallback(() => {
    return list.map((item, index) => {
      return (
        <Grid item md={6} xs={12} key={index}>
          <UserItem item={item} currentPage={currentPage} perToPage={perToPage} />
        </Grid>
      );
    });
  }, [list]);

  const handelSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const getSearch = useCallback((e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(searchUser(search, currentPage, perToPage));
  }, [search, currentPage]);


  return (
    <Fragment>
      {loading ? <Loading /> : <div>
        <Box display={"flex"}>
          {/* SIDEBAR */}
          <Box className={!activeArrow ? props.classes.left : props.classes.left2} >
            <SideBar />
          </Box>
          <Box className={!activeArrow ? props.classes.right : props.classes.right2}>
            {/* =====NAVBAR===== */}
            <NavBar />

            {/* =====TOPCONTENT===== */}
            <Box className={props.classes.content}>

              <form className={props.classes.headersearch} onSubmit={getSearch}>
                <Box component="h3" variant="h5" paddingBottom={"20px"}>
                  Danh Sách Người Dùng
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
                  <Button type="submit" className={props.classes.searchbtn} >Tìm kiếm</Button>

                </Box>

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
                      <PersonIcon />
                    </Box>
                    <Box paddingLeft={"20px"}>
                      <Typography variant="h6" component="h5">
                        {/* {!searchActive ? listUser.length : listUserSearch.length} */}
                        {list.length}
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
                        {totalCount}
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
                      {renderUser()}
                    </Grid>
                  </Box>

                  <Box className={props.classes.pagination}>
                    <Pagination count={totalPages} page={currentPage} variant="outlined" color="secondary" onChange={handleChange} />
                  </Box>

                </Box>

                {/* MODAL */}
                {modalUser && <ModalUser />}

                {modalUserDetail && <ModalUserDetail />}

              </Box>
            </Box>
          </Box>
        </Box>
      </div>}
    </Fragment>
  );
};

export default memo(withStyles(styles, { withTheme: true })(UserList));