import TextField from '@mui/material/TextField';

interface Props {
  vf: number,
  setVf: (vf: number) => void
}

const Input = ({ vf, setVf }: Props) => {
  return (
    <TextField
      label="Target Volforce"
      helperText={isNaN(vf) ? "Only numbers are allowed" : ""}
      variant="filled"
      onChange={(e) => setVf(Number(e.target.value))}
      error={isNaN(vf)}
    />
  )
}

export default Input;
