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
      full_tail {
        title
        description
      }
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
  if (loading) return <span>Loading...</span>;
  const longTail = data?.long_tails?.[0];

  if (!longTail) return <span>No tailes found</span>;

  return (
    <div className={styles.container}>
      <p>Tail id: {longTail.json_id}</p>
      <p>Tail title: {longTail.full_tail.title}</p>
      <p>Tail desc: {longTail.full_tail.description}</p>
    </div>
  );
};

export default Home;
