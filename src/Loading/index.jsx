import { makeStyles, withStyles } from '@material-ui/core';
import React, { memo } from 'react';
import logoLight from '../asset/images/LogoLight.svg';

const useStyles = makeStyles(() => ({
  
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '86',
},
logoLight: {
    animation: `shake 1s linear infinite`,
},

}));

const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}
        >
            <div>
                <img src={logoLight} alt="logoLight"  className={classes.logoLight}/>
            </div>
       
        </div>
    );
};

export default memo(Loading);