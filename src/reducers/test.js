const test = (state = {
  questions: [],
  actualanswers: [],
  correct:0,
  wrong:0
}, action) => {
  switch (action.type) {
    case "TEST_LOAD":
        state = {
          ...state,
          questions: action.payload.questions,
          actualanswers: action.payload.actualanswers
        };
        break;
    case "TEST_SUBMIT":
        state = {
          ...state,
          correct: action.payload.correct,
          wrong: action.payload.wrong,
        };
        break;
    case "TEST_CLEAR":
        state = {
          ...state,
          correct: action.payload.correct,
          wrong: action.payload.wrong,
        };
        break;
    default:
        state = {
          ...state
        };
  }
  return state;
};

export default test;
