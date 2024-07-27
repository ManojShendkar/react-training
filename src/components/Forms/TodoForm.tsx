import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FilledInput,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface ITodoData {
  task_name: string;
  description: string;
  priority: number | "";
  due_date: Date | null;
}

export default function TodoForm() {
  const [todoData, setTodoData] = useState<ITodoData>({
    task_name: "",
    description: "",
    priority: "",
    due_date: null,
  });

  const handleChange = (event: any) => {
    setTodoData((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const priority_levels = {
    1: "Very Importent",
    2: "Importent",
  };
  return (
    <div>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Task Name</InputLabel>
        <FilledInput
          id="task_name"
          name="task_name"
          value={todoData.task_name}
          onChange={handleChange}
          defaultValue="Composed TextField"
        />
      </FormControl>

      <br />
      <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-filled-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name="priority"
          value={todoData.priority.toString()}
          onChange={handleChange}
        >
          <MenuItem value="">Select Priority</MenuItem>
          {Object.entries(priority_levels).map(([priority, name]) => (
            <MenuItem value={priority} key={priority}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Basic date picker" />
        </LocalizationProvider>
      </FormControl>
    </div>
  );
}
