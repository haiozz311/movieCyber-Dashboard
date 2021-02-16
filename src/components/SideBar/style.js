import { FilterNone } from "@material-ui/icons";

const style = (theme) => {
  return {
    backGround: {
      color: "#22D1EE !important",
      paddingBottom: theme.spacing(20),
      backgroundColor: "#303A52",
      height: "1000px",
      // [theme.breakpoints.down(550)]: {
      //   width:"50px",
        
      // },
    },
    backGround2: {
      color: "#22D1EE !important",
      paddingBottom: theme.spacing(20),
      backgroundColor: "#303A52",
      height: "1000px",
      [theme.breakpoints.down(550)]: {
        display:'none',
        
      },
    },
    
    border: {
      // borderBottom: "1px solid #22D1EE",
    },
    logo: {
      textDecoration: "none",
      display: "block",
      padding: theme.spacing(1.3, 3),
      backgroundColor: "#0e153a",
      boxShadow: "",
      [theme.breakpoints.down(550)]: {
        padding: theme.spacing(1.3, 2),
      },
      [theme.breakpoints.down(350)]: {
        padding: theme.spacing(1.3, 1),
      },
    },
    logo2: {
      textDecoration: "none",
      display: "block",
      padding: theme.spacing(1.3, 1.4),
      backgroundColor: "#0e153a",
      boxShadow: "",
      
    },
    aDecoration: {
      textDecoration: "none",
      color: "#22D1EE",
      display: "block",
      padding: theme.spacing(2, 3),
      "&:hover": {
        backgroundColor: "#43425D",
      },
      [theme.breakpoints.down(550)]: {
        '& span':{
          display:"none",
        },
      },
      [theme.breakpoints.down(350)]: {
        padding: theme.spacing(2, 1.5),
      },
      
    },
    active: {
      textDecoration: "none",
      color: "#22D1EE",
      display: "block",
      padding: theme.spacing(2, 3),
      backgroundColor: "#43425D",
      [theme.breakpoints.down(550)]: {
        '& span':{
          display:"none",
        },
      },
      [theme.breakpoints.down(350)]: {
        padding: theme.spacing(2, 1.5),
      },
    },
    aDecoration2: {
      textDecoration: "none",
      color: "#22D1EE",
      display: "block",
      padding: theme.spacing(3, 2),
      [theme.breakpoints.down(900)]: {
        padding: theme.spacing(3, 1.5),
      },
      "&:hover": {
        backgroundColor: "#43425D",
      },
      '& span':{
        display:"none",
      }
    },
    active2: {
      textDecoration: "none",
      color: "#22D1EE",
      display: "block",
      padding: theme.spacing(3, 2),
      backgroundColor: "#43425D",
      [theme.breakpoints.down(900)]: {
        padding: theme.spacing(3, 1.5),
      },
      '& span':{
        display:"none",
      }
    },
    icon: {
      color: "#A5A4BF",
      paddingRight: theme.spacing(1),
      textAlign: "center",
      marginBottom: theme.spacing(-0.5),
    },
  };
};
export default style;
