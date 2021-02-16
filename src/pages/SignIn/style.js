const style = (theme) => {
  return {

     //#region Chung
     root: {
       backgroundColor:"#303A52",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
  },
  textDefault: {
      fontFamily: 'SF Medium',
      fontSize: theme.spacing(1.1),
  },
  //#region 
  //#region bg
  groupBg: {
      width: '100%',
      height: '100%',
      position: 'relative',
  },
  bgMain: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '87%',
      [theme.breakpoints.down(`${1250}`)]: {
          display: 'none',
      }
  },
  bottomLeftDop: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      zIndex: '2',
      width: '10%',
      display: 'none',
      [theme.breakpoints.down(`${1250}`)]: {
          display: 'block',
      },
      [theme.breakpoints.down(`${461}`)]: {
          display: 'none',
      }

  },
  bottomRightDop: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: '2',
      width: '7%',
      [theme.breakpoints.down(`${461}`)]: {
          display: 'none',
      }
  },
  TopRightDop: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: '2',
      width: '7%',
      [theme.breakpoints.down(`${461}`)]: {
          display: 'none',
      }
  },
  //#endregion

  wrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: '5',
      overflow: 'hidden',
      [theme.breakpoints.down(`${461}`)]: {
          marginTop: '10%',
      }
  },
  content: {
      width: '83%',
      margin: 'auto',
      height: '100%',
      paddingTop: '25px',
      [theme.breakpoints.down(`${1250}`)]: {
          width: '70%',
      },
      [theme.breakpoints.down(`${907}`)]: {
          width: '90%',
      },
      [theme.breakpoints.down(`${461}`)]: {
          width: '100%',
      }
  },
  //#region groupLogo
  groupLogo: {

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: theme.spacing(1.4),
      textTransform: 'capitalize',
      margin: 'auto',
      [theme.breakpoints.down(`${321}`)]: {
          display: 'block',
          textAlign: 'center',
      },
      '& .MuiButton-label': {
          display: 'block',
      },
      [theme.breakpoints.down(`${461}`)]: {
          display: 'none',
      }
  },
  logoG: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      [theme.breakpoints.down(`${321}`)]: {
          alignItems: 'center',
      }
  },
  logoLight: {
      width: theme.spacing(3.8),
      height: 'auto',
  },
  nameLogo: {
      color:"#22D1EE",
      paddingLeft:theme.spacing(1),
      fontSize: theme.spacing(2.3),
      marginRight: '5px',
      [theme.breakpoints.down(`${321}`)]: {
          display: 'block',
          fontSize: theme.spacing(1.8),
      }
  },
  //#endregion
  //#region  formStyle
  formStyle: {
      width: '40%',
      marginTop: '0',
      position: 'absolute',
      top: '50%',
      right: '5%',
      transform: 'translate(-0%, -50%)',
      [theme.breakpoints.down(`${1250}`)]: {
          top: '50%',
          left: '50%',
          width: '60%',
          transform: 'translate(-50%, -50%)',
      },
      [theme.breakpoints.down(`${770}`)]: {
          width: '80%',

      },
      [theme.breakpoints.down(`${610}`)]: {
          width: '100%',

      },
      [theme.breakpoints.down(`${319}`)]: {
          top: '55%',
      }
  },
  titleForm: {
      fontSize: theme.spacing(2.3),
      textAlign: 'center',
      color: '#22D1EE',
  },
  formGroup: {
      width: '80%',
      margin: 'auto',
      padding: '10px 0',
      [theme.breakpoints.down(`${1250}`)]: {
          padding: '17px 0',
      },
      [theme.breakpoints.down(`${461}`)]: {
          width: '90%',
      }
  },

  formControl: {
      width: '100%',
      '& .MuiFormLabel-root.Mui-focused': {
          color: '#22D1EE',
      },
      '& .MuiInput-underline:after': {
          border: 'none',
      },
      '& .MuiInputLabel-formControl': {

          color: '#22D1EE',
          fontSize: theme.spacing(1.6),
          textTransform: 'capitalize',
          fontFamily: 'SF Medium',
          letterSpacing: '0.5px',
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #22D1EE',
      },
      '& .MuiInputBase-input': {
          
          width: '100%',
          marginRight: 'auto',
          textAlign: 'center',
          fontSize: '15px',
          letterSpacing: '1px',
          color: '#22D1EE',
          fontFamily: 'SF Medium',
      },
      '& .MuiSvgIcon-root': {
          width: '0.7em',
          height: '0.7em',
      },
      [theme.breakpoints.down(`${961}`)]: {

          '& .MuiInputBase-input': {
              fontSize: theme.spacing(1.2),
          },
      },
      [theme.breakpoints.down(`${768}`)]: {
          '& .MuiInputLabel-formControl': {
              fontSize: theme.spacing(1.3),

          },
      },
  },
  btnGoto: {
      color: '#22D1EE',
      textTransform: 'capitalize',
      fontSize: theme.spacing(1.1),
      padding: '6px 8px 10px',
      '&:hover': {
          backgroundColor: 'transparent',
      }
  },
  groupBtnSubmit: {
      textAlign: 'center',
  },
  BtnSubmit: {
      minWidth: '1px',
      width: '100%',
      color: '#303A52',
      textTransform: 'capitalize',
      background: ' linear-gradient(45deg, #22D1EE, #22d1ee)',
      borderRadius: '6px',
  },
  //#endregion
  divTool: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      margin: '10px',
      zIndex: '10',
      '& .MuiFab-root': {
          width: '40px',
          height: ' 40px',
      },

  }
  };
};
export default style;
