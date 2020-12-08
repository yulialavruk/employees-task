import { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 65));

const useStyles = makeStyles((theme) => ({
  box: {
    height: "100%",
  },
}));

export const EmployeesList = ({ employees, setChecked, checked }) => {
  const classes = useStyles();

  const filter = (letter) =>
    employees.filter((user) => user.lastName[0] === letter);

  const handleToggle = useCallback(
    (value) => {
      return () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
      };
    },
    [checked]
  );
  return (
    <Grid container spacing={3}>
      {alphabet.map((letter) => (
        <Grid key={letter} item xs={3}>
          <Paper className={classes.box} elevation={3}>
            <h2>{letter}</h2>
            <List dense>
              {filter(letter).map((employee) => (
                <ListItem key={employee.id}>
                  <ListItemText>{`${employee.lastName} ${employee.firstName}`}</ListItemText>
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(employee)}
                      checked={checked.indexOf(employee) !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
