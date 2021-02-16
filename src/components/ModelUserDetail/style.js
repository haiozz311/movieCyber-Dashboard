const style = (theme) => {
  return {
    root: {
      maxWidth: "100%",
    },
    btn: {
      fullWidth: "100px",
      backgroundColor: "#fff",
      border: "1px solid #303A52",
      color: "#22D1EE",

      minWidth: 0,
      padding: "5px 8px",
      "&:hover": {
        backgroundColor: "#303A52",
      },
    },
    btnIconEdit: {
      fontSize:"5px",
      minWidth: 0,
      padding: "5px",
    },
    btnIconDelete: {
      fontSize:"5px",
      minWidth: 0,
      padding: "5px",
      color: "#FF6565",
    },

    //MODAL
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding:theme.spacing(2,2),
      overflow:"auto",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      // height: "auto",
      // width: "700px",
    },
    paperLeft:{
      textAlign:"center"
    },
    
    paperRigth: {
      
      display:"block",
      border:"1px solid #303A52",
      borderRadius:"5px",
      padding:theme.spacing(2,3)
    },
    cardArea:{
      position:"relative"
    },
    cardContent:{
      display:"flex"
    },
    circleName:{
      display:"flex",
      borderRadius:"50%",
      justifyContent:"center",
      alignItems:"center",
      height:"50px",
      width:"50px",
      border:"1px solid bisque",
      backgroundColor:"#22D1EE",
      color: "#303A52",
      boxShadow: "1px 3px 7px black",
    },
    btnContent:{
      position:"absolute",
      textAlign:"center",
      top:1,
      right:1
    }
    ,
    iconsize:{
      fontSize:"20px"
    },
    name:{
      color:"#43425D",
      fontSize:"15px",
      display:"inline-block",
      fontWeight:"bold",
      marginBlockEnd: "unset",
      paddingRight:"5px",
    },
    table: {
      minWidth: 500,
      '& .MuiTablePagination-caption': {
          fontSize: '13px',
      },
      '& .MuiTableCell-head':{
        fontWeight:"bolder"
      }

  },
  thead: {

  },
  wraper: {
      position: ' absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
  },
  textInfomation: {
      color: '#000',
      fontSize: theme.spacing(1.8),
      textTransform: 'capitalize',
      fontFamily: 'SF Medium',
      letterSpacing: '0.5px',
      textAlign:"center",
      [theme.breakpoints.down(`${961}`)]: {
          fontSize: theme.spacing(1.3),
      },
  },
  pagination:{
    paddingTop:theme.spacing(2),
    
    '& .MuiPagination-ul':{
      flexWrap:"nowrap",
    }
  }
 
  };
};
export default style;
