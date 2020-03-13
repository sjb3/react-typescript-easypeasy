import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Container from '@material-ui/core/Container';
import { Home } from '../Home';
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" />
          <img
            src="https://img.icons8.com/doodle/48/000000/hamburger.png"
            alt="hamburger icon"
          />
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
