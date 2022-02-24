import * as types from "./types";

const delayPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("OK");
    // reject("Error");
  }, 3000);
});

export const addUser = (payload) => (dispatch) =>
  delayPromise.then(
    dispatch({
      type: types.ADD_USER,
      payload: { ...payload, id: Date.now() },
    })
  );

export const deleteUser = (payload) => (dispatch) =>
  delayPromise.then(
    dispatch({
      type: types.DELETE_USER,
      payload: { id: payload },
    })
  );
