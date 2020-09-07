import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import actions from '../store/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: 20,
    },
    button: {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  }),
);

const topFive: string[] = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = (userName: string) => () => {
    dispatch(actions.getUser(userName));
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h2" gutterBottom>
        Top 5 GitHub Users
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Tap the username to see more information
      </Typography>
      {topFive.map(user => (<Button className={classes.button} key={user} onClick={handleClick(user)} variant="contained" color="primary">
        {user}
      </Button>))}
    </div>
  );
}