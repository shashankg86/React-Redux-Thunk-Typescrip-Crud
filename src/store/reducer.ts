import { UserAction, UserState, UserActionTypes } from "./types";

export const initialState: UserState = {
  users: [
    {
      name: "Shashank",
      email: "shashankg86@gmail.com",
      phone: "7667678886",
      id: '65656'
    },
    {
      name: "Autobahn",
      email: "autobahn@gmail.com",
      phone: "898955",
      id: '65656'
    },
  ],
};

const DashboardReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USER_DETAIL:
      return {
        ...state,
        users: [...state.users, ...action.result],
      };
    case UserActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, ...[action.payload]],
      };
    case UserActionTypes.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case UserActionTypes.UPDATE_USER:
      return {
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              ...action.payload,
            };
          } else {
            return { ...user };
          }
        }),
      };
    default:
      return state;
  }
};

export default DashboardReducer;
