import { history } from 'umi';

const to = (path, state?) => {
  history.push(path, state);
};

const back = () => {
  history.back();
};

const replace = (path, state?) => {
  history.replace(path, state);
};

export default {
  to,
  back,
  replace,
};
