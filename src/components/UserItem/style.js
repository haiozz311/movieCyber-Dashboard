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
    btnIconInfo: {
      fontSize:"5px",
      minWidth: 0,
      padding: "5px",
      color: "#303A52",
      '&.MuiButton-contained':{
        boxShadow:"none",
        backgroundColor:"#fff",
      },
      '&.MuiButton-contained:hover':{
        boxShadow:"none",
        backgroundColor:" rgba(48, 58, 82, 0.04)",
      },
      
    },
    btnIconEdit: {
      fontSize:"5px",
      minWidth: 0,
      padding: "5px",
      color: "#22D1EE",
      '&.MuiButton-contained':{
        boxShadow:"none",
        backgroundColor:"#fff",
      },
      '&.MuiButton-contained:hover':{
        boxShadow:"none",
        backgroundColor:" rgba(48, 58, 82, 0.04)",
      },
      
    },
    btnIconDelete: {
      fontSize:"5px",
      minWidth: 0,
      padding: "5px",
      color: "#FF6565",
      '&.MuiButton-contained':{
        boxShadow:"none",
        backgroundColor:"#fff",
      },
      '&.MuiButton-contained:hover':{
        boxShadow:"none",
        backgroundColor:" rgba(48, 58, 82, 0.04)",
      },
    },

    //MODAL
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      height: 500,
      width: 800,
    },
    paperLeft:{
      textAlign:"center"
    },
    
    paperRigth: {
      paddingLeft: "30px",
      display:"block",
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
      right:1,
      

    }
    ,
    iconsize:{
      fontSize:"20px",
      '& .MuiButton-contained':{
        boxShadow:"none",
        backgroundColor:"#fff",
      },
    },
    name:{
      color:"#43425D",
      fontSize:"15px",
      display:"inline-block",
      fontWeight:"bold",
      marginBlockEnd: "unset",
      paddingRight:"5px",
    },
  };
};
export default style;
