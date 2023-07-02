import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldError, FieldValues, UseControllerProps } from 'react-hook-form';
import { Controller } from 'react-hook-form';

export interface ContolledFieldProps<T extends FieldValues>
  extends UseControllerProps<T> {
  error: FieldError | undefined;
}

type NewTextFieldProps = Omit<TextFieldProps, 'error'>;

function Input<T extends FieldValues>(
  props: NewTextFieldProps & ContolledFieldProps<T>,
) {
  const { name, control, label, error, ...restProps } = props;

  const hasError = Boolean(error);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          required
          error={hasError}
          onChange={onChange}
          helperText={hasError && error?.message}
          id="outlined-required"
          label={label}
          defaultValue=""
          placeholder="placeholder"
          InputLabelProps={{ shrink: true }}
          variant="standard"
          sx={{
            '& label': {
              fontSize: '14px',
              color: 'white',
            },
            '& input': {
              color: 'white',
            },
            '& input::placeholder': {
              color: 'hsla(0, 0%, 100%, 1)',
              fontSize: '16px',
              lineHeight: '24.8px',
              opacity: '70%',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'white',
            },
          }}
          {...restProps}
        />
      )}
    />
  );
}

export default Input;
