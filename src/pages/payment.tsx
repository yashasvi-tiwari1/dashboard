import { NextPageWithLayout } from "sewa/pages/_app";
import { ReactElement } from "react";
import Layout from "sewa/components/layout";

const Payment: NextPageWithLayout = () => {
  return (
    <>
      <div> this is payment</div>
    </>
  );
};
Payment.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Payment;
