const styles = (theme) =>{
  return {
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
      
    },
    modalAdd: {
      width: "100%",
    },

    btnItemModal: {
      backgroundColor: "#22EE6D",
      color: "#fff",
      padding: theme.spacing(1, 2),
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
      },
    },
    btnItemModalClose: {
      backgroundColor: "#FF6565",
      color: "#fff",
      padding: theme.spacing(1, 2),
      marginLeft: theme.spacing(1),
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
      },
    },

    btnItemModalEdit:{
      backgroundColor: "#22D1EE",
      color: "#fff",
      padding: theme.spacing(1, 2),
      marginLeft: theme.spacing(1),
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
      },
    },
    paperRigth:{
      vvisibility:"collapse",
    },

    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    // avatar: {
    //   backgroundColor: red[500],
    // },
    accordiondetails:{
      textAlign:"left",
      display:"block",
    },
    name:{
      color:"#43425D",
      fontSize:"15px",
      display:"inline-block",
      fontWeight:"bold",
      marginBlockEnd: "unset",
    },
    date:{
      color:"#22EE6D",
      fontSize:"15px",
      display:"inline-block",
      fontWeight:"bold",
      marginBlockEnd: "unset",
      marginBlockStart: "unset",
    }
  }
 }

 export default styles;
