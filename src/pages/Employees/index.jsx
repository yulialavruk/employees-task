import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { UseEmployees } from "./useEmployees";
import { EmployeesList } from "./EmployeesList";
import { BirthdayList } from "./BirthdayList";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const Employees = () => {
  // const classes = useStyles();
  const employees = UseEmployees();
  const [checked, setChecked] = useState([]);

  return (() => {
    if (employees.isLoading) {
      return <div>Loading...</div>;
    }

    if (employees.isError) {
      return <div>Error</div>;
    }
    return (
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography variant="h5">Employees</Typography>
          <EmployeesList
            employees={employees.data}
            setChecked={setChecked}
            checked={checked}
            // handleToggle={handleToggle}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">Employees birthday</Typography>
          <BirthdayList checked={checked} />
        </Grid>
      </Grid>
    );
  })();
};
