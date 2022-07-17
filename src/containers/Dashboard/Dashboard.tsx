import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Paper, styled, Button } from "@mui/material";
import { connect } from "react-redux";
import {
  IDahsboardProps,
  IViewForm,
  Users,
  UserState,
} from "../../store/types";
import StyledCard from "../../components/Card";
import DialogComponent from "../../components/Dialog";
import { PlusOne } from "@mui/icons-material";
import { color1, color2, color3 } from "../../constants/UserConstants";
import NoUserFound from "../../assets/images/no_data.png";
import {
  addUser,
  getUserDetail,
  removeUser,
  updateUser,
} from "../../store/action";

export const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  background: "transparent",
  width: "100%",
  boxShadow: "none",
  maxWidth: "300px",
}));

const Dashboard = ({ users, dispatch }: IDahsboardProps) => {
  const [openDialog, setShowDialog] = useState<boolean>(false);
  const [viewFormType, setViewFormType] = useState<IViewForm>({ type: "" });

  useEffect(() => {
      dispatch(getUserDetail());
  }, []);

  const closeDialog = () => {
    setShowDialog(!openDialog);
  };

  const addUsers = (formData: Users) => {
    dispatch(addUser(formData));
    setShowDialog(!openDialog);
  };
  const openForm = (type: string, data?: Users, id?: string) => {
    setViewFormType(type === "ADD" ? { type } : { type, data, id });
    setShowDialog(!openDialog);
  };

  const updateUsers = (formData: Users) => {
    dispatch(updateUser(formData));
    setShowDialog(!openDialog);
  };
  const deleteUser = (id: string) => {
    dispatch(removeUser(id));
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        background: color3,
        height: "100vh",
        overflowY: "auto",
        marginBottom: "1rem",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid width={"100%"} item md={6}>
          <Item>
            <Typography
              color="floralwhite"
              alignContent={"flex-end"}
              variant="h1"
            >
              <strong>Crud</strong>
            </Typography>
          </Item>
        </Grid>
        <Grid width={"100%"} item md={6}>
          <Typography
            textAlign={"right"}
            padding={"2rem"}
            alignContent={"flex-end"}
            variant="h2"
            onClick={() => setShowDialog(true)}
          >
            <Button
              onClick={() => openForm("Add")}
              variant="contained"
              color="success"
              startIcon={<PlusOne />}
            >
              Add User
            </Button>
          </Typography>
        </Grid>
        {users.length > 0 ? (
          users.map((user, idx) => {
            return (
              <Grid key={idx} item xs={4}>
                <Item>
                  <StyledCard
                    openForm={openForm}
                    deleteUser={deleteUser}
                    user={user}
                    color={idx + 1 / 2 === 0 ? color1 : color2}
                  />
                </Item>
              </Grid>
            );
          })
        ) : (
          <Grid width={"100%"} item md={12}>
            <img src={NoUserFound} width="100%" height={"700px"} />
          </Grid>
        )}
      </Grid>
      <DialogComponent
        bgColor={color3}
        handleClose={closeDialog}
        openDialog={openDialog}
        viewType={viewFormType}
        addUser={addUsers}
        editUsers={updateUsers}
      />
    </Box>
  );
};

export const mapStateToProps = (state: UserState) => ({
  users: state.users,
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(Dashboard);
