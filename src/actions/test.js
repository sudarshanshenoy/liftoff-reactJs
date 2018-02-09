

export function loadtestquestions(testdata) {
  return dispatch => {
          dispatch({
            type: "TEST_LOAD",
            payload: testdata
          });
      }
}


export function submittest(correct,wrong) {
  return dispatch => {
    dispatch({
      type: "TEST_SUBMIT",
      payload: {
        correct: correct,
        wrong: wrong,
      }});
  }
}

export function cleartest() {
  return dispatch => {
    dispatch({
      type: "TEST_CLEAR",
      payload: {
        correct: 0,
        wrong: 0,
      }});
  }
}
