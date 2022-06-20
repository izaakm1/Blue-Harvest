import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ShoppingIcon from "@material-ui/icons/ShoppingCartOutlined";
import React from "react";
import ShoppingList from "./ShoppingList";

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
  const { showShoppingList, setShowShoppingList, calendarRecipes } = props;

  function handleClose() {
    setShowShoppingList(false);
  }

  return (
    <div>
      <ShoppingIcon onClick={showShoppingList} />
      <Dialog open={showShoppingList} onClose={handleClose} scroll="paper">
        <DialogTitle>Shopping List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ShoppingList calendarRecipes={calendarRecipes} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(SimpleModal);
