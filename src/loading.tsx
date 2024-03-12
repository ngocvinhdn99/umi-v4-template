import { Spin } from 'antd';

interface Props {}

const Loading = (props: Props) => {
  const {} = props;

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin />
    </div>
  );
};

export default Loading;
