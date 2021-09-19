import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Buttons = () => {
  return (
    <ButtonGroup variant="contained" size="large">
      <Button color="secondary"  startIcon={<SaveIcon color="primary"/>}>Save</Button>
      <Button color="primary"  endIcon={<DeleteIcon color="secondary"/>}>Delete</Button>
    </ButtonGroup>
  );
};

export default Buttons;
