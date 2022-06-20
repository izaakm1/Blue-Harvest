import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: "white",
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  gridItem: {
    width: "500px",
  },
});

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { recipes: [] };

  componentWillMount() {
    let recipes = JSON.parse(localStorage.getItem("day"));
    if (recipes) this.setState({ recipes: recipes });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={16}
          direction="column"
          alignItems="center"
          justify="center"
        >
          {DAYS_OF_WEEK.map((day) => {
            if (Object.keys(this.state.recipes[day]).length !== 0) {
              return (
                <Grid item className={classes.gridItem}>
                  <Typography variant="h4" component="h3">
                    {day}
                    <Typography variant="h6">
                      {this.state.recipes[day].label}
                    </Typography>
                  </Typography>
                  <List>
                    {/* {this.state.recipes[day].ingredientLines.map((value) => (
                      <ListItem>
                        <ListItemText primary={value} />
                      </ListItem>
                    ))} */}
                  </List>
                </Grid>
              );
            } else {
              return;
            }
          })}
        </Grid>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShoppingList);
