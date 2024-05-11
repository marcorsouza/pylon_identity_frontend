interface AuthInputProps {
    fieldname: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    autoFocus?: boolean;
  }