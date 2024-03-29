import { Reducer } from 'umi';

export interface ITestState {
  name: string;
}

const initState: ITestState = {
  name: 'Thuan',
};

interface ITestModel {
  namespace: string;
  state: ITestState;
  effects: {};
  reducers: {
    updateState: Reducer<ITestState>;
    clearState: Reducer<ITestState>;
  };
}

const TestModel: ITestModel = {
  namespace: 'testModel',
  state: initState,
  effects: {
    *actionSample({ payload, callback }, { call, put }) {},
  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearState() {
      return {
        ...initState,
      };
    },
  },
};

export default TestModel;
