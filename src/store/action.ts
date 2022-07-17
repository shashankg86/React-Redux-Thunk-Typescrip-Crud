import { Dispatch } from "redux";
import { UserActionTypes, Users, UserAction } from "./types";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";
const mapUserData = (users: Users[]) =>
  users.map(({ email, name, phone, id }) => ({
    email,
    name,
    phone,
    id,
  }));
export const addUser = (userData: Users) => {
  return async (dispatch: Dispatch) => {
    return await axios.post(url, JSON.stringify(userData)).then(({}) => {
      const action: UserAction = {
        type: UserActionTypes.ADD_USER,
        payload: userData,
      };
      dispatch(action);
    });
  };
};

export const removeUser = (id: string) => {
  return async (dispatch: Dispatch) => {
    return await axios.delete(url + `/${id}`).then(({}) => {
      const action: UserAction = {
        type: UserActionTypes.REMOVE_USER,
        id,
      };
      dispatch(action);
    });
  };
};

export const updateUser = (userData: Users) => {
  return async (dispatch: Dispatch) => {
    await axios
      .put(`${url}/${userData?.id}`, JSON.stringify(userData))
      .then(() => {
        const action: UserAction = {
          type: UserActionTypes.UPDATE_USER,
          payload: userData,
        };
        dispatch(action);
      })
      .catch(() => {
        const action: UserAction = {
          type: UserActionTypes.UPDATE_USER,
          payload: userData,
        };
        dispatch(action);
      });
  };
};

export const getUserDetail = () => {
  return async (dispatch: Dispatch) => {
    return await axios.get<Users[]>(`${url}`).then(async ({ data }) => {
      const response = mapUserData(data);
      const action: UserAction = {
        type: UserActionTypes.GET_USER_DETAIL,
        result: response,
      };
      dispatch(action);
    });
  };
};
