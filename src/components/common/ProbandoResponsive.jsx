import { Grid, Typography } from "@mui/material";

const ProbandoResponsive = () => {
  return (
    <div>

      <Grid container>

        <Grid item  xs={12} sm={6} md={4} sx={{backgroundColor: {xs: "red", sm: "peru"}, fontSize: {xs: "3rem", sm:"1rem"}}}>
          <Typography variant="h3" sx={{color: {xs: "orange", sm:"blue"}}}>Primera caja</Typography>
        </Grid>

        <Grid item  xs={12} sm={6} md={4} sx={{backgroundColor: "blue"}}>
          <h3>Segunda caja</h3>
        </Grid>

        <Grid item  xs={12} sm={6} md={4} sx={{backgroundColor: "green"}}>
          <h3>Tercera caja</h3>
        </Grid>

      </Grid>
      
    </div>
  );
};

export default ProbandoResponsive;
