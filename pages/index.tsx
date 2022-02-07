import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const GET_TAILS = gql`
  query getTails {
    long_tails {
      json_id
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_TAILS);
  return (
    <div className={styles.container}>{JSON.stringify(data?.long_tails)}</div>
  );
};

export default Home;
