import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import H2 from "../components/H2";

const Association = () => {
  const [association, setAssociation] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchAssociation();
    // eslint-disable-next-line
  }, []);
  const fetchAssociation = async () => {
    const request = await fetch(
      `${process.env.REACT_APP_API_URL}${"associations/"}${
        params.association_slug
      }`
    );
    const response = await request.json();
    setAssociation(response);
  };

  if (!association) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <H2>Association</H2>
      {/* {association.map((association) => {
        return <AssociationCard association={association} />;
      })} */}
      <section className="card singleAsso">
        <h3>{association.name}</h3>

        <hr />
        <div className="handleImg">
          <img src={association.image} alt={association.name} />
        </div>

        <article className="description">
          <p className="parapgrapheDescription">{association.description}</p>
        </article>
      </section>
    </>
  );
};

export default Association;
