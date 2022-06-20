import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import classNames from "classnames";
import React from "react";
import GroceryPopup from "./GroceryPopup";
import Image from "./img/Logo.png";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 150,
    padding: 5,
  },
});

const MiniDrawer = (props) => {
  const { classes } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [showShoppingList, setShowShoppingList] = React.useState(false);

  function handleDrawerOpen() {
    setIsOpen(true);
  }

  function handleDrawerClose() {
    setIsOpen(false);
  }

  function handleShowShoppingList() {
    console.log({ showShoppingList });
    setShowShoppingList(!showShoppingList);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar disableGutters={true}>
          <img className={classes.image} src={Image} alt="blank" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
        open={isOpen}
        onMouseOver={handleDrawerOpen}
        onMouseOut={handleDrawerClose}
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <List>
          {["Favorites", "Shopping List", "Log Out"].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                if (text === "Favorites") {
                  props.handleView(text);
                }
                if (text === "Log Out") {
                  props.handleLogout();
                }
                if (text === "Shopping List") {
                  handleShowShoppingList();
                }
              }}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <FavoriteIcon />
                ) : index === 1 ? (
                  <GroceryPopup
                    calendarRecipes={props.calendarRecipes}
                    showShoppingList={showShoppingList}
                    setShowShoppingList={setShowShoppingList}
                  />
                ) : (
                  <ExitToApp />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
export default withStyles(styles, { withTheme: true })(MiniDrawer);
