import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import ShoppingList from "./ShoppingList";
import ShoppingIcon from "@material-ui/icons/ShoppingCartOutlined";

const styles = (theme) => ({
  paper: {
    overflow: "scroll",
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  modal: {
    backgroundColor: "white",
  },
});

function SimpleModal(props) {
  const [showShoppingCart, setShowShoppingCart] = React.useState(false);

  function handleOpen() {
    setShowShoppingCart(true);
  }

  function handleClose() {
    setShowShoppingCart(false);
  }

  return (
    <div>
      <ShoppingIcon onClick={props.showShoppingCart} />
      <Dialog open={showShoppingCart} onClose={handleClose} scroll="paper">
        <DialogTitle>Shopping List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ShoppingList calendarRecipes={props.calendarRecipes} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="outlinedPrimary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(SimpleModal);
