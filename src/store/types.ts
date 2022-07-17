import { Dispatch } from "redux";

export enum UserActionTypes {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
  UPDATE_USER = "UPDATE_USER",
  GET_USER_DETAIL = "GET_USER_DETAIL",
}
export interface Users {
  name: string;
  id: string;
  email: string;
  phone: string;
  color?: string;
  IconPerformance?: any;
}

export interface IViewForm {
  type: string;
  data?: Users;
  id?: string;
}

export interface IDahsboardProps {
  users: Users[];
  dispatch: Dispatch<any>;
}

export interface IUserFormProps {
  viewType: IViewForm;
  addUser?: (formData: Users) => void;
  editUsers?: (formData: Users) => void;
}

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: (name: any, value: string) => void;
  disable?: boolean;
}

export interface ICardProps {
  user:Users;
  color?: string;
  openForm: (type: string, data: Users, id?: string) => void;
  deleteUser?: (id:string) => void;
}

export interface IDialogProps {
  renderComponent?: React.ReactNode;
  handleClose: () => void;
  addUser?: (formData: Users) => void;
  editUsers?: (formData: Users) => void;
  openDialog: boolean;
  viewType: IViewForm;
  id?: number;
  bgColor?: string;
}

interface UsersFetchRequestAction {
  type: UserActionTypes.GET_USER_DETAIL;
  result: Users[];
}
interface UsersRemoveRequestAction {
  type: UserActionTypes.REMOVE_USER;
  id: string;
}
interface UsersCreateRequestAction {
  type: UserActionTypes.ADD_USER;
  payload: Users;
}
interface UsersUpdateRequestAction {
  type: UserActionTypes.UPDATE_USER;
  payload: Users;
}

export type UserAction =
  | UsersFetchRequestAction
  | UsersRemoveRequestAction
  | UsersCreateRequestAction
  | UsersUpdateRequestAction;

export interface UserState {
  users: Users[];
  dispatch?:Dispatch<UserAction>;
}
