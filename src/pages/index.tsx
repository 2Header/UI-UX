import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/catalog");
  }, []);
  return <p></p>;
};

export default Home;
