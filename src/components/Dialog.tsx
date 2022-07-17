import react, { forwardRef } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { UserForm } from "../containers/User/UserCreateForm";
import { IDialogProps } from "../store/types";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogComponent = ({
  openDialog,
  viewType,
  handleClose,
  addUser,
  editUsers,
}: IDialogProps) => {
  const formProps = { addUser, editUsers, viewType };
  return (
    <Dialog
      fullScreen
      open={openDialog}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
            Close
          </IconButton>
        </Toolbar>
      </AppBar>
      <UserForm {...formProps} />
    </Dialog>
  );
};
export default DialogComponent;
