import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    todos_ar: [
        { name: "go home", time: "15:40", id: 1 },
        { name: "go sleep", time: "22:30", id: 2 }
    ]
}

const todosSlice = createSlice({
    name: "todos",
    initialState: initValue,
    reducers: {
        addTodo: (state, actions) => {
            state.todos_ar.push(actions.payload.todo);
        },
        resetTodos: (state, actions) => {
            state.todos_ar = [];
        },
        deleteSingleTodo: (state, actions) => {
            state.todos_ar.map((item, i) => {
                if (item.id == actions.payload.id) {
                    state.todos_ar.splice(i, 1)
                }
            })
        }
    }
})

export const { addTodo, resetTodos, deleteSingleTodo } = todosSlice.actions;
export default todosSlice.reducer;

