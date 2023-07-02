import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FieldValues } from 'react-hook-form';

import Input, { ContolledFieldProps } from 'components/TextFields/TextField';
import { EyeOffIcon } from '../../icons/hidden';

function PasswordField<T extends FieldValues>(props: ContolledFieldProps<T>) {
  const { control, error, name } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      name={name}
      control={control}
      error={error}
      id="password"
      label="Password"
      placeholder="******************"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <EyeOffIcon /> : <EyeOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordField;
