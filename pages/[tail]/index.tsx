import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const GET_TAILS = gql`
  query getTails($tail: String!) {
    long_tails(where: { tail: { _eq: $tail } }) {
      json_id
      tail
    }
  }
`;

const Home: NextPage = () => {
  const router = useRouter();
  const { tail } = router.query;

  const { loading, error, data } = useQuery(GET_TAILS, {
    variables: {
      tail,
    },
  });
  console.log(data);
  return (
    <div className={styles.container}>
      SEPARATE PAGE: {JSON.stringify(data)}
    </div>
  );
};

export default Home;
