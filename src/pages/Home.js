import { useEffect, useState } from "react";
import AssociationCard from "../components/AssociationCard";
import Grid from "../components/Grid";
import H2 from "../components/H2";

const Home = () => {
  const [associations, setAssociations] = useState([]);
  useEffect(() => {
    fetchAssociations();
    // eslint-disable-next-line
  }, []);
  const fetchAssociations = async () => {
    const request = await fetch(
      `${process.env.REACT_APP_API_URL}${"associations"}`
    );
    const response = await request.json();
    setAssociations(response);
  };
  //   console.log(associations);
  //   console.log(process.env.REACT_APP_API_URL);
  return (
    <section>
      <H2>HOME</H2>
      <Grid>
        {associations.map((association) => {
          return <AssociationCard association={association} />
        })}
      </Grid>
    </section>
  );
};

export default Home;
