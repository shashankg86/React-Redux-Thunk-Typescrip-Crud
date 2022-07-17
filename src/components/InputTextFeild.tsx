import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../store/types";

export const FormInputText = ({
  name,
  control,
  label,
  setValue,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true, maxLength: 30 }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          name={name}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          onBlur={(e) => setValue!(e.target.name, value)}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
