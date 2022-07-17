import { DeleteSweepRounded, EditRoadOutlined } from "@mui/icons-material";
import { Paper, Typography, ButtonBase, Grid, Fab } from "@mui/material";
import userLogo from "../assets/images/user.png";
import { ICardProps } from "../store/types";

export default function StyledCard(props: ICardProps) {
  const editUser = (formData: ICardProps) => {
    const { openForm, color, user } = formData;
    props.openForm("Edit", user);
  };

  return (
    <Paper
      sx={{
        p: 2,
        flexGrow: 1,
        background: props.color,
        margin: "0 2rem",
        width: "100%",
        wordBreak: "break-word",
      }}
    >
      <Grid container spacing={2} columnSpacing={2}>
        <Grid item style={{ width: "100%" }}>
          <ButtonBase>
            <img width="120px" alt="complex" src={userLogo} />
          </ButtonBase>
        </Grid>
        <Grid item xs container>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                {props?.user.name}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {props?.user.email}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {props?.user.phone}
              </Typography>
            </Grid>
            <Grid item>
              <Fab
                onClick={() => editUser(props)}
                style={{ margin: "3px" }}
                variant="extended"
              >
                <EditRoadOutlined />
                Edit
              </Fab>
              <Fab
                onClick={() =>
                  props?.deleteUser && props?.deleteUser(props?.user?.id!)
                }
                style={{ margin: "3px" }}
                variant="extended"
              >
                <DeleteSweepRounded />
                Delete
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
