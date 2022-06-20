import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Zoom,
  Tooltip,
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import OpenIcon from "@material-ui/icons/ExitToAppRounded";

import Menu from "../components/Menu";
import API from "../utils/API";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

const TitlebarGridList = (props) => {
  const [cols, setCols] = React.useState("");
  const { classes } = props;

  function handleWindowResize() {
    setCols(Math.floor(window.innerWidth / 282));
  }

  window.addEventListener("resize", handleWindowResize);

  React.useEffect(() => {
    handleWindowResize();
  }, []);

  function handleOpenInSite(url) {
    window.open(url);
  }

  function handleRemoveFavorite(id) {
    console.log(`removing recipe by id : ${id}`);
    API.removeFavoriteById(id).then((res) => {
      props.updateFavorites();
      console.log(res);
    });
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={130} cols={cols} className={classes.gridList}>
        {props.favorites.map((fav, index) => (
          <GridListTile key={index}>
            <img src={fav.image} alt={fav.label} />
            <GridListTileBar
              title={fav.label}
              actionIcon={
                <IconButton className={classes.icon}>
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="Remove from favorites"
                  >
                    <DeleteIcon
                      onClick={() => {
                        handleRemoveFavorite(fav.id);
                      }}
                    />
                  </Tooltip>
                  <Tooltip TransitionComponent={Zoom} title="View on Site">
                    <OpenIcon onClick={() => handleOpenInSite(fav.url)} />
                  </Tooltip>
                  <Menu
                    recipe={fav}
                    handleAddRecipeToCalendar={props.handleAddRecipeToCalendar}
                  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
