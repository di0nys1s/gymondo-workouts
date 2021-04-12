import React from "react";
import { useContext } from "react";
import { Dropdown, Grid, Form } from "semantic-ui-react";
import { CategoryContext } from "../contexts/CategoryContext";
import { MonthContext } from "../contexts/MonthContext";

const handleMonthNames = (monthDropdown, i) => {
  switch (i) {
    case 1:
      monthDropdown.text = "January";
      break;
    case 2:
      monthDropdown.text = "February";
      break;
    case 3:
      monthDropdown.text = "March";
      break;
    case 4:
      monthDropdown.text = "April";
      break;
    case 5:
      monthDropdown.text = "May";
      break;
    case 6:
      monthDropdown.text = "June";
      break;
    case 7:
      monthDropdown.text = "July";
      break;
    case 8:
      monthDropdown.text = "August";
      break;
    case 9:
      monthDropdown.text = "September";
      break;
    case 10:
      monthDropdown.text = "October";
      break;
    case 11:
      monthDropdown.text = "November";
      break;
    case 12:
      monthDropdown.text = "December";
      break;
    default:
    // do nothing
  }
};

const handleCurrenToNextYearMonths = (currentMonth) => {
  const monthsCurrentToNextYear = [];
  for (let i = currentMonth; i < currentMonth + 12; i++) {
    let monthDropdown = {
      key: "",
      text: "",
      value: "",
    };

    if (i < 10) {
      monthDropdown.value = `0${i}`;
      monthDropdown.key = `${i}`;
      handleMonthNames(monthDropdown, i);
    } else if (i >= 10 && i <= 12) {
      monthDropdown.value = `${i}`;
      monthDropdown.key = `${i}`;
      handleMonthNames(monthDropdown, i);
    } else if (i > 12) {
      monthDropdown.key = `${i - 12}`;
      monthDropdown.value = `0${i - 12}`;
      handleMonthNames(monthDropdown, i - 12);
    }

    monthsCurrentToNextYear.push(monthDropdown);
  }
  return monthsCurrentToNextYear;
};

function TopBar() {
  const categories = [
    { key: "c1", text: "c1", value: "c1" },
    { key: "c2", text: "c2", value: "c2" },
    { key: "c3", text: "c3", value: "c3" },
    { key: "c4", text: "c4", value: "c4" },
    { key: "c5", text: "c5", value: "c5" },
    { key: "c6", text: "c6", value: "c6" },
    { key: "c7", text: "c7", value: "c7" },
  ];

  const date = new Date();
  const currentMonth = date.getMonth() + 1;

  const months = handleCurrenToNextYearMonths(currentMonth);
  const [selectedCategories, setSelectedCategories] = useContext(
    CategoryContext
  );
  const [selectedMonth, setSelectedMonth] = useContext(MonthContext);

  return (
    <div className="top-bar">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Form.Select
              clearable
              multiple
              fluid
              selection
              options={categories}
              placeholder="Select categories"
              name="categories"
              value={selectedCategories}
              onChange={(e, { value }) => {
                setSelectedCategories(value);
              }}
            />
          </Grid.Column>
          <Grid.Column>
            <Dropdown
              clearable
              fluid
              search
              selection
              options={months}
              placeholder="Select start date"
              name="month"
              value={selectedMonth}
              onChange={(e, { value }) => {
                setSelectedMonth(value);
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default TopBar;
