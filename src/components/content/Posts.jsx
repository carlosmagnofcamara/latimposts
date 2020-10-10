import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Users from "./Users";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

const Posts = ({id, post, title, body, users}) => {
    const classes = useStyles();

  return(
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        {users.map((data)=>{
            if(data.id === post.userId) return <Users key={data.id} name={data.name} email={data.email} />
        })}
          <Typography className={classes.secondaryHeading} component={Link} to={{pathname: `posts/${id}`}} >{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    {body.slice(0,100)}
    </AccordionDetails>
  </Accordion>
  );
};
export default Posts;