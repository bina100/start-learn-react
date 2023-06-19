import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import About from "./component/About";
import Form from "./component/Form";
import Home from "./component/Home";
import AppEmp from "./component_employee/appEmp";
import Header from "./component_static/Header";
import Counter from "./component_redux/counter";
import counterSlice from "./features/counterSlice";
import todosSlice from "./features/todoSlice";

import './App.css';
import AppTodo from "./component_todo_list/appTodo";

const myStore = configureStore({
  reducer: {
    counterSlice,
    todosSlice
  }
})

function App() {
  return (
    <BrowserRouter>
      <Provider store={myStore}>
        <Header />
        {/* outlet */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<AppEmp />} />
          <Route path="/employee/:company" element={<AppEmp />} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todos" element={<AppTodo />} />

          <Route path="*" element={<h2>Page 404, not found!</h2>} />
        </Routes>
        {/* outlet */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;