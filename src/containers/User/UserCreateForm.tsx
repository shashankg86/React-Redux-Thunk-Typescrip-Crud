import { Paper, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../components/InputTextFeild";
import { color1, defaultValues } from "../../constants/UserConstants";
import { IUserFormProps, Users } from "../../store/types";

export const UserForm = ({
  viewType,
  addUser,
  editUsers: UpdateUser,
}: IUserFormProps) => {
  const methods = useForm<Users>({
    defaultValues: defaultValues,
  });
  const { handleSubmit, reset, control, getValues, setValue } = methods;

  useEffect(() => {
    if (viewType?.data && viewType?.type === "Edit") {
      const { IconPerformance, color, ...rest } = viewType.data;
      const formData = { ...rest };
      for (const [key, value] of Object.entries(formData as Partial<Users>)) {
        setValue(key as any, value, { shouldDirty: true });
      }
    }
  }, [viewType?.data]);

  const onSubmit = (formData: Users) => {
    if (addUser && viewType?.type === "Add") {
      addUser({ ...formData, id: String(Math.random()) });
    }
    if (UpdateUser && viewType?.type === "Edit") UpdateUser({ ...formData });
  };
  const setFeildValue = (name: any, value: string) => {
    setValue(name, value, { shouldDirty: true, shouldTouch: true });
  };
  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
        background: color1,
      }}
    >
      <Typography variant="h6">
        {viewType.type === "Edit" ? "Edit User" : "Add User"}
      </Typography>

      <FormInputText
        name="name"
        control={control}
        label="Name"
        setValue={setFeildValue}
      />
      <FormInputText
        name="email"
        control={control}
        label="Email"
        setValue={setFeildValue}
      />
      <FormInputText
        name="phone"
        control={control}
        label="Phone No:"
        setValue={setFeildValue}
      />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </Paper>
  );
};
