import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// icons
// edit pencil
import EditIcon from "@mui/icons-material/Edit";
// share
import IosShareIcon from "@mui/icons-material/IosShare";
// search
import SearchIcon from "@mui/icons-material/Search";
// delete
import DeleteIcon from "@mui/icons-material/Delete";

export default function TriggersTooltips() {

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item>
          {/* edit */}
          <Tooltip disableFocusListener title="Edit">
            <Button>
              <EditIcon />
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          {/* share */}
          <Tooltip disableHoverListener title="IosShareIcon">
            <Button>
              <IosShareIcon />
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          {/* search */}
          <Tooltip disableFocusListener disableTouchListener title="SearchIcon">
            <Button>
              <SearchIcon />
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          {/* delete */}
          <Tooltip title="DeleteIcon">
            <Button>
              <DeleteIcon />
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}
