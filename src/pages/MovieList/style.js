const style = (theme) => {
  return {
    left: {
      height: "100%",
      color: "#22D1EE",
      position: "fixed",
      width:"20%",
    },
    right: {
      color: "#43425D",
      backgroundColor: "#dee1ec",
      marginLeft: "20%",
      width:"80%",
    },
    left2: {
      height: "100%",
      color: "#22D1EE",
      position: "fixed",
      width:"5%",
      [theme.breakpoints.down(900)]:{
        width:"10%",
      },
      [theme.breakpoints.down(550)]:{
        width:0,
      }
    },
    right2: {
      color: "#43425D",
      backgroundColor: "#dee1ec",
      marginLeft: "5%",
      width:"100%",
      [theme.breakpoints.down(900)]:{
        marginLeft: "10%",
      },
      [theme.breakpoints.down(550)]:{
        marginLeft: 0,
      }
    },
    content: {
      padding: theme.spacing(4, 6),
      [theme.breakpoints.down(900)]:{
        padding: theme.spacing(3, 4),
      },
      [theme.breakpoints.down(550)]:{
        padding: theme.spacing(2, 3),
      }
    },
    contentItem: {},
    item: {
      display: "flex",
      backgroundColor: "#fff",
      padding: theme.spacing(1),
    },
    itemIcon: {
      border: "1px solid black",
      borderRadius: "50%",
      borderColor: "#22D1EE",
      height: theme.spacing(5),
      width: theme.spacing(5),
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      color: "#22D1EE",
    },

    // MOVIEITEM
    movieItem: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(3, 5),
      backgroundColor: "#fff",
    },
    topItem: {
      justifyContent: "space-between",
      display: "flex",
    },
    btnItem: {
      backgroundColor: "#22EE6D",
      color: "#fff",
      padding: theme.spacing(0, 1),
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
      },
      '& p':{
        display:"inline-block",
        marginBlockStart:0,
        marginBlockEnd:0,
      },
      [theme.breakpoints.down(550)]:{
      '& p':{
        display:'none',
      '& .MuiButton-root':{
          minWidth:0
        }
      },
      
      }
    },
    table: {
      marginTop: theme.spacing(5),
      // height: 400,
      width: "100%",
    },
    pagination:{
      padding:theme.spacing(3,2),

    }
    

    //END RETURN
  };
};
export default style;
