import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
const ProbandoMaterial = () => {

    const [ mostrarContraseña , setMostrarContraseña ] = useState( false )

     const cambiarInput  = ()=>{
        setMostrarContraseña( !mostrarContraseña )
     }

  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" size="small" >
        Sumar
      </Button>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={mostrarContraseña ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={cambiarInput}
                  edge="end"
                >
                  {mostrarContraseña ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
            
    </div>
  );
};

export default ProbandoMaterial;
