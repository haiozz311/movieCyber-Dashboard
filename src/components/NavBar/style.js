import { fade } from "@material-ui/core/styles";
const style = (theme) => {
  return {
    
    backGround: {
      backgroundColor: "#303A52",
      color: "#22D1EE",
      height: theme.spacing(7),
      alignItem: "center",
      justifyContent: "between",
      display: "flex",
      position: "relative",
      borderLeft: "1px solid #A5A4BF",
      '& .MuiPaper-root':{
        marginTop:"50px",
        transform: "translateX(-10px)",
      }
    },
    
    arrowTop:{
      marginTop:theme.spacing(1.8),
    },
    arrowIcon:{
      color:"#22D1EE",
    },
    loginMenu:{
      '& .MuiPaper-root':{
        marginTop:"50px",
        transform:"translateX(-10px) !important",
      }
    },

    login: {
      position: "absolute",
      right: "10px",
      bottom: "10px",
      display: "flex",
      // alignItem: "center",
      // justifyContent: "center",
    },
    loginImg: {
      height: "30px",
      width: "30px",
      borderRadius: "50%",
      paddingBottom: "5px",
    },
    arrow: {
      marginBottom: "10px",
      color: "#A5A4BF",
    },
  };
};
export default style;
