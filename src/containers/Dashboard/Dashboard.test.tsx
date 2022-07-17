import React from "react";
import Dashboard, { mapStateToProps } from "./Dashboard";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer, { initialState } from "../../store/reducer";

const store = createStore(reducer, initialState);
test('renders Dashboard', async () => {
  const Wrapper = () => (
    <Provider store={store}>{<Dashboard />}</Provider>
  );
  expect(Wrapper).toBeTruthy();
});

test("should mapstatetoprops", () => {
    const state = { ...initialState, dispach: jest.fn };
    expect(mapStateToProps(state as any)).toEqual({
      users:initialState.users,
      dispatch:undefined,
    });
  });
