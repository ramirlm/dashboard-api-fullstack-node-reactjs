import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [scans, setScans] = useState([]);

  useEffect(() => {
    async function loadScans() {
      const response = await axios.get('http://localhost:9000/scans');
  
      setScans(response.data);
    }
    
    loadScans();
  })

  return (
    <Typography className={classes.root} color="textSecondary">
      {scans}
      <Link href="https://material-ui.com/getting-started/templates/">templates</Link> on the
      Material-UI documentation.
    </Typography>
  );
}