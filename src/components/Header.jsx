import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const changePageComment = () =>{
    localStorage.removeItem('pageComment')
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      {props.titulo}
    </Typography>
    {props.bool ? (
      <Button color="inherit" onClick={()=>changePageComment()} component={Link} to='/' >Back</Button>
    )
  :
  (
    false
  )}
    
  </Toolbar>
</AppBar>
    </div>
  );
};
export default Header;
