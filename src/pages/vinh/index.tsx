import key from "@/locales/key";
import { ITestState } from "@/models/test";
import { Button, Input } from 'antd';
import { useEffect } from "react";
import { connect, request, useDispatch, useIntl } from "umi";

interface IProps {
  testModel: ITestState;
  loading: any;
}

function VinhPage(props: IProps) {
  const { testModel, loading } = props;
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const testEffectDva = () => {
    dispatch({
      type: "testModel/actionSample",
    });
  };

  const testRequest = async () => {
    await request(
      "https://svc.cashbag.dev/api/transaction-online/transactions/65f4041ab8317f1e6a350d65",
      {}
    );
  };

  useEffect(() => {
    testEffectDva();
    testRequest();
  }, []);

  return (
    <div>
      <p>Test model: {testModel.name}</p>

      <p className="font-bold p-3 text-xs">Test tailwind</p>

      <p>Test locales: {formatMessage({ id: key.myName })}</p>

      <Button>test antd</Button>
      <Input />
    </div>
  );
}

export default connect(({ testModel, loading }) => ({
  testModel,
  loading,
}))(VinhPage);
