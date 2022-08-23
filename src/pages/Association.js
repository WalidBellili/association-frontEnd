import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMsg from "./GetMsg";

const Associations = () => {
  const [association, setAssociation] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    fetchDataParams();
  }, [slug]);
  //
  const fetchDataParams = async () => {
    const request = await fetch(`http://localhost:5000/associations/${slug}`);
    const response = await request.json();
    setAssociation(response);
  };
  //

  return (
    <>
      <section className="assocPage">
        <img src={association.image} alt={association.name} />
        <article className="cardAsso">
          <h2>{association.name}</h2>
          <p>{association.description}</p>
        </article>
      </section>
      <section>
        <article>
          <GetMsg />
        </article>
      </section>
    </>
  );
};

export default Associations;
