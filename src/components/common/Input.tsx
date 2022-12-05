import { ChangeEvent } from '../../types/interfaces';
interface InputProps {
  placeholder: string;
  onChange: any;
  type?: string;
  style?: any;
  name?: string;
}

export const Input = ({ placeholder, type, style, name, onChange }: InputProps) => {
  const inputStyle = {
    borderRadius: 5,
    height: 30,
    width: '100%',
    borderColor: '#212121',
    padding: 4
  }

  return (
    <input 
      onChange={(event: ChangeEvent) => onChange(event)} 
      type={type} 
      style={{ ...inputStyle, ...style }}
      name={name}
      placeholder={placeholder} />
  );
}
