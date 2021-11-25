import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { MenuItem } from "@material-ui/core";
import Burger from "../components/Burger";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    marginLeft: "240px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Burger />
        </IconButton>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h6" className={classes.title}>
            About
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
