import React, { useEffect, useCallback } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Route, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import actions from '../store/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    conatiner: {
      paddingRight: 0,
      paddingLeft: 0,
    },
    none: {
      display: 'none',
    },
    back: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.up('md')]: {
        maxWidth: 500,
      }
    },
    appBar: {
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
      }
    }
  }),
);

const Layout: React.FC<{ path: string, exact?: boolean, children: any }> = (props: any) => {
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.API.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(actions.setUser({}));
  }, [dispatch]);

  useEffect(() => {
    if (user && user.avatar_url) {
      history.push('/user');
    } else {
      history.push('/');
    }
  }, [user, history]);

  return (
    <Route path={props.path} exact={props.exact}>
      <CssBaseline />
      <Container className={classes.conatiner} id='content'>
        <AppBar position="static">
          <Toolbar className={classes.appBar}>
            <IconButton edge="start" onClick={handleClick} className={user && user.avatar_url ? classes.back : classes.none} color="inherit" aria-label="menu">
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {user && user.name ? `USER: ${user.name}` : 'HOME'}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          {props.children}
        </div>
      </Container>
    </Route>
  );
}

export default Layout;