import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

// make a new context
const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

// create a button that calls a context function to set a new open state when clicked
const useStyles = makeStyles((theme) => ({
  appBar: {
    fontSize: "15px",
    width: "30%",
    marginTop: "25px",
  },
}));

const Button = () => {
  const ctx = useContext(MyContext);
  return (
    <button onClick={ctx.toggleMenu}>
      <MenuIcon />
    </button>
  );
};

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext);
  const classes = useStyles();

  return (
    <Menu
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
      <a id="home" className={classes.appBar} href="/">
        Home
      </a>
      <a id="about" className={classes.appBar} href="/about">
        About
      </a>
      <a id="contact" className={classes.appBar} href="/contact">
        Contact
      </a>
      <a className={classes.appBar} href="">
        Settings
      </a>
    </Menu>
  );
};

// default export here
const Burger = () => {
  return (
    <MyProvider>
      <div>
        <Button />
        <Navigation />
      </div>
    </MyProvider>
  );
};

export default Burger;
