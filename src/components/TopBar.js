import React from "react";
import { useState, useContext } from "react";
import { Dropdown, Grid, Form } from "semantic-ui-react";
import { CategoryContext } from "../contexts/CategoryContext";
import { MonthContext } from "../contexts/MonthContext";

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

  const [months] = useState([
    { key: "1", text: "January", value: "01" },
    { key: "2", text: "February", value: "02" },
    { key: "3", text: "March", value: "03" },
    { key: "4", text: "April", value: "04" },
    { key: "5", text: "May", value: "05" },
    { key: "6", text: "June", value: "06" },
    { key: "7", text: "July", value: "07" },
    { key: "8", text: "August", value: "08" },
    { key: "9", text: "September", value: "09" },
    { key: "10", text: "October", value: "10" },
    { key: "11", text: "November", value: "11" },
    { key: "12", text: "December", value: "12" },
  ]);

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
              placeholder="Select month"
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
