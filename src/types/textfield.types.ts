export type TextFieldProps = {
  label: string | undefined;
  id: string | undefined;
  placeholder: string | undefined;
  type: string | undefined;
  value: string | undefined;
  name: string | "";
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
  errors: string | undefined;
  className: string | undefined;
  InputProps?: string | undefined;
  otherProps?: any;
};
