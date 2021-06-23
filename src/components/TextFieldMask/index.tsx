import InputMask from 'react-input-mask';

import { OutlinedTextFieldProps } from '@material-ui/core';

import { TextField } from '@material-ui/core';

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
  value: string;
}

export function TextFieldMask({
  mask,
  value,
  onChange,
  ...props
}: TextFieldMaskProps) {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
}
