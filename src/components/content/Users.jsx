import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
  }));

const Users = ({name, email}) => {
    const classes = useStyles();
  return  <Typography className={classes.heading}>{name}{` <${email}>`}</Typography>;
};
export default Users;