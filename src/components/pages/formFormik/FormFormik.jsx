import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormFormik = () => {
  // const [user, setUser] = useState({
  //   nombre: "",
  //   email: "",
  //   contraseña: "",
  //   confirmarContraseña: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const handleChange = (e) => {
  //   setUser({...user, [e.target.name]: e.target.value})
  // };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña: "",
      confirmarContraseña: "",
    },
    onSubmit: (data) => {
      console.log(data);
      // endpoint
      // login
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo requerido")
        .min(5, "Debe tener al menos 5 caracteres"),
      email: Yup.string()
        .email("Debes ingresar un email valido")
        .required("Campo requerido"),
      contraseña: Yup.string()
        .required("Campo requerido")
        .min(6, "min 6")
        .max(15, "max 15")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
          "Debe tener una mayusula y bl a bla bla "
        ),
      confirmarContraseña: Yup.string()
        .required("Campo requerido")
        .oneOf([Yup.ref("contraseña")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  console.log(errors);

  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "20px",
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="contraseña"
          onChange={handleChange}
          error={errors.contraseña ? true : false}
          helperText={errors.contraseña}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          name="confirmarContraseña"
          onChange={handleChange}
          error={errors.confirmarContraseña ? true : false}
          helperText={errors.confirmarContraseña}
        />
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button type="submit" variant="contained" sx={{ width: 200 }}>
            Enviar
          </Button>
        </Box>
      </form>
    </div>
  );
};
