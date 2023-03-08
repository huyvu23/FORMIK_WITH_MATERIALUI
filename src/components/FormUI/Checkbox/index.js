import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const CheckboxWrapper = ({ name, label, legend, ...otherProps }) => {
  const [field, mata] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  const configControl = {};

  if (mata && mata.touched && mata.error) {
    configControl.error = true;
  }

  return (
    <>
      <FormControl>
        <FormLabel component="legend">{legend}</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...configCheckbox} />}
            label={label}
          />
        </FormGroup>
      </FormControl>
    </>
  );
};
export default CheckboxWrapper;
