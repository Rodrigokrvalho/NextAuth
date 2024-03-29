import { GetServerSideProps } from "next";
import { withSSRAuth } from "../utils/withSSRAuth";
import { setupAPIClient } from "../services/api";

export default function Metrics() {
  return (
    <>
      <h1>Metrics</h1>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/me');


    return {
      props: {

      }
    };
  }, {
  permissions: ['metrics.list'],
  roles: ['administrator']
}
);