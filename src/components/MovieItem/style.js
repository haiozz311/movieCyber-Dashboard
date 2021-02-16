const style = (theme) => {
  return {
    root: {
      maxWidth: "100%",
    },
    //Button
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
      minWidth: 0,
      padding: "5px",
      color: "#303A52",
    },
    btnIconEdit: {
      minWidth: 0,
      padding: "5px",
      color: "#22D1EE",
    },
    btnIconDelete: {
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
      width: "60%",
    },
    paperTrailer: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      // height: "auto",
      width: 600,
    },
    paperRigth: {
      paddingLeft: theme.spacing(5),
    },
    name:{
      color:"#43425D",
      fontSize:"15px",
      display:"inline-block",
      fontWeight:"bold",
      marginBlockEnd: "unset",
    },

    //Hover
    cardHover:{
      position:"relative",
      
      
    },
    cardAbove:{
      position:"absolute",
      top:0,
      left:0,
      transition:"all 2s ease-in-out",
      width:"100%",
      height:"100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover ":{
        background: "linear-gradient(360deg, #43425D, transparent)",
        
      },
      "&:hover $cardAboveIcons":{
        opacity:1,
        
      },
      
    },
    cardAboveIcons:{
      border:"1px solid white",
      padding:"20px",
      borderRadius:"50%",
      color:"white",
      opacity:0,
      transition:"all 0.5s ease-in-out ",
      
    }
    
    
  };
};
export default style;
