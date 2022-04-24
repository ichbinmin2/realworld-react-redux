//reducer: state, action => state

// type State = {
//   value: number;
// };

// type Action = { type: "counter/incremented" } | { type: "counter/decremented" };

// const INCREMENTED = "counter/incremented";

// export const incremented = () => ({ type: INCREMENTED });

// function counterReducer(state: State = { value: 0 }, action: Action): State {
//   switch (action.type) {
//     case INCREMENTED:
//       return { value: state.value + 1 };
//     case "counter/decremented":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// export default counterReducer;
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;

console.log(incremented());
