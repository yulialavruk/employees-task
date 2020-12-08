import { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getMonthOfBirthday = (date) =>
  new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(date));

const groupEmployeesByMonth = (array) => {
  const data = array.reduce((acc, item) => {
    const month = getMonthOfBirthday(item.dob);
    if (!acc[month]) acc[month] = { month, employees: [item] };
    else acc[month].employees.push(item);
    return acc;
  }, {});

  return Object.values(data);
};

const sortByMonth = (array) =>
  array.sort((a, b) => MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month));

const getSortGroups = (array) => sortByMonth(groupEmployeesByMonth(array));

export const BirthdayList = ({ checked }) => {
  const [chekedGroup, setCheckedGroup] = useState([]);

  useEffect(() => {
    if (checked.length) {
      setCheckedGroup(getSortGroups(checked));
    } else setCheckedGroup([]);
  }, [checked]);

  return chekedGroup.length ? (
    chekedGroup.map((group) => (
      <div key={group.month} className="">
        <h2>{group.month}</h2>
        <List>
          {group.employees.map((employee) => (
            <ListItem key={employee.id}>
              <ListItemText className="employee-birthday-name">
                {employee.lastName} {employee.firstName} - {employee.dob}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    ))
  ) : (
    <p>No selected employees</p>
  );
};
